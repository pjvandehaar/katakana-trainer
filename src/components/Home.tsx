import React from 'react';
import { KANA_GROUPS, QuizSettings, TestMode, HIRAGANA_LOOKUP, ROMAJI_LOOKUP } from '../constants';

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
    // Variety: Ga, ji, sha, fo, kya, little tsu
    // Looking up based on Katakana equivalents in our constants
    return ['ガ', 'ジ', 'シャ', 'フォ', 'キャ', 'ッ'];
  };

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
                    // Manual lookup for digraphs if needed, though constants.ts handles single chars
                    // ROMAJI_LOOKUP works for single chars. For digraphs like 'シャ' we might need to handle them.
                    // Actually ROMAJI_LOOKUP is build from CHARACTERS which has some digraphs but not all.
                    // 'シャ' is 'SH' + 'YA' -> 'SHA'.
                    // In constants.ts, digraphs aren't explicitly listed in CHARACTERS as single entries usually.
                    // But let's see what ROMAJI_LOOKUP has.
                    const displayKana = settings.useHiragana ? (HIRAGANA_LOOKUP[k] || k) : k;
                    const romaji = ROMAJI_LOOKUP[k] || (k === 'シャ' ? 'SHA' : k === 'フォ' ? 'FO' : k === 'キャ' ? 'KYA' : '');

                    return (
                      <div key={i} className="group-kana-item">
                        <div className="k">{displayKana}</div>
                        <div className="r">{romaji}</div>
                      </div>
                    );
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
              Kana
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
              Words
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
