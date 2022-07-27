import React, { useEffect } from 'react';
import WelcomePageSlider from './WelcomePageSlider'
import { Outlet, Link } from "react-router-dom";





function WelcomePage(props) {


    useEffect(() => {
        let url = "http://localhost:3004/welcome-page/"
        fetch(url, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(jsonBackendData => {
                console.log("PageAccueil UserId", jsonBackendData);
          
            }
            )
    }, [])
    return (
        <div className="App">
            <h1>
                Bienvenue !
            </h1>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                {/* <a  href="#" className="h4 text-decoration-none "
                                    onClick={event => { props.setCurrentPage({ "products": "null" })}}>                                   
                                    Découvrez notre sélection de produits
                                </a>                                */}
                                <Link to="/products" className="h4 text-decoration-none " onClick={event => { props.setCurrentPage({ "products": "null" })}}>Découvrez notre sélection de produits</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <WelcomePageSlider />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-start">Bleu, vert, rose</h4>
                            <div className="underline mb-3 "></div>
                            <p className="text-start">
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6 className="text-start">Vert</h6>
                                    <div className="mb-3 "></div>
                                    <p className="text-start">
                                        <img className="img-fluid"                                            
                                            src="/WV.png"/>
                                   </p>    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6 className="text-start">Bleu</h6>
                                    <div className="mb-3 "></div>
                                    <p className="text-start">
                                        <img className="img-fluid"                                           
                                            src="/WB.png"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6 className="text-start">Rose</h6>
                                    <div className="mb-3 "></div>
                                    <p className="text-start">
                                        <img className="img-fluid"                                            
                                            src="/WP.png"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default WelcomePage;