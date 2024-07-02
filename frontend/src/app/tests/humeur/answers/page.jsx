"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Answers() {
    const searchParams = useSearchParams();
    const answers = searchParams.get('answers');
    const answersArray = JSON.parse(answers)
    const [finalScore, setFinalScore] = useState(0);

    useEffect(() => {
        calculateScore(answersArray)
    })

    const calculateScore = (answersArray) => {
        const totalScore = answersArray.reduce((sum, answer) => sum + answer.score, 0);
        setFinalScore(totalScore);
      };
    

  
  return (
    <div className='font-serif  pt-12 px-6'>
        <h1 className="font-serif text-center text-3xl font-bold my-8 ">Vos réponses </h1>
        {answersArray.map((answer, index) => (
        <div key={index} className="my-6 mx-8">
          <p><strong>Question:</strong> {answer.question}</p>
          <p><strong>Your Answer:</strong> {answer.answer}</p>
        </div>
      ))} 
    
      <div className='flex justify-center'>
      <Link href={{
          pathname:"/tests/humeur/results",
          query:{
            totalScore: finalScore.toString()  },
          }} >

          <p className="block  shadow-md hover:shadow-xl bg-blue-500 hover:bg-sky-600 text-white text-center p-2 rounded-3xl my-2 w-[200px] h-[35px]">
           Résultats du test 
          </p>

        </Link>
        </div>
    </div>
  )
}
