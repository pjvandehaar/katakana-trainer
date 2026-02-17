import { useState, useEffect, useRef } from 'react';
import { toHiragana, getKanaRomajiRubyHTML, getKanaRomajiBreakdownString } from '../utils';
import Flashcard from './Flashcard';
import { VocabularyItem } from '../constants';

interface QuizProps {
  currentWord: VocabularyItem;
  nextWord?: VocabularyItem;
  currentIndex: number;
  total: number;
  useHiragana: boolean;
  onSubmit: (answer: string) => { isCorrect: boolean; message?: string; showAnswer?: boolean } | undefined;
  onShowCheatSheet: () => void;
  animatingNext: boolean;
}

const Quiz: React.FC<QuizProps> = ({
  currentWord,
  nextWord,
  currentIndex,
  total,
  useHiragana,
  onSubmit,
  onShowCheatSheet,
  animatingNext,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '', showAnswer: false });
  const [showSounds, setShowSounds] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // We keep track of the displayed words to ensure smooth transitions
  const [displayWord, setDisplayWord] = useState('');
  const [nextDisplayWord, setNextDisplayWord] = useState('');

  useEffect(() => {
    const currentDisplayText = useHiragana ? toHiragana(currentWord.katakana) : currentWord.katakana;
    const word = showSounds ? getKanaRomajiRubyHTML(currentDisplayText) : currentDisplayText;
    setDisplayWord(word);

    if (nextWord) {
      const nextDisplayText = useHiragana ? toHiragana(nextWord.katakana) : nextWord.katakana;
      setNextDisplayWord(nextDisplayText);
    } else {
      setNextDisplayWord('');
    }
  }, [currentWord, nextWord, useHiragana, showSounds]);

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

  const currentDisplayText = useHiragana ? toHiragana(currentWord.katakana) : currentWord.katakana;

  return (
    <div className="flashcard-section show" style={{ position: 'relative' }}>
      <div className="progress">
        <span id="progress-text">Question {currentIndex + 1} of {total}</span>
      </div>
      <div className="flashcard-container" style={{ position: 'relative', minHeight: '200px', marginBottom: '30px' }}>
        <Flashcard
          key={`current-${currentIndex}`}
          word={displayWord}
          slideClass={animatingNext ? 'slide-right' : 'slide-nowhere'}
          style={{ position: 'absolute', width: '100%' }}
        />
        <Flashcard
          key={`next-${currentIndex}`}
          word={nextDisplayWord}
          slideClass={animatingNext ? 'slide-nowhere' : 'slide-left'}
          style={{ visibility: nextWord ? 'visible' : 'hidden' }}
        />
      </div>

      <div className={`feedback ${feedback.message ? '' : 'hidden'} ${feedback.type}`} id="feedback">
        <div>{feedback.message}</div>
        {feedback.showAnswer && (
          <>
            <div className="kana-breakdown">{getKanaRomajiBreakdownString(currentDisplayText)}</div>
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
