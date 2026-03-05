import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getGuideBySlug } from '../data/tradeGuides';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getPracticePageSEO, getBreadcrumbStructuredData } from '../utils/seo';
import PracticeQuestion from '../components/course/PracticeQuestion';
import NotFoundPage from './NotFoundPage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';
import { getQuestions, loadSession, clearSession } from '../api/practiceApi';
import { usePracticeSession } from '../hooks/usePracticeSession';

export default function PracticePage() {
  const { tradeSlug } = useParams();
  const { t } = useTranslation();
  const guide = getGuideBySlug(tradeSlug);

  const [phase, setPhase] = useState('idle');
  const [loadError, setLoadError] = useState(null);
  const [savedSession, setSavedSession] = useState(null);

  const {
    questions,
    answers,
    setAnswer,
    startSession,
    restoreSession,
    clearSession: clearSessionState,
    questionsAnswered,
    correctAnswers,
    accuracyPercentage,
    isComplete,
    topicStats,
    strongTopics,
    weakTopics,
  } = usePracticeSession(tradeSlug, [], {});

  useEffect(() => {
    const session = loadSession();
    if (session?.tradeSlug === tradeSlug && session?.questions?.length > 0) {
      setSavedSession(session);
    } else {
      setSavedSession(null);
    }
  }, [tradeSlug]);

  useEffect(() => {
    if (isComplete && questions.length > 0) {
      setPhase('summary');
    }
  }, [isComplete, questions.length]);

  const handleStartNew = useCallback(async () => {
    setLoadError(null);
    setPhase('loading');
    try {
      const { questions: qs } = await getQuestions(tradeSlug, { limit: 20 });
      if (!qs?.length) {
        setLoadError(t('practicePage.noQuestionsInBank'));
        setPhase('idle');
        return;
      }
      clearSession();
      startSession(qs);
      setPhase('ready');
    } catch (err) {
      setLoadError(t('practicePage.loadError'));
      setPhase('idle');
    }
  }, [tradeSlug, startSession, clearSession, t]);

  const handleContinue = useCallback(() => {
    if (!savedSession?.questions?.length) return;
    restoreSession(savedSession.questions, savedSession.answers);
    setPhase('ready');
    setSavedSession(null);
  }, [savedSession, restoreSession]);

  const handleFinishSession = useCallback(() => {
    clearSession();
    clearSessionState();
    setPhase('idle');
    setSavedSession(null);
  }, [clearSessionState]);

  if (!guide) {
    return <NotFoundPage />;
  }

  const seo = getPracticePageSEO({
    tradeName: guide.tradeName,
    tradeCode: guide.tradeCode,
    tradeSlug: guide.slug,
    questionCount: 20,
  });
  const breadcrumbItems = [
    { name: t('practicePage.home'), url: paths.home },
    { name: t('practiceTestsPage.breadcrumb'), url: paths.practiceTests },
    { name: t('practicePage.freePracticeQuestions'), url: paths.practiceTest(guide.slug) },
  ];

  return (
    <>
      <SEO
        {...seo}
        structuredData={[getBreadcrumbStructuredData(breadcrumbItems)].filter(Boolean)}
      />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-4xl font-display font-bold text-text-primary mb-4">
          {t('practicePage.title', { tradeName: guide.tradeName })}
        </h1>


        {phase === 'loading' && (
          <Card className="py-12 text-center text-text-muted">
            {t('practicePage.loading')}
          </Card>
        )}

        {phase === 'idle' && (
          <>
            {loadError && (
              <Card className="mb-6 border-danger/50 bg-danger/5">
                <p className="text-danger">{loadError}</p>
              </Card>
            )}
            <Card className="mb-6">
              <p className="text-lg text-text-muted mb-8">
                {t('practicePage.subtitle', { count: 20, code: guide.tradeCode })}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleStartNew}>{t('practicePage.startSession')}</Button>
                {savedSession && (
                  <Button variant="outline" onClick={handleContinue}>
                    {t('practicePage.continueSession')}
                  </Button>
                )}
              </div>
            </Card>
            <p className="text-text-muted text-sm">
              {t('practicePage.wantMorePractice', { tradeName: guide.tradeName, count: guide.examQuestions })}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link to={paths.trade(guide.slug)} className="text-accent hover:text-accent/80 text-sm font-medium">
                {t('practicePage.viewFullCourseBtn', { tradeName: guide.tradeName })} →
              </Link>
              <Link to={paths.mockExam(guide.slug)} className="text-accent hover:text-accent/80 text-sm font-medium">
                {t('mockExam.title')} →
              </Link>
            </div>
          </>
        )}

        {phase === 'ready' && questions.length > 0 && (
          <>
            <Card className="mb-6 p-4">
              <h2 className="text-lg font-semibold text-text-primary mb-3">{t('practicePage.progress')}</h2>
              <p className="text-text-muted">
                {t('practicePage.questionsAnswered', { count: questionsAnswered })}
              </p>
              <p className="text-text-muted">
                {t('practicePage.accuracy', { percent: accuracyPercentage })}
              </p>
            </Card>

            {topicStats.length > 0 && (
              <Card className="mb-6 p-4">
                <h2 className="text-lg font-semibold text-text-primary mb-3">{t('practicePage.topicPerformance')}</h2>
                <ul className="space-y-2">
                  {topicStats.map((tstat) => {
                    const isWeak = tstat.total >= 1 && tstat.percentage < 50;
                    return (
                      <li
                        key={tstat.topicId}
                        className={`flex justify-between items-center text-sm ${isWeak ? 'text-amber-600 dark:text-amber-400' : 'text-text-muted'}`}
                      >
                        <span>{tstat.topicLabel}</span>
                        <span className="font-medium">{tstat.percentage}%</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            )}

            <div className="space-y-6">
              {questions.map((q, index) => {
                const nextQ = questions[index + 1];
                const savedAnswer = answers[q.id] ? { selectedIndex: answers[q.id].selectedIndex, isCorrect: answers[q.id].isCorrect } : null;
                return (
                  <PracticeQuestion
                    key={q.id}
                    questionId={`practice-${q.id}`}
                    actualQuestionId={q.id}
                    nextQuestionId={nextQ ? `practice-${nextQ.id}` : null}
                    courseId={null}
                    chapterId={null}
                    question={q.question}
                    options={q.options}
                    correctIndex={q.correctIndex}
                    explanation={q.explanation}
                    savedAnswer={savedAnswer}
                    onAnswerSave={(qId, result) => setAnswer(qId, result.selectedIndex, result.isCorrect)}
                    explanationLabel={t('learn.explanation')}
                    nextQuestionLabel={t('learn.nextQuestion')}
                  />
                );
              })}
            </div>
          </>
        )}

        {phase === 'summary' && (
          <Card className="p-6">
            <h2 className="text-2xl font-display font-bold text-text-primary mb-6">{t('practicePage.sessionSummary')}</h2>
            <p className="text-lg text-text-primary mb-2">
              {t('practicePage.score', { correct: correctAnswers, total: questions.length })}
            </p>
            <p className="text-text-muted mb-6">
              {t('practicePage.accuracy', { percent: accuracyPercentage })}
            </p>
            <div className="mb-4">
              <h3 className="font-semibold text-text-primary mb-2">{t('practicePage.strongTopics')}</h3>
              <p className="text-text-muted">
                {strongTopics.length > 0 ? strongTopics.join(', ') : t('practicePage.noStrongTopics')}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-text-primary mb-2">{t('practicePage.weakTopics')}</h3>
              <p className="text-text-muted">
                {weakTopics.length > 0 ? weakTopics.join(', ') : t('practicePage.noWeakTopics')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleFinishSession}>{t('practicePage.tryAgain')}</Button>
              <Link to={paths.practiceTests}>
                <Button variant="outline">{t('practicePage.backToPracticeTests')}</Button>
              </Link>
            </div>
          </Card>
        )}

        {phase !== 'idle' && phase !== 'loading' && (
          <section className="mt-12 pt-8 border-t border-border">
            <Link to={paths.trade(guide.slug)} className="text-accent hover:text-accent/80 text-sm font-medium">
              {t('practicePage.viewFullCourseBtn', { tradeName: guide.tradeName })} →
            </Link>
          </section>
        )}
      </main>
    </>
  );
}
