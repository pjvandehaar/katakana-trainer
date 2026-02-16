import React from 'react';
import { KATAKANA_GRID, HIRAGANA_GRID } from '../constants';

const CheatSheet = ({ useHiragana, onStart, isModal, onClose }) => {
  const kanaData = useHiragana ? HIRAGANA_GRID : KATAKANA_GRID;
  const title = useHiragana ? (isModal ? 'Hiragana Cheat Sheet' : 'Hiragana Trainer!') : (isModal ? 'Katakana Cheat Sheet' : 'Katakana Trainer!');

  return (
    <div className={`cheat-sheet show ${isModal ? 'modal' : ''}`} id="cheat-sheet">
      {isModal && (
        <button className="modal-close" id="close-cheat-sheet-btn" onClick={onClose} aria-label="Close cheat sheet">×</button>
      )}
      <h1>{title}</h1>
      {!isModal && (
        <div style={{ textAlign: 'center', margin: '8px 0 12px 0' }}>
          <button className="start-button" id="start-btn" onClick={onStart}>Start!</button>
        </div>
      )}
      <br />
      <div className="kana-grid" id="kana-grid">
        {kanaData.map((row, idx) => {
          if (idx >= 17) return null;
          if (row.length === 1) {
            return (
              <div key={idx} className="kana-cell full-width" style={{ gridColumn: '1 / -1' }}>
                <div className="kana">{row[0].kana}</div>
                <div className="romaji">{row[0].romaji}</div>
              </div>
            );
          } else {
            return row.map((char, charIdx) => (
              <div
                key={`${idx}-${charIdx}`}
                className="kana-cell"
                style={{ visibility: char === null ? 'hidden' : 'visible' }}
              >
                {char && (
                  <>
                    <div className="kana">{char.kana}</div>
                    <div className="romaji">{char.romaji}</div>
                  </>
                )}
              </div>
            ));
          }
        })}
      </div>
      <br />
      <div className="guide-note">
        <p>More characters:</p>
        <p><b>ー</b>: lengthens the previous vowel. Eg: アー (aaaaa)</p>
        <p><b>miniature ッ</b> (tsu): glottal stop. To write in English, double the next consonant. Eg: アッカ
          (akka)</p>
        <p><b>any other miniature</b>: replaces the previous vowel. Eg: キャ (kya), フォ (fo), トゥ (tu), ウィ (wi).  Exception: drop any y after シ (shi) and チ (chi). Eg: シャ (sha, not shya), チュ (chu, not chyu)</p>
        <hr />
        <p>References: <a href="https://www.tofugu.com/japanese/learn-katakana/">tofugu katakana</a>, <a href="https://www.tofugu.com/japanese/learn-hiragana/">tofugu hiragana</a></p>
      </div>
    </div>
  );
};

export default CheatSheet;
