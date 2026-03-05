import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { getGuideSlugFromCourseSlug } from '../../data/tradeGuides';
import { getTradeBySlug } from '../../data/tradeGuideContent';
import { paths } from '../../utils/routes';
import KeyTermCard from './KeyTermCard';
import InfoBox from './InfoBox';
import ComparisonTable from './ComparisonTable';
import PracticeQuestion from './PracticeQuestion';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';
import api from '../../utils/api';

export default function ChapterContent({ course, chapter, onQuestionComplete }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [savedAnswers, setSavedAnswers] = useState({});
  const [loadingAnswers, setLoadingAnswers] = useState(true);

  // Load saved answers for this chapter
  useEffect(() => {
    if (user && chapter.practiceQuestions && course) {
      api.get(`/answers/${course.id}/${chapter.id}`)
        .then(res => {
          setSavedAnswers(res.data.answers || {});
          setLoadingAnswers(false);
        })
        .catch(err => {
          console.error('Failed to load saved answers:', err);
          setLoadingAnswers(false);
        });
    } else {
      setLoadingAnswers(false);
    }
  }, [user, chapter.id, chapter.practiceQuestions, course]);

  const handleAnswerSave = (questionId, answer) => {
    setSavedAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };
  const renderContent = (content) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p className="text-text-primary leading-relaxed mb-4 text-base">
            {content.text}
          </p>
        );
      
      case 'keyTerm':
        return (
          <KeyTermCard term={content.term} definition={content.definition} />
        );
      
      case 'bullets':
        return (
          <ul className="list-none space-y-2 my-4 ml-4">
            {content.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-3 mt-1.5">•</span>
                <span className="text-text-primary text-base leading-relaxed flex-1">{item}</span>
              </li>
            ))}
          </ul>
        );
      
      case 'numbered':
        return (
          <ol className="list-decimal space-y-2 my-4 ml-6">
            {content.items.map((item, index) => (
              <li key={index} className="text-text-primary text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ol>
        );
      
      case 'table':
        return (
          <ComparisonTable headers={content.headers} rows={content.rows} />
        );
      
      case 'infoBox':
        return (
          <InfoBox title={content.title} items={content.items} />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-4xl font-display font-bold text-accent">
            Chapter {chapter.number}
          </span>
        </div>
        <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
          {chapter.title}
        </h1>
        <p className="text-lg text-text-muted mb-4">{chapter.subtitle}</p>
        {chapter.estimatedMinutes && (
          <Badge variant="accent" className="text-xs">
            {chapter.estimatedMinutes} min read
          </Badge>
        )}
      </div>

      {/* Full Mock Exam simulation CTA */}
      {chapter.isMockExam && course?.id && (() => {
        const tradeSlug = getGuideSlugFromCourseSlug(course.id);
        const trade = getTradeBySlug(tradeSlug);
        if (!trade) return null;
        return (
          <div className="mb-8">
            <Card className="p-6 border-2 border-accent/30 bg-accent/5">
              <h2 className="text-xl font-display font-semibold text-text-primary mb-2">
                {t('mockExam.title')}
              </h2>
              <p className="text-text-muted mb-4">
                {t('mockExam.instructionQuestions', { count: trade.examQuestions })} · {t('mockExam.instructionTime', { duration: trade.examDuration })} · {t('mockExam.instructionPassing', { percent: trade.passingScore })}
              </p>
              <Link to={paths.mockExam(tradeSlug)}>
                <Button size="lg">{t('mockExam.startExam')}</Button>
              </Link>
            </Card>
          </div>
        );
      })()}

      {/* Sections */}
      {chapter.sections && chapter.sections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">
            {section.title}
          </h2>
          <div className="space-y-4">
            {section.content && section.content.map((contentBlock, index) => (
              <div key={index}>
                {renderContent(contentBlock)}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Practice Questions */}
      {chapter.practiceQuestions && chapter.practiceQuestions.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-display font-semibold text-text-primary mb-6">
            {t('learn.practiceQuestions')}
          </h2>
          <div className="space-y-6">
            {chapter.practiceQuestions.map((question, index) => {
              const domQuestionId = `question-${question.id}`;
              const nextQuestion = chapter.practiceQuestions[index + 1];
              const nextQuestionId = nextQuestion ? `question-${nextQuestion.id}` : null;
              const savedAnswer = savedAnswers[question.id];
              
              return (
                <PracticeQuestion
                  key={question.id}
                  questionId={domQuestionId}
                  actualQuestionId={question.id}
                  nextQuestionId={nextQuestionId}
                  courseId={course?.id}
                  chapterId={chapter.id}
                  question={question.question}
                  options={question.options}
                  correctIndex={question.correctIndex}
                  explanation={question.explanation}
                  savedAnswer={savedAnswer}
                  onAnswerSave={handleAnswerSave}
                  onNext={index < chapter.practiceQuestions.length - 1 ? onQuestionComplete : null}
                  explanationLabel={t('learn.explanation')}
                  nextQuestionLabel={t('learn.nextQuestion')}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
