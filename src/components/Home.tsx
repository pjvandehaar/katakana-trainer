import React, { useMemo } from 'react';
import { KANA_GROUPS, QuizSettings, TestMode, VOCABULARY } from '../constants';
import { toHiragana, getKanaRomajiPairs } from '../utils';

interface HomeProps {
  settings: QuizSettings;
  onSettingsChange: (settings: QuizSettings) => void;
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ settings, onSettingsChange, onStart }) => {
  const toggleGroup = (groupId: string) => {
    const newSelected = settings.selectedGroups.includes(groupId)
      ? settings.selectedGroups.filter(id => id !== groupId)
      : [...settings.selectedGroups, groupId];
    onSettingsChange({ ...settings, selectedGroups: newSelected });
  };

  const setTestMode = (mode: TestMode) => {
    onSettingsChange({ ...settings, testMode: mode });
  };

  const setUseHiragana = (useHiragana: boolean) => {
    onSettingsChange({ ...settings, useHiragana });
  };

  const getOthersVariety = () => {
    // Variety: Ga, sha, fo, kya, little tsu
    return ['ガ', 'シャ', 'フォ', 'キャ', 'ッ'];
  };

  const wordCount = useMemo(() => {
    const selectedKana = new Set(
      settings.selectedGroups.flatMap(groupId =>
        KANA_GROUPS.find(g => g.id === groupId)?.kana || []
      )
    );
    return VOCABULARY.filter(item =>
      item.katakana.split('').every(char => selectedKana.has(char))
    ).length;
  }, [settings.selectedGroups]);

  return (
    <div className="home-screen show">
      <h1>{settings.useHiragana ? 'Hiragana Trainer' : 'Katakana Trainer'}</h1>

      <div className="home-section toggle-section">
        <div className="kana-toggle-container" onClick={() => setUseHiragana(!settings.useHiragana)}>
          <span className={`toggle-label ${!settings.useHiragana ? 'active' : ''}`}>Katakana</span>
          <div className="custom-toggle">
            <div className={`toggle-handle ${settings.useHiragana ? 'hiragana' : 'katakana'}`}></div>
          </div>
          <span className={`toggle-label ${settings.useHiragana ? 'active' : ''}`}>Hiragana</span>
        </div>
      </div>

      <div className="home-section groups-section">
        <div className="groups-grid">
          {KANA_GROUPS.map(group => {
            const isSelected = settings.selectedGroups.includes(group.id);
            const displayKanaList = group.id === 'others' ? getOthersVariety() : group.kana.slice(0, 5);

            return (
              <button
                key={group.id}
                className={`group-button ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleGroup(group.id)}
              >
                <div className="group-name">{group.name.toUpperCase()}</div>
                <div className="group-kana-row">
                  {displayKanaList.map((k, i) => {
                    const pairs = getKanaRomajiPairs(k);
                    // For variety items like 'シャ', pairs will have one item with kana 'シャ' and romaji 'SHA'
                    return pairs.map((pair, j) => {
                      const displayKana = settings.useHiragana ? toHiragana(pair.kana) : pair.kana;
                      return (
                        <div key={`${i}-${j}`} className="group-kana-item">
                          <div className="k">{displayKana}</div>
                          <div className="r">{pair.romaji.toUpperCase()}</div>
                        </div>
                      );
                    });
                  })}
                  {group.kana.length > displayKanaList.length && <div className="group-kana-item more">...</div>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="home-section mode-section">
        <div className="mode-selector-container">
          <div className="venn-selector">
            <button
              className={`mode-part kana-part ${settings.testMode === 'kana' ? 'selected' : ''}`}
              onClick={() => setTestMode('kana')}
            >
              {settings.useHiragana ? 'Hiragana' : 'Katakana'}
            </button>
            <button
              className={`mode-part both-part ${settings.testMode === 'both' ? 'selected' : ''}`}
              onClick={() => setTestMode('both')}
            >
              BOTH
            </button>
            <button
              className={`mode-part words-part ${settings.testMode === 'words' ? 'selected' : ''}`}
              onClick={() => setTestMode('words')}
            >
              Words ({wordCount})
            </button>
          </div>
        </div>
      </div>

      <div className="home-section start-section">
        <button
          className="start-button"
          onClick={onStart}
          disabled={settings.selectedGroups.length === 0}
        >
          Start!
        </button>
      </div>
    </div>
  );
};

export default Home;
