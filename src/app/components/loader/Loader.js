import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Learn", "Create", "Repeat"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(120deg, #001f3f, #002855)",
        color: "#fff",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "80px",
          height: "80px",
          marginBottom: "20px",
        }}
      >
        <Spinner
          animation="border"
          role="status"
          style={{
            width: "100%",
            height: "100%",
            borderWidth: "6px",
            color: "#00b3b3",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        {words[currentWord]}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;