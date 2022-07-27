import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Logout(props) {

    useEffect(() => {
        let url = "http://localhost:3004/logout"
        fetch(url, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(jsonBackendData => {
                //alert(`Vous êtes déconnecté`)
                props.setIsLogged(jsonBackendData.islogged)
                props.setIsAdmin(jsonBackendData.isadmin)
                console.log(jsonBackendData.islogged)
                console.log(jsonBackendData.isadmin)
                //props.setCurrentPage({ "welcome": "null" })
            }
            )
    }, [])
    return (
        <div className="App">
            <section id="content" className="page-content">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mvbckclr">
                        <section className="">
                            <p>
                                Vous avez été déconnecté.
                                {/* <a href="#" onClick={event => props.setCurrentPage({ "login": "null" })}>
                                    <u>Connectez-vous</u>
                                </a> */}

                            </p>
                            <hr />
                            <p>
                                <Link to="/login" onClick={event => props.setCurrentPage({ "login": "null" })}>
                                    <u>Pour vous reconnecter, cliquer ici</u>
                                </Link>
                                <div className="col-md-3"></div>
                            </p>

                        </section>

                        {/* <p>
                            Pas encore de compte ?
                            <a href="#" onClick={event => props.setCurrentPage({ "register": "null" })}>
                                <u>Créer un compte ici</u>
                            </a> 
                            <Link to="/register" onClick={event => props.setCurrentPage({ "register": "null" })}>
                                <u>Créer un compte ici</u>
                            </Link>
                        </p> */}
                    </div>
                </div>
            </section>


        </div>
    )
}


export default Logout;