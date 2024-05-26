import React, { useState } from 'react';
import axios from 'axios';
import FlashcardList from './components/FlashcardList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  const translateWords = async () => {
    const words = inputText.split(',');
    const translations = await Promise.all(words.map(async (word) => {
      const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
        params: {
          auth_key: process.env.REACT_APP_DEEPL_API_KEY,
          text: word,
          target_lang: 'JA'
        }
      });
      return { word: word.trim(), translation: response.data.translations[0].text };
    }));
    setFlashcards(translations);
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
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;
