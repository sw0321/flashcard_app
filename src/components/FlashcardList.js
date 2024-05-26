import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((card, index) => (
        <Flashcard key={index} word={card.word} translation={card.translation} />
      ))}
    </div>
  );
}

export default FlashcardList;
