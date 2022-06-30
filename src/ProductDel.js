import './App.css';
import React from 'react';
function toDoWhenInputChanged(event) {
    console.log(event.target.value)
}

function toDoWhenFormSubmitted(event, setProducts) {
    console.log("toDoWhenFormSubmitted")
    event.preventDefault()
    const URL = 'http://localhost:3004/del-product';
    let product = {
        id: document.getElementById('productid').value
    }
    console.log("delproduct", product)
    let options = {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URL, options)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            console.log("retour delProduct json", json.length)
            alert("Product Deleted")
        }
        );
}

function DelProduct(props) {
    console.log("Delete product", props.id)
    return (
        <form onSubmit={(event) => toDoWhenFormSubmitted(event, props.setProducts)}>
            <div class="m-3">
                <label htmlFor="productid" className="form-label">Suppression</label>
                <input id="productid" class="form-control" name="productid"
                    type="hidden" value={props.id} onChange={toDoWhenInputChanged} />
            </div>
            <div>
                <input type="submit" class="btn btn-secondary" value="Confirmer" />
            </div>
        </form>
    );
}

export default DelProduct;