'use client';

import { useState, useEffect } from 'react';

export default function Loader() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Learn', 'Create', 'Repeat'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((w) => (w + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-background text-foreground">
      {/* Spinner */}
      <div className="w-20 h-20 mb-6">
        <div
          className="w-full h-full border-4 border-t-transparent border-primary rounded-full"
          style={{ animation: 'spin 1s linear infinite' }}
        />
      </div>
      {/* Rotating words */}
      <div className="text-2xl font-bold animate-fadeIn">{words[currentWord]}</div>
    </div>
  );
}