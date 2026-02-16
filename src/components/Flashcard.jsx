import React from 'react';

const Flashcard = ({ word, slideClass, style }) => {
  return (
    <div className={`flashcard ${slideClass}`} style={style}>
      <div className="flashcard-word" dangerouslySetInnerHTML={{ __html: word }}></div>
    </div>
  );
};

export default Flashcard;
