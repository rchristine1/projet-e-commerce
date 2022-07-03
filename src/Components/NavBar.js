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
        alert(`Vous êtes déconnecté`)
        props.setIsLogged(false)
        props.setIsAdmin(false)
        props.setCurrentPage({ "welcome": "null" })
      }
      )
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="nav-link text-decoration-none"
          href="#" onClick={event => toDoOnClick(event)}
        >Logout
        </a>
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
              <a href="#" className="nav-link "
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