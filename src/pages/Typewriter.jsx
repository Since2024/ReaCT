import React, { useEffect, useState } from 'react';

const Typewriter = ({ text = "Default text", speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text || typeof text !== 'string') {
      console.error('Invalid text prop:', text);
      return; // If the text is invalid, exit the effect early.
    }

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    // Cleanup the interval when component unmounts or re-renders
    return () => clearInterval(intervalId);
  }, [text, index, speed]); // Re-run when text, index, or speed changes

  return <h1>{displayedText}</h1>;
};

export default Typewriter;
