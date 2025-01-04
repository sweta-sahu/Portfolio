import React, { useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";

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
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner animation="border" role="status" style={{ marginBottom: "20px", color: "#333" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <div style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
        {words[currentWord]}
      </div>
    </Container>
  );
};

export default Loader;
