import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = () => {
    fetch("https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/646179")
      .then(res => res.text())
      .then(data => {
        setWord(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!loading && currentIndex < word.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [loading, currentIndex, word]);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading. . . </h1>
      ) : (
        <ul>
          {word.slice(0, currentIndex).split('').map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
