import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';


export default function Soutien_Psycho() {
  return (
  
    <div className="main-wrapper">
        {/* Header */}
        <Header />
        <Sidebar id='menu-item11' id1='menu-items11' activeClassName='blog-grid'/>
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
                                    <Link to="/blogview">Soutien Psychologique </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <i className="feather-chevron-right">
                                        <FeatherIcon icon="chevron-right"/>
                                        </i>
                                </li>
                                {/*<li className="breadcrumb-item active">Blogs</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="good-morning-blk">
                    <div className="row">
                        <div className="morning-user">
                            <h2 className='ml-3'>
                            Bienvenue dans votre espace <span> Bien être</span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/*container for technical sheet  */}

                <div className="row">
                    <div className="col-md-8">
                        <div className="blog-view">
                        <article className="blog blog-single-post">
                            <h3 className="blog-title text-[#2e37a4] ">
                            Soutien Psychologique et Bien être
                            </h3>
                            <div className="blog-info clearfix">
                            
                            <img
                                alt="#"
                                src='https://itsocial.fr/wp-content/uploads/2021/09/Capture-d%E2%80%99%C3%A9cran-2021-09-14-093859.jpg'
                                className="img-fluid my-5"
                                />
                            <div className="post-right read-blks">
                                <Link to="#.">Lire plus </Link>
                            </div>
                            </div>
                            <div className="blog-content">
                            <p>
                            Prenez un moment pour vous, pour votre bien-être. Nos tests interactifs sont conçus pour vous aider à explorer votre état émotionnel de manière douce et positive.
                             En répondant à quelques questions simples, vous obtiendrez des insights précieux sur votre santé mentale et des conseils personnalisés pour vous sentir mieux au quotidien.
                              Ce petit geste peut avoir un grand impact sur votre qualité de vie.
                              </p>
                              <p>
                               Commencez dès maintenant et découvrez des chemins vers une vie plus épanouie et équilibrée. Vous méritez de vous sentir bien.
                            </p>
                            </div>

                        </article>
                    </div>
                    </div>
                
                
                {/*container for tests */}
            <Link className="col-md-4">
            <div className="widget post-widget">
              <div  className="relat-head">
                <h5 >Tests Psychologiques</h5>
                
              </div>
              <ul className="latest-posts">
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                     <img
                        className="img-fluid"
                        src="https://www.ciao.ch/media/topics/estime-de-soi.png.767x576_q85.png"
                       alt="#"
                      />
                    
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Estime de soi</h5>
                    </div>
                    <h4>
                      <Link to="#">
                      Est-ce que Vous Avez Confiance en Vous-Même ?
                      </Link>
                    </h4>
                  </ div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                     <img
                        className="img-fluid"
                        src="https://resize.elle.fr/article/var/plain_site/storage/images/love-sexe/news/stress-inquietude-ou-anxiete-voici-comment-les-differencier-4043472/97177063-1-fre-FR/Stress-inquietude-ou-anxiete-Voici-comment-les-differencier-!.jpg"
                       alt="#"
                      />
                      
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Paix</h5>
                      
                    </div>
                    <h4>
                      <Link to="#">
                      Êtes-vous en Paix avec Vous-Même ?
                       </Link>
                    </h4>
                   
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src="https://static.vecteezy.com/system/resources/previews/011/411/660/non_2x/man-felling-depression-under-moral-stressful-sad-feel-guilty-need-attention-help-sitting-alone-vector.jpg"
                       alt="#"
                      />
                     
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Humeur</h5>
                      
                    </div>
                    <h4>
                      <Link to="/humeur">
                      Est-ce que Votre Humeur et Vitalité sont Équilibrées ? </Link>
                    </h4>
                   
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                     <img
                        className="img-fluid"
                        src="https://blog.reseau-morphee.fr/wp-content/uploads/sites/2/2021/12/mieux_dormir_pour_mieux_vivre-1130x580.jpg"
                       alt="#"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Sommeil</h5>
                      
                    </div>
                    <h4>
                      <Link to="#">
                      Est-ce que Votre Qualité de Sommeil Est Satisfaisante ?
                      </Link>
                    </h4>
                   
                  </div>
                </li>
              </ul>
            </div>
            </Link>
            </div>
            </div>
        </div>
    </div>
    
  )
}
