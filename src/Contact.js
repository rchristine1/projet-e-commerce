import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Contact(props) {
  return (
    <div className="FicheContact">
      <h3>Contact</h3>
      <p>
        nom : {props.name}
      </p>
      <p>
        telephone : {props.phone}
      </p>
      <p>
        email : {props.email}
      </p>
      {/* <a href="#" onClick={event => props.setCurrentPage({ "welcome": "null" })}>Accueil</a> */}
      <Link to="/" onClick={event => props.setCurrentPage({ "welcome": "null" })}>Accueil</Link>
    </div>
  );
}

export default Contact;