import React from 'react'
import Header from "../../Header"
import Sidebar from "../../Sidebar"
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';

export default function Humeur() {
  //  const navigate = useNavigate();

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
                                        <Link to="/soutien-psycho">Soutien Psychologique </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right"/>
                                            </i>
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
                                <h4 className=" text-[#2e37a4] text-center ">
                                Explorez votre humeur et découvrez des moyens de retrouver votre vitalité émotionnelle pour une vie plus équilibrée.
                                </h4>
                                <div className="blog-info clearfix">
                                <div className='d-flex flex-column align-items-center'>
                                    <img
                                        alt="#"
                                        src='https://static.vecteezy.com/system/resources/previews/011/411/660/non_2x/man-felling-depression-under-moral-stressful-sad-feel-guilty-need-attention-help-sitting-alone-vector.jpg'
                                        className=" img-fluid my-5 "
                                        style={{ width: '350px', height: 'auto' }}
                                        />
                                        <Link className='text-[50px]' to={"/humeur-qsts" }>Commencer le test</Link>
                                </div>
                                </div>
                             
    
                            </article>
                        </div>
                        </div>                
                </div>
                </div>
            </div>
        </div>
        
      )
    }
    
