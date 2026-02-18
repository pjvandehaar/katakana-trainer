import { useState, useEffect } from 'react';
import './App.css';
import { VOCABULARY, VocabularyItem } from './constants';
import { getRandomSubset, getWordsFromURL } from './utils';
import CheatSheet from './components/CheatSheet';
import Quiz from './components/Quiz';
import Results from './components/Results';
import KanaToggle from './components/KanaToggle';
import Popup from './components/Popup';

type View = 'home' | 'quiz' | 'results';

function App() {
  const [view, setView] = useState<View>('home');
  const [useHiragana, setUseHiragana] = useState(false);
  const [currentWordList, setCurrentWordList] = useState<VocabularyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [cheatUseCount, setCheatUseCount] = useState(0);
  const [numWrong, setNumWrong] = useState(0);
  const [showCheatModal, setShowCheatModal] = useState(false);
  const [popupStatus, setPopupStatus] = useState<'hidden' | 'entering' | 'exiting'>('hidden');
  const [animatingNext, setAnimatingNext] = useState(false);

  useEffect(() => {
    const title = useHiragana ? 'Hiragana Trainer' : 'Katakana Trainer';
    document.title = title;
  }, [useHiragana]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCheatModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown, true); // Use capture to be sure
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  const handleStartQuiz = () => {
    const words = getWordsFromURL() || getRandomSubset(10, VOCABULARY);
    setCurrentWordList(words);
    setCurrentIndex(0);
    setScore(0);
    setCheatUseCount(0);
    setNumWrong(0);
    setView('quiz');
  };

  const handleSubmitAnswer = (userAnswer: string) => {
    const clean = (s: string) => s.toLowerCase().replace(/ /g, '');
    const currentWord = currentWordList[currentIndex];
    const correctAnswers = [currentWord.answer, ...(currentWord.alternates || [])].map(clean);
    const isCorrect = correctAnswers.includes(clean(userAnswer));

    if (numWrong === 0) {
      if (isCorrect) {
        setScore(s => s + 1);
        handleCorrect();
        return { isCorrect: true };
      } else if (!userAnswer.trim()) {
        return { isCorrect: false, message: 'Please enter an answer' };
      } else {
        setNumWrong(n => n + 1);
        return { isCorrect: false, message: `Wrong! ${currentWord.katakana} is "${currentWord.answer}".`, showAnswer: true };
      }
    } else {
      if (isCorrect) {
        handleCorrect();
        return { isCorrect: true };
      } else if (!userAnswer.trim()) {
        return { isCorrect: false, message: `Please type "${currentWord.answer}" to continue.`, showAnswer: true };
      } else {
        setNumWrong(n => n + 1);
        return { isCorrect: false, message: `Still not correct (${numWrong + 1}nd time) — please type "${currentWord.answer}" and hit Submit to continue.`, showAnswer: true };
      }
    }
  };

  const handleCorrect = () => {
    /* 500ms of "Correct!" popup dropping, then 300ms of everything sliding right. */
    setPopupStatus('entering');
    setTimeout(() => {
      setPopupStatus('exiting');
      setAnimatingNext(true);
      // Wait for the slide animation to complete (300ms as per CSS transition)
      setTimeout(() => {
        setAnimatingNext(false);
        setPopupStatus('hidden');
        if (currentIndex + 1 < currentWordList.length) {
          setCurrentIndex(i => i + 1);
          setNumWrong(0);
        } else {
          setView('results');
        }
      }, 300);
    }, 500); // Match popup display duration
  };

  const toggleCheatModal = (show: boolean) => {
    if (show) setCheatUseCount(c => c + 1);
    setShowCheatModal(show);
  };

  return (
    <div className="container">
      {view === 'home' && (
        <CheatSheet useHiragana={useHiragana} onStart={handleStartQuiz} />
      )}

      {view === 'quiz' && currentWordList.length > 0 && (
        <Quiz
          currentWordList={currentWordList}
          currentIndex={currentIndex}
          useHiragana={useHiragana}
          onSubmit={handleSubmitAnswer}
          onShowCheatSheet={() => toggleCheatModal(true)}
          animatingNext={animatingNext}
        />
      )}

      {view === 'results' && (
        <Results
          score={score}
          total={currentWordList.length}
          cheatUseCount={cheatUseCount}
          onRestart={handleStartQuiz}
        />
      )}

      {showCheatModal && (
        <>
          <div className="modal-backdrop show" onClick={() => toggleCheatModal(false)}></div>
          <CheatSheet
            useHiragana={useHiragana}
            isModal={true}
            onClose={() => toggleCheatModal(false)}
          />
        </>
      )}

      <Popup status={popupStatus} />

      <KanaToggle useHiragana={useHiragana} onToggle={setUseHiragana} />
    </div>
  );
}

export default App;
