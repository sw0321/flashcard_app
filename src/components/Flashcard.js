import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="flashcard" onClick={() => setShowTranslation(!showTranslation)}>
      <div className="word">{flashcard.word}</div>
      {showTranslation && <div className="translation">{flashcard.translation}</div>}
    </div>
  );
};

export default Flashcard;
