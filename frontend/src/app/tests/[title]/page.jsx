"use client"
import tests from "./tests";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import Questions from '@/components/questions';
import DebutTest from "@/components/debutTest";
import { revalidatePath } from "next/cache";

const titles = [
  { title: "Renforcement de l'estime de soi", key: "estime", desc:"Découvrez comment renforcer votre confiance en vous-même en explorant vos forces et en développant une image positive de vous-même."  },
  { title: "Evaluation de la Paix Intérieure", key: "paix", desc:"Plongez dans votre tranquillité intérieure pour comprendre et maîtriser votre niveau d'anxiété." },
  { title: "Evaluation de l'Humeur et de la Vitalité", key: "humeur", desc:"Explorez votre humeur et découvrez des moyens de retrouver votre vitalité émotionnelle pour une vie plus équilibrée." },
  { title: "Évaluation de la Qualité du Sommeil", key: "sommeil", desc:"Évaluez votre sommeil pour mieux comprendre ses impacts sur votre bien-être quotidien et trouver des solutions pour améliorer votre repos." }
];


export default function TestPage({params}) {
  const router = useRouter();
  const title  = params.title;
  const testTitle = (titles.find(test => test.key === title)).title ;
  const testDesc = (titles.find(test => test.key === title)).desc ;
  const questions = tests[title];
  const [showQuestions, setShowQuestions] = useState(false);

  if (!questions ) {
    return <div>Test not found.</div>;
  }

  const handleStartTest = () => {
    setShowQuestions(true);

  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => router.back() } className="hover:font-bold">
        Back
      </button>
      <h1 className="font-serif text-center text-3xl font-bold mb-4">{testTitle}</h1>
      {!showQuestions && <DebutTest desc={testDesc} onStart={handleStartTest} />}
      {showQuestions && <Questions questions={questions} title={testTitle} />}
    </div>
  );
}
