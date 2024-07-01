"use client";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <main className="font-serif text-center pt-32 px-25 " >   
      <h1 className=" font-light  text-3xl font-bold mb-5">Soutien Psychologique et Bien être</h1>
      <p>Bienvenue dans votre espace bien-être </p>
      <p>Nous sommes là pour vous aider à mieux comprendre votre état mental. </p>
        <div className="flex flex-col  items-center justify-center ">
         <button className=" shadow-md bg-blue-500 px-5 mx-5 my-2 w-1/3 h-9 rounded-2xl text-white  ">  Fiche Technique </button>
         <button onClick={() => handleButtonClick('/tests')} className=" shadow-md bg-blue-500 px-5 mx-5 my-2 w-1/3 h-9 rounded-2xl text-white ">  Tests Psychologiques </button>
         </div>

    </main>
  );
}
