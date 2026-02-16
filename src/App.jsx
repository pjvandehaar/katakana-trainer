import React, { useState, useEffect } from 'react';
import './App.css';
import { VOCABULARY } from './constants';
import { getRandomSubset, getWordsFromURL } from './utils';
import CheatSheet from './components/CheatSheet';
import Quiz from './components/Quiz';
import Results from './components/Results';
import KanaToggle from './components/KanaToggle';
import Popup from './components/Popup';

function App() {
  const [view, setView] = useState('home'); // 'home', 'quiz', 'results'
  const [useHiragana, setUseHiragana] = useState(false);
  const [currentWordList, setCurrentWordList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [cheatUseCount, setCheatUseCount] = useState(0);
  const [numWrong, setNumWrong] = useState(0);
  const [showCheatModal, setShowCheatModal] = useState(false);
  const [popupStatus, setPopupStatus] = useState('hidden'); // 'hidden', 'entering', 'exiting'
  const [animatingNext, setAnimatingNext] = useState(false);

  useEffect(() => {
    const title = useHiragana ? 'Hiragana Trainer' : 'Katakana Trainer';
    document.title = title;
  }, [useHiragana]);

  const handleStartQuiz = () => {
    const words = getWordsFromURL() || getRandomSubset(10, VOCABULARY);
    setCurrentWordList(words);
    setCurrentIndex(0);
    setScore(0);
    setCheatUseCount(0);
    setNumWrong(0);
    setView('quiz');
  };

  const handleSubmitAnswer = (userAnswer) => {
    const clean = s => s.toLowerCase().replace(/ /g, '');
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

  const toggleCheatModal = (show) => {
    if (show) setCheatUseCount(c => c + 1);
    setShowCheatModal(show);
  };

  return (
    <div className="container">
      {view === 'home' && (
        <CheatSheet useHiragana={useHiragana} onStart={handleStartQuiz} />
      )}

      {view === 'quiz' && (
        <Quiz
          currentWord={currentWordList[currentIndex]}
          nextWord={currentWordList[currentIndex + 1]}
          currentIndex={currentIndex}
          total={currentWordList.length}
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
