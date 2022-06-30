import './App.css';
import ProductPreview from './ProductPreview';
import React, { useState, useEffect } from 'react';
import ProductAdd from './ProductAdd';
import Button from './Button';


function ProductList(props) {
  let [products, setProducts] = useState([])

  useEffect(() => {
    let url = "http://localhost:3004/get-products"
    fetch(url, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(jsonBackendData => {
        setProducts(jsonBackendData)
      })
  }, [])
  console.log("ProductList products", products)

  let [displayForm, setDisplayForm] = useState("none")
  function onClickAddProduct() {
    if (displayForm !== "none") {
      setDisplayForm("none");
    } else {
      setDisplayForm("block");
    }

  }

  return (
    <div>
      <div className="ProductList">
        <div className="row">
          <div className="col-md-2">
            <Button onClick={onClickAddProduct} label="Ajouter un produit" />
            {displayForm !== "none" &&
              <ProductAdd setProducts={setProducts} />
            }
          </div>
          <div className="col-md-8">
            <section className="py-5 mvbckclr">
              <div className="container">
                <div className="row">
                  {products.map((productFromProducts) =>
                    <div id={productFromProducts.id}
                      className="Product col-md-4"
                      key={productFromProducts.id}
                      onClick={event => { props.setCurrentPage({ "details": productFromProducts.id }); 
                      console.log("productList productID", productFromProducts.id) }}
                    >
                      <div className="card shadow m-2">
                        <div className="card-body">
                          <h6 className="text-start">Nouveauté</h6>
                          <div className="mb-3 "></div>
                          <ProductPreview {...productFromProducts} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-2"></div>
        </div>
        <br />
        <a href="#" onClick={event => props.setCurrentPage({ "welcome": "null" })}>Accueil</a>
      </div>

    </div>
  );
}

export default ProductList;