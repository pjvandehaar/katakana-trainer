import { useState, useEffect, useRef } from 'react';
import { toHiragana, getKanaRomajiRubyHTML, getKanaRomajiBreakdownString } from '../utils';
import Flashcard from './Flashcard';
import { VocabularyItem } from '../constants';

interface QuizProps {
  currentWordList: VocabularyItem[];
  currentIndex: number;
  useHiragana: boolean;
  onSubmit: (answer: string) => { isCorrect: boolean; message?: string; showAnswer?: boolean } | undefined;
  onShowCheatSheet: () => void;
  animatingNext: boolean;
}

const Quiz: React.FC<QuizProps> = ({
  currentWordList,
  currentIndex,
  useHiragana,
  onSubmit,
  onShowCheatSheet,
  animatingNext,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '', showAnswer: false });
  const [showSounds, setShowSounds] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const total = currentWordList.length;
  const currentWord = currentWordList[currentIndex];

  useEffect(() => {
    if (!animatingNext) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      setFeedback({ message: '', type: '', showAnswer: false });
      setUserAnswer('');
      setShowSounds(false);
    }
  }, [currentIndex, animatingNext]);

  const handleSubmit = () => {
    const result = onSubmit(userAnswer);
    if (result && !result.isCorrect) {
      setFeedback({
        message: result.message || '',
        type: 'incorrect',
        showAnswer: !!result.showAnswer
      });
    }
  };

  const getWordDisplay = (wordObj: VocabularyItem, isCurrent: boolean) => {
    const text = useHiragana ? toHiragana(wordObj.katakana) : wordObj.katakana;
    if (isCurrent && showSounds) {
      return getKanaRomajiRubyHTML(text);
    }
    return text;
  };

  return (
    <div className="flashcard-section show">
      <div className="progress">
        <span id="progress-text">Question {currentIndex + 1} of {total}</span>
      </div>

      <div className="flashcard-container">
        {currentWordList.map((word, index) => {
          // Only render current and next (and previous during animation if we wanted, but current is enough)
          const isVisible = index === currentIndex || index === currentIndex + 1;
          if (!isVisible) return null;

          let slideClass = 'slide-nowhere';
          if (index === currentIndex) {
            slideClass = animatingNext ? 'slide-right' : 'slide-nowhere';
          } else if (index === currentIndex + 1) {
            slideClass = animatingNext ? 'slide-nowhere' : 'slide-left';
          }

          return (
            <Flashcard
              key={index}
              word={getWordDisplay(word, index === currentIndex)}
              slideClass={slideClass}
              style={{ position: 'absolute', width: '100%' }}
            />
          );
        })}
      </div>

      <div className={`feedback ${feedback.message ? 'show' : ''} ${feedback.type}`} id="feedback">
        <div>{feedback.message}</div>
        {feedback.showAnswer && (
          <>
            <div className="kana-breakdown">
              {getKanaRomajiBreakdownString(useHiragana ? toHiragana(currentWord.katakana) : currentWord.katakana)}
            </div>
            <div style={{ marginTop: '8px', fontSize: '0.95em' }}>
              Type "{currentWord.answer}" and press Submit to continue.
            </div>
          </>
        )}
      </div>

      <div className="input-section">
        <input
          type="text"
          id="answer-input"
          ref={inputRef}
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Type it in English and hit Enter"
          autoComplete="off"
        />
        <button id="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>

      <div className="button-group">
        <button className="cheat-button" id="show-cheat-sheet-btn" onClick={onShowCheatSheet}>Show kana cheat sheet</button>
        <button className="cheat-button" id="show-sounds-btn" onClick={() => setShowSounds(true)} disabled={showSounds}>
          Show sounds below kana
        </button>
      </div>
    </div>
  );
};

export default Quiz;
