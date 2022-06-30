import React from 'react';


export default function NavBar(props) {
  function toDoOnClick(event) {
    event.preventDefault()
    let url = "http://localhost:3004/logout"
    fetch(url, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(jsonBackendData => {
        alert(`Deconnecté`)
        props.setCurrentPage({ "welcome": "null" })
      }
      )
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="accordion-item">
          <h3 className="accordion-header" id="headingOne">
            <button className="accordion-button nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Logout
            </button>
          </h3>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <a className="navbar-brand nav-item"
                href="#" onClick={event => toDoOnClick(event)}
              >Logout
              </a>
            </div>
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active"
                onClick={event => props.setCurrentPage({ "welcome": "null" })}>Accueil
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-decoration-none"
                onClick={event => props.setCurrentPage({ "products": "null" })}>Produits</a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link "
                onClick={event => props.setCurrentPage({ "cart": "null" })}>Panier
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-decoration-none"
                onClick={event => props.setCurrentPage({ "contact": "null" })}> Contact</a>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}