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

  return (
    <div className="home-screen show">
      <h1>{settings.useHiragana ? 'Hiragana Trainer' : 'Katakana Trainer'}</h1>

      <div className="home-section toggle-section">
        <div className="kana-toggle-container">
          <label className={`toggle-label ${!settings.useHiragana ? 'active' : ''}`}>Katakana</label>
          <div
            className={`custom-toggle ${settings.useHiragana ? 'hiragana' : 'katakana'}`}
            onClick={() => setUseHiragana(!settings.useHiragana)}
          >
            <div className="toggle-handle"></div>
          </div>
          <label className={`toggle-label ${settings.useHiragana ? 'active' : ''}`}>Hiragana</label>
        </div>
      </div>

      <div className="home-section groups-section">
        <div className="groups-grid">
          {KANA_GROUPS.map(group => {
            const isSelected = settings.selectedGroups.includes(group.id);
            return (
              <button
                key={group.id}
                className={`group-button ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleGroup(group.id)}
              >
                <div className="group-name">{group.name.toUpperCase()}</div>
                <div className="group-kana-row">
                  {group.kana.slice(0, 5).map((k, i) => {
                    const displayKana = settings.useHiragana ? HIRAGANA_LOOKUP[k] || k : k;
                    const romaji = ROMAJI_LOOKUP[k] || '';
                    return (
                      <div key={i} className="group-kana-item">
                        <div className="k">{displayKana}</div>
                        <div className="r">{romaji}</div>
                      </div>
                    );
                  })}
                  {group.kana.length > 5 && <div className="group-kana-item more">...</div>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="home-section mode-section">
        <div className="mode-buttons">
          {(['words', 'kana', 'both'] as TestMode[]).map(mode => (
            <button
              key={mode}
              className={`mode-button ${settings.testMode === mode ? 'selected' : ''}`}
              onClick={() => setTestMode(mode)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
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
