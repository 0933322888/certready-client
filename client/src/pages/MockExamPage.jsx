import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTradeBySlug, examDurationMinutes } from '../data/tradeGuideContent';
import { getQuestions } from '../api/practiceApi';
import { getTopicStats, getStrongAndWeakTopics } from '../hooks/usePracticeSession';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';
import NotFoundPage from './NotFoundPage';

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function MockExamPage() {
  const { tradeSlug } = useParams();
  const { t } = useTranslation();
  const trade = getTradeBySlug(tradeSlug);

  const [phase, setPhase] = useState('idle'); // 'idle' | 'loading' | 'exam' | 'results'
  const [loadError, setLoadError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // questionId -> selectedIndex (0-based)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(null);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const durationMinutes = trade ? examDurationMinutes(trade) : 180;
  const totalSeconds = durationMinutes * 60;

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  const toggleMarkForReview = useCallback(() => {
    if (!currentQuestion) return;
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(currentQuestion.id)) next.delete(currentQuestion.id);
      else next.add(currentQuestion.id);
      return next;
    });
  }, [currentQuestion]);

  const handleStartExam = useCallback(async () => {
    if (!trade) return;
    setLoadError(null);
    setPhase('loading');
    try {
      const limit = Math.min(trade.examQuestions || 100, 200);
      const { questions: qs } = await getQuestions(tradeSlug, { limit });
      if (!qs?.length) {
        setLoadError(t('mockExam.noQuestions'));
        setPhase('idle');
        return;
      }
      const count = Math.min(qs.length, trade.examQuestions || qs.length);
      const selected = qs.slice(0, count);
      setQuestions(selected);
      setAnswers({});
      setCurrentIndex(0);
      setMarkedForReview(new Set());
      setTimeRemainingSeconds(totalSeconds);
      setPhase('exam');
    } catch (err) {
      setLoadError(t('mockExam.loadError'));
      setPhase('idle');
    }
  }, [trade, tradeSlug, totalSeconds, t]);

  const handleSubmitExam = useCallback(() => {
    setPhase('results');
    setShowSubmitConfirm(false);
  }, []);

  useEffect(() => {
    if (phase !== 'exam' || timeRemainingSeconds === null) return;
    if (timeRemainingSeconds <= 0) {
      handleSubmitExam();
      return;
    }
    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, timeRemainingSeconds, handleSubmitExam]);

  const handleAnswerSelect = useCallback((questionId, selectedIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedIndex }));
  }, []);

  const results = useMemo(() => {
    if (phase !== 'results' || questions.length === 0) return null;
    const answersWithCorrect = {};
    questions.forEach((q) => {
      const sel = answers[q.id];
      const isCorrect = sel !== undefined ? sel === q.correctIndex : false;
      answersWithCorrect[q.id] = {
        selectedIndex: sel ?? -1,
        isCorrect,
      };
    });
    const topicStats = getTopicStats(questions, answersWithCorrect);
    const { strong: strongTopics, weak: weakTopics } = getStrongAndWeakTopics(topicStats);
    const correctCount = Object.values(answersWithCorrect).filter((a) => a.isCorrect).length;
    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const passingScore = trade?.passingScore ?? 70;
    const passed = scorePercent >= passingScore;
    return {
      correctCount,
      total: questions.length,
      scorePercent,
      passed,
      passingScore,
      topicStats,
      strongTopics,
      weakTopics,
    };
  }, [phase, questions, answers, trade?.passingScore]);

  if (!trade) {
    return <NotFoundPage />;
  }

  const breadcrumbItems = [
    { name: t('practicePage.home'), url: paths.home },
    { name: t('practiceTestsPage.breadcrumb'), url: paths.practiceTests },
    { name: t('practicePage.freePracticeQuestions'), url: paths.practiceTest(tradeSlug) },
    { name: t('mockExam.title'), url: paths.mockExam(tradeSlug) },
  ];

  return (
    <>
      <SEO
        title={t('mockExam.pageTitle', { tradeName: trade.name })}
        description={t('mockExam.pageDescription', {
          tradeName: trade.name,
          count: trade.examQuestions,
          duration: trade.examDuration,
        })}
        structuredData={[]}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {phase === 'idle' && (
          <>
            <h1 className="text-4xl font-display font-bold text-text-primary mb-2">
              {t('mockExam.title')}
            </h1>
            <p className="text-lg text-text-muted mb-6">
              {t('mockExam.subtitle', { tradeName: trade.name })}
            </p>
            {loadError && (
              <Card className="mb-6 border-danger/50 bg-danger/5">
                <p className="text-danger">{loadError}</p>
              </Card>
            )}
            <Card className="mb-6 p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">{t('mockExam.instructions')}</h2>
              <ul className="space-y-2 text-text-muted mb-6">
                <li>• {t('mockExam.instructionQuestions', { count: trade.examQuestions })}</li>
                <li>• {t('mockExam.instructionTime', { duration: trade.examDuration })}</li>
                <li>• {t('mockExam.instructionPassing', { percent: trade.passingScore })}</li>
                <li>• {t('mockExam.instructionUnanswered')}</li>
                <li>• {t('mockExam.instructionOneQuestion')}</li>
                <li>• {t('mockExam.instructionMarkReview')}</li>
              </ul>
              <Button onClick={handleStartExam} size="lg">
                {t('mockExam.startExam')}
              </Button>
            </Card>
            <Link to={paths.practiceTest(tradeSlug)} className="text-accent hover:text-accent/80 text-sm font-medium">
              ← {t('mockExam.backToPractice')}
            </Link>
          </>
        )}

        {phase === 'loading' && (
          <Card className="py-12 text-center text-text-muted">
            {t('mockExam.loading')}
          </Card>
        )}

        {phase === 'exam' && questions.length > 0 && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-surface border border-border rounded-xl p-4 sticky top-20 z-10">
              <div className="flex items-center gap-4">
                <span
                  className={`text-lg font-mono font-semibold ${timeRemainingSeconds <= 300 ? 'text-danger' : 'text-text-primary'}`}
                  aria-live="polite"
                >
                  {t('mockExam.timeRemaining')}: {formatTime(timeRemainingSeconds)}
                </span>
                <span className="text-text-muted text-sm">
                  {t('mockExam.answeredCount', { answered: answeredCount, total: questions.length })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleMarkForReview}
                  className={markedForReview.has(currentQuestion?.id) ? 'ring-2 ring-amber-500' : ''}
                >
                  {markedForReview.has(currentQuestion?.id)
                    ? t('mockExam.unmarkReview')
                    : t('mockExam.markReview')}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowSubmitConfirm(true)}
                >
                  {t('mockExam.submitExam')}
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <p className="text-sm text-text-muted mb-4">
                {t('mockExam.questionOf', { current: currentIndex + 1, total: questions.length })}
              </p>
              <h2 className="text-xl font-semibold text-text-primary mb-6">{currentQuestion.question}</h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentQuestion.id] === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'bg-accent/20 border-accent text-accent'
                          : 'bg-surface-2 border-border text-text-primary hover:border-accent/50'
                      }`}
                    >
                      <span className="font-medium">
                        {String.fromCharCode(65 + index)}. {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Card>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
              >
                ← {t('mockExam.previous')}
              </Button>

              <Button
                variant="outline"
                onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
                disabled={currentIndex === questions.length - 1}
              >
                {t('mockExam.next')} →
              </Button>
              <div className="flex flex-wrap gap-2 justify-center">
                {questions.map((q, i) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`w-9 h-9 rounded-lg border-2 text-sm font-medium transition-all ${
                      i === currentIndex
                        ? 'border-accent bg-accent text-white'
                        : answers[q.id] !== undefined
                        ? 'border-success/50 bg-success/10 text-text-primary'
                        : markedForReview.has(q.id)
                        ? 'border-amber-500 bg-amber-500/10 text-amber-600'
                        : 'border-border bg-surface-2 text-text-muted hover:border-accent/50'
                    }`}
                    title={t('mockExam.goToQuestion', { num: i + 1 })}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
             
            </div>
          </div>
        )}

        {showSubmitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <Card className="max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">{t('mockExam.submitConfirmTitle')}</h3>
              <p className="text-text-muted mb-4">
                {t('mockExam.submitConfirmMessage', { answered: answeredCount, total: questions.length })}
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setShowSubmitConfirm(false)}>
                  {t('mockExam.cancel')}
                </Button>
                <Button variant="danger" onClick={handleSubmitExam}>
                  {t('mockExam.submitAnyway')}
                </Button>
              </div>
            </Card>
          </div>
        )}

        {phase === 'results' && results && (
          <div className="space-y-6">
            <h1 className="text-4xl font-display font-bold text-text-primary">
              {t('mockExam.resultsTitle')}
            </h1>
            <Card className="p-6">
              <p className="text-3xl font-bold text-text-primary mb-2">
                {t('mockExam.scoreLabel')}: {results.scorePercent}%
              </p>
              <p className={`text-xl font-semibold mb-6 ${results.passed ? 'text-success' : 'text-danger'}`}>
                {results.passed ? t('mockExam.passed') : t('mockExam.failed')}
              </p>
              <p className="text-text-muted mb-6">
                {t('mockExam.scoreDetail', {
                  correct: results.correctCount,
                  total: results.total,
                  required: Math.ceil((results.total * results.passingScore) / 100),
                })}
              </p>

              {results.weakTopics.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-text-primary mb-2">{t('mockExam.weakTopics')}</h3>
                  <ul className="list-disc list-inside text-text-muted space-y-1">
                    {results.weakTopics.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </div>
              )}
              {results.strongTopics.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-text-primary mb-2">{t('mockExam.strongTopics')}</h3>
                  <ul className="list-disc list-inside text-text-muted space-y-1">
                    {results.strongTopics.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Button onClick={handleStartExam}>{t('mockExam.tryAgain')}</Button>
                <Link to={paths.practiceTest(tradeSlug)}>
                  <Button variant="outline">{t('mockExam.backToPractice')}</Button>
                </Link>
                <Link to={paths.tradeGuide(tradeSlug)}>
                  <Button variant="ghost">{t('mockExam.viewStudyGuide')}</Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </main>
    </>
  );
}
