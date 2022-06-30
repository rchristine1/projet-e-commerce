import React from 'react';


function toDoWhenFormSubmitted(event, setProducts) {
    console.log("toDoWhenFormSubmitted")
    event.preventDefault()
    const URL = 'http://localhost:3004/login';
    let login = {
        email: document.getElementById('InputEmail1').value,
        password: document.getElementById('InputPassword1').value
    }
    console.log("login", login)
    let options = {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(login),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URL, options)
        .then(function (response) {
            //return response.json()
        })
        .then(function (data) {
            alert("Logged")
        }
        );
}


function Login(props) {

    return (
        <div className="App">
            <h2> Se connecter à votre compte </h2>
            <section id="content" className="page-content">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <section className="register-form">
                            <form onSubmit={(event) => toDoWhenFormSubmitted(event)}>
                                <div className="mb-3">
                                    <label htmlFor="InputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="InputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </form>
                            <div className="col-md-3"></div>
                        </section>
                        <hr />
                        <p>
                            Pas encore de compte ?
                            <a href="#" onClick={event => props.setCurrentPage({ "register": "null" })}>
                                <u>Créer un compte ici</u>
                            </a>
                        </p>
                    </div>
                </div>
            </section>


        </div>
    )
}


export default Login;