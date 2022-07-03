import React from 'react';


function toDoWhenFormSubmitted(event, setProducts) {
    console.log("toDoWhenFormSubmitted")
    event.preventDefault()
    const URL = 'http://localhost:3004/register';
    let user = {
        firstname: document.getElementById('exampleInputFirstName1').value,
        lastname: document.getElementById('exampleInputLastName1').value,
        email: document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('exampleInputPassword1').value,
        admin: false
    }
    console.log("register", user)
    let options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URL, options)
        .then(function (response) {
        })
        .then(function (data) {
            alert("Registered!")
        }
        );

}


function Register(props) {

    return (
        <div className="App">
            <h2> Créer un compte </h2>
            <section id="content" className="page-content">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <section className="register-form">
                            <p>
                                Vous avez déjà un compte ?
                                <a href="#" onClick={event => props.setCurrentPage({ "login": "null" })}>
                                    <u>Connectez-vous</u>
                                </a>
                            </p>
                            <form onSubmit={(event) => toDoWhenFormSubmitted(event)}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputFirstName1" className="form-label">FirstName</label>
                                    <input type="text" className="form-control" id="exampleInputFirstName1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputLastName1" className="form-label">LastName</label>
                                    <input type="text" className="form-control" id="exampleInputLastName1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-secondary" > Submit </button>
                            </form>
                            <div className="col-md-3"></div>
                        </section>
                    </div>
                </div>
            </section>


        </div>
    )
}


export default Register;