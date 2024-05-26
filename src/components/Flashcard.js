import React, { useState } from 'react';

const Flashcard = ({ word, translation }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="flashcard" onClick={() => setShowTranslation(!showTranslation)}>
      <div className="word">{word}</div>
      {showTranslation && <div className="translation">{translation}</div>}
    </div>
  );
}

export default Flashcard;
