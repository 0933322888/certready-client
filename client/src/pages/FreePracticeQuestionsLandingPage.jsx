import { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getGuideBySlug } from '../data/tradeGuides';
import { getTradeSlugFromLandingKey } from '../utils/freePracticeLanding';
import SEO from '../components/seo/SEO';
import { getFreePracticeLandingSEO, getBreadcrumbStructuredData, getFAQStructuredData } from '../utils/seo';
import PracticeQuestion from '../components/course/PracticeQuestion';
import NotFoundPage from './NotFoundPage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';
import { getQuestions } from '../api/practiceApi';
import { usePracticeSession } from '../hooks/usePracticeSession';

const FREE_QUESTION_COUNT = 20;
const CTA_AFTER_QUESTION_INDEX = 10;

export default function FreePracticeQuestionsLandingPage() {
  const { tradeKey: tradeKeyParam } = useParams();
  const pathname = useLocation().pathname;
  const tradeKey = tradeKeyParam ?? pathname.replace(/^\//, '').replace(/-red-seal-practice-questions$/, '');
  const { t } = useTranslation();
  const tradeSlug = getTradeSlugFromLandingKey(tradeKey);
  const guide = tradeSlug ? getGuideBySlug(tradeSlug) : null;

  const [phase, setPhase] = useState('loading');
  const [loadError, setLoadError] = useState(null);

  const {
    questions,
    answers,
    setAnswer,
    startSession,
    questionsAnswered,
    correctAnswers,
    accuracyPercentage,
    isComplete,
  } = usePracticeSession(tradeSlug || '', [], {});

  useEffect(() => {
    if (!tradeSlug || !guide) return;
    let cancelled = false;
    setLoadError(null);
    setPhase('loading');
    getQuestions(tradeSlug, { limit: FREE_QUESTION_COUNT })
      .then(({ questions: qs }) => {
        if (cancelled) return;
        if (!qs?.length) {
          setLoadError(t('practicePage.noQuestionsInBank'));
          setPhase('idle');
          return;
        }
        startSession(qs);
        setPhase('ready');
      })
      .catch(() => {
        if (!cancelled) {
          setLoadError(t('practicePage.loadError'));
          setPhase('idle');
        }
      });
    return () => { cancelled = true; };
  }, [tradeSlug, guide, startSession, t]);

  const handleTryAgain = useCallback(() => {
    startSession(questions);
  }, [questions, startSession]);

  if (tradeKey == null || !tradeSlug || !guide) {
    return <NotFoundPage />;
  }

  const landingPath = paths.freePracticeLanding(tradeKey);
  const seo = getFreePracticeLandingSEO({
    tradeName: guide.tradeName,
    tradeCode: guide.tradeCode,
    tradeSlug: guide.slug,
    landingPath,
    questionCount: FREE_QUESTION_COUNT,
  });
  const breadcrumbItems = [
    { name: t('practicePage.home'), url: paths.home },
    { name: t('practiceTestsPage.breadcrumb'), url: paths.practiceTests },
    { name: t('freePracticeLanding.breadcrumb', { tradeName: guide.tradeName }), url: landingPath },
  ];
  const structuredData = [
    getBreadcrumbStructuredData(breadcrumbItems),
    guide.faqs?.length ? getFAQStructuredData(guide.faqs) : null,
  ].filter(Boolean);

  return (
    <>
      <SEO
        {...seo}
        structuredData={structuredData}
      />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label={t('common.ariaLabelBreadcrumb')} className="text-sm text-text-muted mb-6">
          <ol className="flex flex-wrap gap-x-2 gap-y-1">
            {breadcrumbItems.map((item, i) => (
              <li key={item.url}>
                {i > 0 && <span className="mr-2">/</span>}
                {i < breadcrumbItems.length - 1 ? (
                  <Link to={item.url} className="hover:text-accent">{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-4xl font-display font-bold text-text-primary mb-4">
          {t('freePracticeLanding.title', { tradeName: guide.tradeName })}
        </h1>

        {/* Introduction to the exam */}
        <Card className="mb-8 p-6">
          <p className="text-lg text-text-muted leading-relaxed mb-4">
            {t('freePracticeLanding.intro', {
              tradeName: guide.tradeName,
              tradeCode: guide.tradeCode,
              count: guide.examQuestions,
              passMark: guide.passMark,
            })}
          </p>
          <p className="text-text-muted">
            {t('freePracticeLanding.introSub')}
          </p>
        </Card>

        {phase === 'loading' && (
          <Card className="py-12 text-center text-text-muted">
            {t('practicePage.loading')}
          </Card>
        )}

        {phase === 'idle' && loadError && (
          <Card className="mb-6 border-danger/50 bg-danger/5">
            <p className="text-danger">{loadError}</p>
            <Link to={paths.practiceTests} className="inline-block mt-3 text-accent hover:text-accent/80 font-medium">
              {t('practicePage.backToPracticeTests')} →
            </Link>
          </Card>
        )}

        {phase === 'ready' && questions.length > 0 && (
          <>
            <div className="mb-6 p-4 bg-surface-2 rounded-xl border border-border">
              <p className="text-text-muted">
                {t('practicePage.questionsAnswered', { count: questionsAnswered })}
                {questionsAnswered > 0 && ` · ${t('practicePage.accuracy', { percent: accuracyPercentage })}`}
              </p>
            </div>

            <div className="space-y-6">
              {questions.map((q, index) => {
                const nextQ = questions[index + 1];
                const savedAnswer = answers[q.id]
                  ? { selectedIndex: answers[q.id].selectedIndex, isCorrect: answers[q.id].isCorrect }
                  : null;
                const showCtaAfterThis = index === CTA_AFTER_QUESTION_INDEX - 1;

                return (
                  <div key={q.id}>
                    <PracticeQuestion
                      questionId={`landing-${q.id}`}
                      actualQuestionId={q.id}
                      nextQuestionId={nextQ ? `landing-${nextQ.id}` : null}
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
                    {showCtaAfterThis && (
                      <Card className="my-8 p-6 border-accent/30 bg-accent/5">
                        <h2 className="text-xl font-display font-bold text-text-primary mb-2">
                          {t('freePracticeLanding.ctaHeading')}
                        </h2>
                        <p className="text-text-muted mb-4">
                          {t('freePracticeLanding.ctaSubtext', { tradeName: guide.tradeName })}
                        </p>
                        <Link to={paths.trade(guide.slug)}>
                          <Button size="lg">{t('freePracticeLanding.ctaButton')}</Button>
                        </Link>
                      </Card>
                    )}
                  </div>
                );
              })}
            </div>

            {isComplete && (
              <Card className="mt-8 p-6">
                <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                  {t('practicePage.sessionSummary')}
                </h2>
                <p className="text-lg text-text-primary mb-2">
                  {t('practicePage.score', { correct: correctAnswers, total: questions.length })}
                </p>
                <p className="text-text-muted mb-6">
                  {t('practicePage.accuracy', { percent: accuracyPercentage })}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleTryAgain}>{t('practicePage.tryAgain')}</Button>
                  <Link to={paths.trade(guide.slug)}>
                    <Button variant="primary">{t('freePracticeLanding.ctaButton')}</Button>
                  </Link>
                  <Link to={paths.practiceTests}>
                    <Button variant="outline">{t('practicePage.backToPracticeTests')}</Button>
                  </Link>
                </div>
              </Card>
            )}
          </>
        )}

        <section className="mt-12 pt-8 border-t border-border">
          <Link to={paths.tradeGuide(guide.slug)} className="text-accent hover:text-accent/80 text-sm font-medium">
            {t('tradeGuidePage.ctaHeading')} →
          </Link>
          <span className="text-text-muted mx-2">·</span>
          <Link to={paths.practiceTests} className="text-accent hover:text-accent/80 text-sm font-medium">
            {t('practiceTestsPage.breadcrumb')} →
          </Link>
        </section>
      </main>
    </>
  );
}
