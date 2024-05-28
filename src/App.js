import React, { useState } from 'react';
import axios from 'axios';
import Flashcard from './components/Flashcard';
import './index.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const translateWords = async () => {
    const words = inputText.split(',').map(word => word.trim());
    const translations = await Promise.all(words.map(async (word) => {
      try {
        const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
          params: {
            auth_key: process.env.REACT_APP_DEEPL_API_KEY,
            text: word,
            target_lang: 'JA'
          }
        });
        return { word: word, translation: response.data.translations[0].text };
      } catch (error) {
        console.error('Error translating word:', word, error);
        return { word: word, translation: 'Error translating' };
      }
    }));
    setFlashcards(translations);
    setCurrentCardIndex(0);
  };

  const nextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <div className="App">
      <h1>フラッシュカード</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="カンマ区切りで入力"
      />
      <button onClick={translateWords}>翻訳</button>
      {flashcards.length > 0 && (
        <div className="card-container">
          <button onClick={prevCard} disabled={currentCardIndex === 0}>←</button>
          <Flashcard flashcard={flashcards[currentCardIndex]} />
          <button onClick={nextCard} disabled={currentCardIndex === flashcards.length - 1}>→</button>
        </div>
      )}
    </div>
  );
}

export default App;
