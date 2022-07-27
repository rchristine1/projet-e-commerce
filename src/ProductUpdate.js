import './App.css';
import React from 'react';



function UpdateProduct(props) {
    console.log("Update product id", props.product.id)
    function toDoWhenInputChanged(event) {
        console.log(event.target.value)
    }
    
    function cancelLogin() 
    {
        return document.getElementById('loginForm').reset();
    }

    function toDoWhenFormSubmitted(event, setProducts) {
        console.log("toDoWhenFormSubmitted")
        event.preventDefault()
        const URL = 'http://localhost:3004/update-product';
        let product = {
            name: document.getElementById('productname').value,
            description: document.getElementById('productdescription').value,
            picture: document.getElementById('productpicture').value,
            price: document.getElementById('productprice').value,
            longdescription: document.getElementById('productlongdescription').value,
            origine: document.getElementById('productorigin').value,
            quantity: document.getElementById('productquantity').value,
            id: document.getElementById('productid').value
        }
        console.log("updateproduct", product)
        let options = {
            method: 'POST',
            //method: 'PUT',
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
                console.log("retour updateProduct json", json)
                props.setProduct(json)
                alert("Product updated")
                cancelLogin()
            }
            );
    
    }
    return (
        <form id="loginForm" onSubmit={(event) => toDoWhenFormSubmitted(event, props.setProducts)}>
            <div class="m-3">
                <label htmlFor="productname" className="form-label">Désignation du produit</label>
                <input id="productname" class="form-control" name="productname" defaultValue={props.product.name} 
                    onChange={toDoWhenInputChanged} />
            </div>
            <div class="m-3">
                <label htmlFor="productdescription" className="form-label">Slogan du produit</label>
                <input id="productdescription" class="form-control" defaultValue={props.product.description} 
                    name="productdescription" 
                />
            </div>
            <div class="m-3">
                <label htmlFor="productpicture" className="form-label">Image du produit</label>
                <input id="productpicture" class="form-control" defaultValue={props.product.picture} 
                    name="productpicture" 
                />
            </div>
            <div class="m-3">
                <label htmlFor="productprice" className="form-label">Prix du produit</label>
                <input id="productprice" class="form-control" defaultValue={props.product.price} 
                    name="productprice" 
                />
            </div>
            <div class="m-3">
                <label htmlFor="productlongdescription" className="form-label">Description du produit</label>
                <input id="productlongdescription" class="form-control" defaultValue={props.product.longdescription} 
                    name="productlongdescription" 
                />
            </div>
            <div class="m-3">
                <label htmlFor="productorigin" className="form-label">Origine du produit</label>
                <input id="productorigin" class="form-control" defaultValue={props.product.origine} 
                    name="productorigin" 
                />
            </div>
            <div class="m-3">
                <label htmlFor="productquantity" className="form-label">Quantité disponible</label>
                <input id="productquantity" class="form-control" defaultValue={props.product.quantity} 
                    name="productquantity" 
                />
            </div>
            <label htmlFor="productid" className="form-label">Update</label>
            <input id="productid" class="form-control" name="productid" type="hidden" value={props.product.id} 
                onChange={toDoWhenInputChanged} 
            />
            <div>
                <input type="submit" class="btn btn-secondary" value="Enregistrer" />
            </div>
        </form>
    );
}

export default UpdateProduct;