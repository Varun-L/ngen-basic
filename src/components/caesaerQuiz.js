import React, { useState } from "react";
import firebase from "firebase";

const Quiz = () => {
  const [username, setUsername] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [cipher, setCipher] = useState("");
  const [ciphers] = useState([
    "Caesar",
    "Atbash",
    "Ascii",
    "A1Z26",
    "Rot13",
    "Binary",
    "Octal",
    "Hexadecimal"
  ]);

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleAnswerChange = event => {
    setAnswer(event.target.value);
  };

  const generateQuestion = () => {
    // Code to generate a random question for the selected cipher
  };

  const checkAnswer = () => {
    // Code to check if the answer is correct
    // If the answer is correct, increment the score by 1
  };

  const handleSubmit = event => {
    event.preventDefault();
    checkAnswer();
  };

  const handleSelectCipher = event => {
    setCipher(event.target.value);
    generateQuestion();
  };

  const saveScore = () => {
    firebase
      .database()
      .ref("scores")
      .push({ username, score, cipher });
  };

  return (
    <div>
      <h1>Cryptography Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Select Cipher:
          <select value={cipher} onChange={handleSelectCipher}>
            {ciphers.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <br />
        <p>{question}</p>
        <label>
          Answer:
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Score: {score}</p>
      <button onClick={saveScore}>Save Score</button>
    </div>
  );
};

export default Quiz;
