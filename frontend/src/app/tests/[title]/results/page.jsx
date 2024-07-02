"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const resultRepliques = [
    {
      etat: "1",
      replique: "Votre évaluation indique que vous avez un bon état émotionnel. Continuez à prendre soin de vous et à pratiquer des activités qui vous apportent joie et satisfaction. Restez attentif à votre bien-être et n'hésitez pas à consulter nos ressources pour maintenir cet équilibre."
    },
    {
      etat: "2",
      replique: "Votre évaluation suggère que vous traversez peut-être une période d'incertitude émotionnelle. Il est important de prêter attention à vos sentiments et de prendre soin de vous. Considérez parler à un professionnel ou à un proche de confiance, et explorez nos conseils pour gérer les moments de stress ou de tristesse."
    },
    {
      etat: "3",
      replique: "Votre évaluation indique un niveau élevé de détresse émotionnelle. Il est essentiel de ne pas ignorer ces sentiments. Nous vous recommandons fortement de consulter un professionnel de la santé pour obtenir un soutien adapté. En attendant, prenez le temps de parcourir nos ressources pour trouver des moyens de vous apaiser et de vous sentir mieux."
    }
  ];
  
export default function Results() {
    const searchParams = useSearchParams();
    const totalScore = searchParams.get('totalScore');
    const [Score, setScore] = useState(0);
    const [currentDate, setCurrentDate] = useState('');
    const [interpretation, setInterpretation] = useState("");

    useEffect(() => {
        if ( Score < 8 ){
            setInterpretation("Votre évaluation indique que vous avez un bon état émotionnel. Continuez à prendre soin de vous et à pratiquer des activités qui vous apportent joie et satisfaction. Restez attentif à votre bien-être et n'hésitez pas à consulter nos ressources pour maintenir cet équilibre.")
        }else if (Score >= 8 & Score <= 10 ){
            setInterpretation("Votre évaluation suggère que vous traversez peut-être une période d'incertitude émotionnelle. Il est important de prêter attention à vos sentiments et de prendre soin de vous. Considérez parler à un professionnel ou à un proche de confiance, et explorez nos conseils pour gérer les moments de stress ou de tristesse.")
        } else setInterpretation("Votre évaluation indique un niveau élevé de détresse émotionnelle. Il est essentiel de ne pas ignorer ces sentiments. Nous vous recommandons fortement de consulter un professionnel de la santé pour obtenir un soutien adapté. En attendant, prenez le temps de parcourir nos ressources pour trouver des moyens de vous apaiser et de vous sentir mieux.")
    })

    useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    setCurrentDate(formattedDate);
    }, []);

    useEffect(() => {
      if (totalScore) {
        setScore(Number(totalScore)); 
      }
    }, [totalScore]);

  return (
    <div className='font-serif  pt-12 px-6'>
    <h1 className="font-serif text-center text-3xl font-bold my-8 ">Vos résultats </h1>
    <div>
        <p><strong>Identifiant:</strong> 01</p>
        <p><strong>Nom et Prénom:</strong> nom prenom</p>
        <p><strong>Date du test:</strong> {currentDate} </p>
        <p><strong>Score:</strong> {Score} </p>
        <p><strong>Interprétation:</strong> {interpretation} </p>

    </div>
    </div>

  )
}
