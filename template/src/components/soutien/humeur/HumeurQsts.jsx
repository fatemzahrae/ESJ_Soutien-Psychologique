import React, { useState } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import questions from './DepressionTest';

export default function Humeur_Qsts() {
  const [stage, setStage] = useState('questions');
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  const backFunction = (Index) => {
    setCurrentQuestionIndex(Index-1)
  }

  const handleAnswer = (answerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    const score = currentQuestion.scores[answerIndex];
    setFinalScore(finalScore + score)
    
    const updatedAnswers = [...userAnswers, { question: currentQuestion.question, answer: currentQuestion.answers[answerIndex], score }];
    setUserAnswers(updatedAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
    //  console.log('Test completed!', updatedAnswers);
      handleTestCompletion(updatedAnswers);
    }
  };

  const handleTestCompletion = (answers) => {
    setUserAnswers(answers);
    setStage('completed');
    
  };

  console.log(finalScore)


  return (
    <div className="main-wrapper">
      {/* Header */}
      <Header />
      <Sidebar id='menu-item11' id1='menu-items11' activeClassName='blog-grid' />
      {/* Sidebar */}
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/soutien-psycho">Soutien Psychologique </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Humeur</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="good-morning-blk">
            <div className="row">
              <div className="morning-user">
                <h2 className='ml-3 text-center'>
                  Evaluation de l&apos;Humeur et de la Vitalité
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="blog-view">
                <article className="blog blog-single-post">

    {/**questions */}

                  {stage === 'questions' && (

                   <> {  (currentQuestionIndex !== 0 ) && (
                   <div className="col-sm-12">
                    <ul className="breadcrumb">
            
                        <li className="breadcrumb-item ">
                            <FeatherIcon icon="chevron-left" />
                        </li>
                        <li className="breadcrumb-item ">
                           <Link><p onClick={ () => backFunction(currentQuestionIndex)}> Précédent </p></Link> 
                        </li>
                    </ul>
                    </div>
                    )} 

                

                    <div className="mb-4 d-flex flex-column align-items-center  ">
                    
                      <p className='mb-5'>{questions[currentQuestionIndex].question}</p>

                      {questions[currentQuestionIndex].answers.map((answer, index) => (
                        <div className='my-2' key={index}>
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                           className="btn btn-primary me-1  h-[15px] w-[50px]"
                        >
                          {answer}
                        </button>
                        </div>
                      ))}
                    </div>
               </>   )}

     {/**test completed */}

                  {stage === 'completed' && (
                   
                   <div className="container mx-auto p-4 d-flex flex-column align-items-center">
                    <h3 className="font-light  my-8">Merci d avoir complété le test !</h3>
                    <img
                        src="https://cdn-icons-png.freepik.com/512/6559/6559073.png"
                        alt="Logo"
                        className="w-50 my-3"
                     
                    />
{/**----------------------------------------------------------------------------------------------- 
                        <Link to='/humeur-answers' state={shit}> 
                            <p className="block  shadow-md  text-center p-2 rounded-3xl my-2 w-[350px] h-[50px]">
                            Réponses du test
                            </p>
                
                        </Link>

     {/**                   <Link to='/humeur-answers' state={routeState}>Next page</Link>
-----------------------------------------------------------------------------------------------*/}

                        <Link to='/humeur-result' state={finalScore} >
                
                        <p className="block  shadow-md  text-center p-2 rounded-3xl my-2 w-[350px] h-[50px]">
                        Résultat du test
                        </p>
                
                        </Link>
                        <Link href={"#"} >
                
                        <p className="block  shadow-md  text-center p-2 rounded-3xl my-2 w-[350px] h-[50px]">
                        Revenir aux tests psychologiques
                        </p>
                
                        </Link>
                        
                 </div>
                  )}

                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
