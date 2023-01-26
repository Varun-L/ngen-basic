import React, { useState, useEffect } from 'react';
import { Modal, Button, Progress, Typography } from 'antd';

const { Text } = Typography;

export default function ArithmeticQuiz({ duration }) {
  // Create state variables to store the current question, the user's
  // answer, and the user's score
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  // Create a state variable to store the time remaining in the quiz
  const [timeRemaining, setTimeRemaining] = useState(duration);
  // Create a state variable to store whether the quiz is finished
  const [finished, setFinished] = useState(false);

  // Create a function to generate a random arithmetic question
  function generateQuestion() {
    // Choose a random operator and two random numbers
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    // Construct the question string and store it in state
    const questionString = `${num1} ${operator} ${num2}`;
    setQuestion(questionString);
  }

  // Use an effect to generate the first question when the component
  // mounts and to update the time remaining and check if the quiz
  // is finished every second
  useEffect(() => {
    let intervalId = null;
    let timeoutId = null;
    generateQuestion();

    intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          setFinished(true);
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    timeoutId = setTimeout(() => {
      setAnswer('');
    }, 10000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  // Create an event handler to update the user's answer
  function handleAnswerChange(event) {
    setAnswer(event.target.value);
  }

  // Create an event handler to check the user's answer when they
  // submit it
  function handleSubmit(event) {
    event.preventDefault();

    // Calculate the correct answer using eval() (not recommended for production!)
    const correctAnswer = eval(question);

    // Compare the user's answer to the correct answer and update the score
    if (Number(answer) === correctAnswer) {
      setScore(score + 1);
    }

    // Generate a new question and reset the user's answer
    generateQuestion();
    setAnswer('');
  }

  // Create an event handler to start the quiz again
  function handleStartAgain() {
    setTimeRemaining(duration);
    setFinished(false);
    setScore(0);
    generateQuestion();
  }

  // Calculate the percentage of time remaining
  const timePercent = Math.round((timeRemaining / duration) * 100);

  return (
    <div>
      {!finished && (
        <>
          <Text strong>Time remaining: {timeRemaining / 1000} seconds</Text>
          <Progress percent={timePercent} />
          <form onSubmit={handleSubmit}>
            <div>{question || 'Loading...'}</div>
            <input type="text" value={answer} onChange={handleAnswerChange} />
            <button type="submit">Submit</button>
            <div>Score: {score}</div>
          </form>
        </>
      )}
      {finished && (
        <Modal
          title="Quiz finished"
          visible={finished}
          onCancel={handleStartAgain}
          footer={[
            <Button key="start-again" type="primary" onClick={handleStartAgain}>
              Start again
            </Button>,
          ]}
        >
          <p>Your score: {score}</p>
        </Modal>
      )}
    </div>
  );
}
