import './App.css';
import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

// si panier non initialisé => gérer la condition avec un ou
// gérer expiration de la session
// faire un test avec expiration de la session


function Cart(props) {
    let [cart, setCart] = useState({})
    console.log("cart", cart)

    useEffect(() => {
        let url = "http://localhost:3004/get-cart"
        fetch(url, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(jsonBackendData => {
                console.log("Cart Item Amount", jsonBackendData)
                setCart(jsonBackendData)
            })
    }, [])

    const cartKeys = Object.keys(cart)
    const cartValues = Object.values(cart)
    console.log("cartKeys", cartKeys.length)
    console.log("cartValues", cartValues)



    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-6">
                <section className="col-md-12 py-5 mvbckclr">
                    <div className="container">
                        <div className="row">
                            {cartKeys.length > 0 &&
                                cartValues[1]['nb'] !== "undefined" &&
                                cartValues[1]['nb'] !== 0 ?
                                (<table className="table table-condensed mb-0">
                                    <thead className="">
                                        <tr>
                                            <th></th>
                                            <th>Nom</th>
                                            <th>Prix</th>
                                            <th>Quantité</th>
                                            <th>Sous-total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.products.map(cartItemFromCart => (
                                            <CartItem {...cartItemFromCart}
                                                cart={cart} setCart={setCart}
                                            />
                                        )
                                        )}
                                    </tbody>
                                </table>
                                ) : (
                                    <div className="col-md-12 ">
                                        <div className="">Aucun article dans votre panier!</div>
                                    </div>
                                )}

                        </div>
                    </div>
                </section>
            </div >
            <div className="col-md-4">
                <section className="col-md-12 py-5 px-2 mvbckclr">
                    <div className="container-fluid">
                        {cartKeys.length > 0 && cartValues[1]['nb'] !== "undefined" && cartValues[1]['nb'] !== 0 ? (
                            <div className="card shadow m-2">
                                <div className="card-body p-1">
                                    <div className="">
                                        <h5 className="px-0 mx-2">Summary
                                            <br />
                                            Items: {cart.total.nb}
                                        </h5>
                                    </div>
                                    <hr className=""></hr>
                                    <div className="row d-flex">
                                        <div className="col-md-4 ps-4 text-start">
                                        </div>
                                        <div className="col-md-8 text-end pe-4">
                                            <h4>Total {cart.total.totalamount}€</h4>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                        ) : (
                            <div className="col-md-12 "></div>
                        )}
                    </div>
                </section>
            </div>
            <div className="col-md-2"></div>
        </div >
    )
}

export default Cart;