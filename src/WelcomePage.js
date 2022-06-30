import React, { useEffect } from 'react';
import WelcomePageSlider from './WelcomePageSlider'




function WelcomePage(props) {


    useEffect(() => {
        let url = "http://localhost:3004/welcome-page/"
        fetch(url, {
            method: 'GET',
            //credentials:'include'
            credentials: 'include'
        })
            .then(response => response.json())
            .then(jsonBackendData => {
                console.log("PageAccueil UserId", jsonBackendData);
                //setProduct(jsonBackendData);
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
                                <a href="#" className="h4 text-decoration-none"
                                    onClick={event => { props.setCurrentPage({ "products": "null" }) }}>
                                    Découvrez notre sélection de produits
                                </a>
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
                                            src="https://th.bing.com/th/id/R.6ecc191ff2ffb317a84e7c01641eeb51?rik=DGBepIti72WMvA&pid=ImgRaw&r=0" />
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
                                            src="https://th.bing.com/th/id/R.12d5e0372a99bb1d5b038f1689e21228?rik=EXv2RU3ldmn%2b8A&pid=ImgRaw&r=0" />
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
                                            src="https://s1.1zoom.me/b5371/435/Texture_Pink_color_550607_2560x1440.jpg" />
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