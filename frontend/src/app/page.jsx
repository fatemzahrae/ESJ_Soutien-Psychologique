"use client";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <main className="font-serif text-center pt-32 px-25 mx-8 " >   
      <h1 className=" font-light  text-3xl font-bold my-8">Soutien Psychologique et Bien être</h1>
      <p className='my-5'>Bienvenue dans votre espace bien-être </p>
      <p className='my-5'>Prenez un moment pour vous, pour votre bien-être. Nos tests interactifs sont conçus pour vous aider à explorer votre état émotionnel de manière douce et positive. En répondant à quelques questions simples, vous obtiendrez des insights précieux sur votre santé mentale et des conseils personnalisés pour vous sentir mieux au quotidien. Ce petit geste peut avoir un grand impact sur votre qualité de vie. Commencez dès maintenant et découvrez des chemins vers une vie plus épanouie et équilibrée. Vous méritez de vous sentir bien. </p>
        <div className="flex flex-col  items-center justify-center ">
         <button className=" shadow-md bg-blue-500 px-5 mx-5 my-2 w-1/3 h-9 rounded-2xl text-white  ">  Fiche Technique </button>
         <button onClick={() => handleButtonClick('/tests')} className=" shadow-md bg-blue-500 px-5 mx-5 my-2 w-1/3 h-9 rounded-2xl text-white ">  Tests Psychologiques </button>
         </div>

    </main>
  );
}
