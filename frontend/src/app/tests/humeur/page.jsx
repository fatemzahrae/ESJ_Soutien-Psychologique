"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import tests from "./tests";
import Questions from '@/components/questions';
import DebutTest from "@/components/debutTest";
import TestComplet from "@/components/test-complet";


export default function TestPage() {
  const router = useRouter();
  const title = "humeur";
  const testTitle = "Evaluation de l'Humeur et de la Vitalité";
  const testDesc = "Explorez votre humeur et découvrez des moyens de retrouver votre vitalité émotionnelle pour une vie plus équilibrée.";
  const questions = tests[title];
  const [stage, setStage] = useState('start');
  const [userAnswers, setUserAnswers] = useState([]);

  if (!questions) {
    return <div>Test not found.</div>;
  }

  const handleStartTest = () => {
    setStage('questions');
  };

  const handleTestCompletion = (answers) => {
    setUserAnswers(answers);
    setStage('completed');
  };

  return (
    <div className="container mx-auto p-4">
      {stage === 'start' && (
        <>
          <button onClick={() => router.back()} className="hover:font-bold">
            Back
          </button>
          <h1 className="font-serif text-center text-3xl font-bold mb-4">{testTitle}</h1>
          <DebutTest desc={testDesc} onStart={handleStartTest} />
        </>
      )}
      {stage === 'questions' && <Questions questions={questions} onCompletion={handleTestCompletion} />}
      {stage === 'completed' && <TestComplet answers={userAnswers} title={title} />}
    </div>
  );
}
