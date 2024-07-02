"use client";
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

const tests = [
    { title: "Renforcement de l'estime de soi", key: "estime" },
    { title: "Evaluation de la Paix Intérieure", key: "paix" },
    { title: "Evaluation de l'Humeur et de la Vitalité", key: "humeur" },
    { title: "Évaluation de la Qualité du Sommeil", key: "sommeil" }
  ];
  

export default function Tests() {
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };


  return (
    <main className="font-serif text-center pt-32 px-6">
    <div className="absolute top-[150px] left-[50px]">
      <button onClick={() => router.push('/')} className="hover:font-bold">
        Back
      </button>
    </div>
    <div>
      <h1 className="font-light text-3xl font-bold mb-5">Tests Psychologiques</h1>
      <p>Nous vous proposons une série de tests pour évaluer différents aspects de votre santé mentale.</p>
      <p>Choisissez un test ci-dessous pour commencer votre évaluation.</p>
      <Suspense fallback="Loading...">
        <div className="flex flex-col items-center justify-center mt-5">
          {tests.map((test) => (
            <button
              key={test.key}
              onClick={() => handleButtonClick(`/tests/${test.key}`)}
              className="shadow-md hover:shadow-xl bg-blue-500 hover:bg-sky-600 px-5 mx-5 my-2 h-12 w-80  rounded-3xl text-white"
            >
              {test.title}
            </button>
          ))}
        </div>
      </Suspense>
    </div>
  </main>
  );
}
