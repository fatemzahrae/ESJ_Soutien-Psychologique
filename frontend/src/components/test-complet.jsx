"use client";
import Image from "next/image";
import Link from "next/link";


export default function TestComplet({ answers }) {

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="font-light text-3xl font-bold my-8">Merci d'avoir complété le test !</h1>
      <Image
        src="https://cdn-icons-png.freepik.com/512/6559/6559073.png"
        alt="Logo"
        className="w-[200px] h-[200px] my-5"
        width="60"
        height="60"
      />
        <Link href={{
          pathname:"/tests/humeur/answers",
          query:{
            answers: JSON.stringify(answers)          },
          }} >

          <p className="block  shadow-md hover:shadow-xl bg-blue-500 hover:bg-sky-600 text-white text-center p-2 rounded-3xl my-2 w-[350px] h-[50px]">
          Réponses du test
          </p>

        </Link>
        <Link href={"/tests/humeur/results"} >

          <p className="block  shadow-md hover:shadow-xl bg-blue-500 hover:bg-sky-600 text-white text-center p-2 rounded-3xl my-2 w-[350px] h-[50px]">
          Résultat du test
          </p>

        </Link>
        <Link href={"/tests"} >

          <p className="block  shadow-md hover:shadow-xl bg-blue-500 hover:bg-sky-600 text-white text-center p-2 rounded-3xl my-2 w-[350px] h-[50px]">
          Revenir aux tests psychologiques
          </p>

        </Link>
             
     

      
    </div>
  );
}
