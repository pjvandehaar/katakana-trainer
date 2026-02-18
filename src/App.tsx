import { useState, useEffect } from 'react';
import './App.css';
import { VOCABULARY, VocabularyItem, QuizSettings, KANA_GROUPS, ROMAJI_LOOKUP } from './constants';
import { getRandomSubset, getWordsFromURL } from './utils';
import Home from './components/Home';
import CheatSheet from './components/CheatSheet';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Popup from './components/Popup';

type View = 'home' | 'quiz' | 'results';

function App() {
  const [view, setView] = useState<View>('home');
  const [settings, setSettings] = useState<QuizSettings>({
    useHiragana: false,
    selectedGroups: KANA_GROUPS.map(g => g.id),
    testMode: 'both',
  });
  const [currentWordList, setCurrentWordList] = useState<VocabularyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [cheatUseCount, setCheatUseCount] = useState(0);
  const [numWrong, setNumWrong] = useState(0);
  const [showCheatModal, setShowCheatModal] = useState(false);
  const [popupStatus, setPopupStatus] = useState<'hidden' | 'entering' | 'exiting'>('hidden');
  const [animatingNext, setAnimatingNext] = useState(false);

  useEffect(() => {
    const title = settings.useHiragana ? 'Hiragana Trainer' : 'Katakana Trainer';
    document.title = title;
  }, [settings.useHiragana]);

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
    const fromURL = getWordsFromURL();
    if (fromURL) {
      setCurrentWordList(fromURL);
    } else {
      const selectedKana = new Set(
        settings.selectedGroups.flatMap(groupId =>
          KANA_GROUPS.find(g => g.id === groupId)?.kana || []
        )
      );

      let pool: VocabularyItem[] = [];

      if (settings.testMode === 'words' || settings.testMode === 'both') {
        pool = VOCABULARY.filter(item =>
          item.katakana.split('').every(char => selectedKana.has(char))
        );
      }

      if (settings.testMode === 'kana') {
        pool = Array.from(selectedKana).map(k => ({
          katakana: k,
          answer: ROMAJI_LOOKUP[k] || k,
        }));
      } else if (settings.testMode === 'both') {
        const wordsPool = [...pool];
        const kanaInWords = new Set(wordsPool.flatMap(w => w.katakana.split('')));
        const missingKana = Array.from(selectedKana).filter(k => !kanaInWords.has(k));
        const missingPool = missingKana.map(k => ({
          katakana: k,
          answer: ROMAJI_LOOKUP[k] || k,
        }));
        pool = [...wordsPool, ...missingPool];
      }

      const finalWords = settings.testMode === 'kana'
        ? pool
        : getRandomSubset(10, pool);

      setCurrentWordList(finalWords);
    }

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
        <Home
          settings={settings}
          onSettingsChange={setSettings}
          onStart={handleStartQuiz}
        />
      )}

      {view === 'quiz' && currentWordList.length > 0 && (
        <Quiz
          currentWordList={currentWordList}
          currentIndex={currentIndex}
          useHiragana={settings.useHiragana}
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
          onBackToHome={() => setView('home')}
        />
      )}

      {showCheatModal && (
        <>
          <div className="modal-backdrop show" onClick={() => toggleCheatModal(false)}></div>
          <CheatSheet
            useHiragana={settings.useHiragana}
            isModal={true}
            onClose={() => toggleCheatModal(false)}
          />
        </>
      )}

      <Popup status={popupStatus} />
    </div>
  );
}

export default App;
