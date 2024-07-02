"use client";
import { useState } from "react";

export default function Questions({ questions, onCompletion }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (answerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    const score = currentQuestion.scores[answerIndex];

    const updatedAnswers = [...userAnswers, { question: currentQuestion.question, answer: currentQuestion.answers[answerIndex], score }];
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Test completed!', updatedAnswers);
      onCompletion(updatedAnswers);
    }
  };

  return (
    <div className="mb-4">
      <p className='my-5'>{questions[currentQuestionIndex].question}</p>
      {questions[currentQuestionIndex].answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(index)}
          className="block bg-blue-500 text-white p-2 rounded mb-2 w-full"
        >
          {answer}
        </button>
      ))}
    </div>
  );
}
