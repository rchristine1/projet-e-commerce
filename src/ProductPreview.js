import './App.css';
import React from 'react';




function ProductPreview(props) {
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
            <img
                src={props.picture} width="100" height="100"
            />
        </div>


    );
}

export default ProductPreview;