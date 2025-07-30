'use client';
import { useState, useEffect } from 'react';

const Typewriter = ({ texts, period = 2000 }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(400);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting, delta, loopNum, texts, period]);

  return <span className="border-r-4 border-r-cyan-400 pr-1">{text}</span>;
};
export default Typewriter;