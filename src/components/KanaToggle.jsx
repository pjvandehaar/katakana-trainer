import React from 'react';

const KanaToggle = ({ useHiragana, onToggle }) => {
  return (
    <div className="kana-toggle">
      <input
        type="checkbox"
        id="kana-toggle-checkbox"
        checked={useHiragana}
        onChange={(e) => onToggle(e.target.checked)}
      />
      <label htmlFor="kana-toggle-checkbox">Hiragana</label>
    </div>
  );
};

export default KanaToggle;
