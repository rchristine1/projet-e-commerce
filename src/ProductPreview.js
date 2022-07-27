import './App.css';
import React from 'react';
import {Link} from "react-router-dom";




function ProductPreview(props) {
    console.log(props.id)
    return (
        <div>
            <h3>
                {props.name}
            </h3>
            <p>
                {props.description}
            </p>
            <p>
                {parseFloat(props.price).toFixed(2)} €
            </p>
            <Link to={`/details/${props.id}`} onClick={event => {
                         props.setCurrentPage({ "details": props.id });
                         
                       }}>
            <img
                src={props.picture} width="100" height="100"
            />
            </Link>
        </div>


    );
}

export default ProductPreview;