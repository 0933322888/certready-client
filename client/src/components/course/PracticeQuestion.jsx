import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import api from '../../utils/api';

export default function PracticeQuestion({ 
  question, 
  options, 
  correctIndex, 
  explanation, 
  onNext, 
  questionId, 
  actualQuestionId,
  nextQuestionId,
  courseId,
  chapterId,
  savedAnswer,
  onAnswerSave,
  explanationLabel,
  nextQuestionLabel,
}) {
  const { t } = useTranslation();
  const explanationText = explanationLabel ?? t('learn.explanation');
  const nextText = nextQuestionLabel ?? t('learn.nextQuestion');
  const [selectedIndex, setSelectedIndex] = useState(savedAnswer?.selectedIndex ?? null);
  const [showExplanation, setShowExplanation] = useState(savedAnswer ? true : false);
  const [isCorrect, setIsCorrect] = useState(savedAnswer?.isCorrect ?? null);
  const questionRef = useRef(null);

  // Load saved answer on mount
  useEffect(() => {
    if (savedAnswer) {
      setSelectedIndex(savedAnswer.selectedIndex);
      setIsCorrect(savedAnswer.isCorrect);
      setShowExplanation(true);
    }
  }, [savedAnswer]);

  const handleSelect = async (index) => {
    if (selectedIndex !== null) return; // Already answered
    
    setSelectedIndex(index);
    const correct = index === correctIndex;
    setIsCorrect(correct);
    setShowExplanation(true);

    // Practice mode: notify parent for progress/session tracking
    if (onAnswerSave && actualQuestionId) {
      onAnswerSave(actualQuestionId, { selectedIndex: index, isCorrect: correct });
    }

    // Save answer to database (course mode)
    if (courseId && chapterId && actualQuestionId) {
      try {
        await api.post('/answers', {
          courseId,
          chapterId,
          questionId: actualQuestionId,
          selectedIndex: index,
          isCorrect: correct,
        });
      } catch (error) {
        console.error('Failed to save answer:', error);
        // Don't show error to user - answer is still visible locally
      }
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
    
    // Scroll to next question
    if (nextQuestionId) {
      setTimeout(() => {
        const nextElement = document.getElementById(nextQuestionId);
        if (nextElement) {
          // Get the element's position relative to the viewport
          const elementPosition = nextElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 150; // 100px offset from top
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    // Don't reset state - keep selection and explanation visible
  };

  return (
    <div id={questionId} ref={questionRef} className="bg-surface border border-border rounded-xl p-6 my-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-text-primary mb-4">{question}</h3>
        <div className="space-y-2">
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isCorrectAnswer = index === correctIndex;
            const showCorrect = showExplanation && isCorrectAnswer;
            const showIncorrect = showExplanation && isSelected && !isCorrectAnswer;

            let buttonClass = 'w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 ';
            if (showCorrect) {
              buttonClass += 'bg-success/20 border-success text-success';
            } else if (showIncorrect) {
              buttonClass += 'bg-danger/20 border-danger text-danger';
            } else if (isSelected) {
              buttonClass += 'bg-accent/20 border-accent text-accent';
            } else {
              buttonClass += 'bg-surface-2 border-border text-text-primary hover:border-accent hover:bg-surface';
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={selectedIndex !== null || showExplanation}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                  {showCorrect && (
                    <Badge variant="success">{t('learn.correct')}</Badge>
                  )}
                  {showIncorrect && (
                    <Badge variant="danger">{t('learn.incorrect')}</Badge>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showExplanation && (
        <div className="mt-4 p-4 bg-surface-2 rounded-lg border border-border">
          <p className="text-sm text-text-primary leading-relaxed">
            <span className="font-semibold text-accent">{explanationText}: </span>
            {explanation}
          </p>
          {onNext && (
            <div className="mt-4">
              <Button onClick={handleNext} size="sm">
                {nextText} →
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
