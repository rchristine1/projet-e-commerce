import './App.css';
import React, { useState, useEffect } from 'react';
import Button from './Button';
import ProductUpdate from './ProductUpdate';
import ProductDel from './ProductDel';
import { Handbag } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

function ProductDetails(props) {
    let [product, setProduct] = useState([])
    console.log("isAdmin", props.isAdmin)

    let [displayFormUpdate, setDisplayFormUpdate] = useState("none")
    function onClickUpdateProduct(action) {
        if (displayFormUpdate !== "none") {
            setDisplayFormUpdate("none");
        } else {
            setDisplayFormUpdate("block");
        }
    }

    let [displayFormDelete, setDisplayFormDelete] = useState("none")
    function onClickDeleteProduct(action) {
        if (displayFormDelete !== "none") {
            setDisplayFormDelete("none");
        } else {
            setDisplayFormDelete("block");
        }
    }

    function onClickUpdateForm(action) {
        if (displayFormDelete !== "none") {
            setDisplayFormDelete("none");
        } else {
            setDisplayFormDelete("block");
        }
    }

    useEffect(() => {
        let url = "http://localhost:3004/get-product/"
        fetch(url + props.productId)
            .then(response => response.json())
            .then(jsonBackendData => {
                setProduct(jsonBackendData);
            }
            )
    }, [])

    let inputIdd = "productCartqty" + String(props.productId)



    function onSubmitAddToCart(event) {
        event.preventDefault()
        let url = "http://localhost:3004/addToCart/"
        let productQty = document.getElementById(inputIdd).value
        console.log(url + props.productId + "/" + productQty)
        fetch(url + props.productId + "/" + productQty, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(jsonBackendData => {
                console.log(jsonBackendData)
                alert(`Article ajouté.`)
            }
            )
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <div className="m-3">
                        {props.isAdmin === true &&
                            <Button onClick={onClickUpdateProduct}
                                label="Mettre à jour le produit"
                            />
                        }
                        {displayFormUpdate !== "none" &&
                            <ProductUpdate
                                setProduct={setProduct}
                                product={product}
                                onClick={onClickUpdateForm}
                            />
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    <section className="py-5 mvbckclr">
                        <div className="container" key={product.id}>
                            <div className="row px-0">
                                <div className="col-md-7">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <h4 className="text-start">Un peu de ...  </h4>
                                            <div className="mb-3 "></div>
                                            <p>
                                                {product.longdescription}
                                            </p>
                                            <p>
                                            </p>
                                            <img
                                                src={product.picture}
                                                className="img-fluid rounded-start image-margin"
                                                alt={product.description}
                                                width="200" height="200"
                                            />
                                            <p>
                                                quantité disponible : {product.quantity}
                                            </p>
                                            <p>
                                                Origine : {product.origine}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <h3 className="text-start">
                                                {product.name}
                                            </h3>
                                            <div className="mb-3 text-start">
                                                <div>
                                                    <label className="label">...</label>
                                                    <span>{product.description}</span>
                                                </div>
                                                <div>
                                                    <div className="text-start">
                                                        <b>
                                                            <span>{parseFloat(product.price).toFixed(2)} €</span>
                                                        </b>
                                                    </div>
                                                </div>
                                                <br />
                                                <hr />
                                                <form className="row flex-row"
                                                    onSubmit={event => onSubmitAddToCart(event)}
                                                >
                                                    <div className="col-xs-4 col-sm-6 col-md-7">
                                                        <div className="d-flex">
                                                            <label className=""
                                                                htmlFor='productCartqty'>
                                                            </label>
                                                            <input id={inputIdd}
                                                                className="form-control form-control-sm"
                                                                type="number" defaultValue={1}
                                                                name="productCartqty" min="1"
                                                                max={product.quantity}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-xs-4 col-sm-6 col-md-5 px-2 text-start align-items-center">
                                                        <button className="btn btn-outline-secondary btn-sm"
                                                            type="submit"
                                                        >
                                                            <span><Handbag className="mb-2" /></span> <span>Ajouter</span>
                                                        </button>
                                                    </div>
                                                </form>
                                                <br />
                                                <div className="col text-end">
                                                    <i className="bi bi-heart m-2"></i>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-2">
                    <div className="m-3">
                        {props.isAdmin === true &&
                            <Button onClick={onClickDeleteProduct} label="Supprimer le produit" />
                        }
                        {displayFormDelete !== "none" &&
                            <ProductDel id={product.id} setCurrentPage={props.setCurrentPage} />
                        }
                    </div>
                </div>
            </div>
            {/* <a href="#" onClick={event => props.setCurrentPage({ "products": "null" })}>Liste des produits</a> */}
            <Link to="/products" onClick={event => props.setCurrentPage({ "products": "null" })}>Liste des produits</Link>
        </div>

    );
}

export default ProductDetails;