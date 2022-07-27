import './App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import WelcomePage from './WelcomePage';
import Contact from './Contact';
import Cart from './Cart';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import React, { useState, } from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import EFooter from './Components/EFooter';
import Header from './Components/Header';


function App() {

  let [currentPage, setCurrentPage] = useState({ "welcome": "null" })
  let [isAdmin, setIsAdmin] = useState(false)
  let [isLogged, setIsLogged] = useState(false)
  console.log(isLogged)


  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} isLogged={isLogged} currentPage={currentPage}/>
      <NavBar setCurrentPage={setCurrentPage} setIsLogged={setIsLogged} setIsAdmin={setIsAdmin} />
      <div>

        <Routes>
          {Object.keys(currentPage)[0] === "register" &&
            <Route path="register"
              element={<Register setCurrentPage={setCurrentPage} />}>
            </Route>
          }
          {Object.keys(currentPage)[0] === "login" &&
            <Route path="login"
              element={<Login
                setCurrentPage={setCurrentPage}
                setIsAdmin={setIsAdmin}
                setIsLogged={setIsLogged}
              />}
            />
          }

          {Object.keys(currentPage)[0] === "logout" &&
            <Route path="logout"
              element={<Logout
                setCurrentPage={setCurrentPage}
                setIsAdmin={setIsAdmin}
                setIsLogged={setIsLogged}
              />}
            />
          }

          {Object.keys(currentPage)[0] === "welcome" &&

            <Route exact path="/"
              element={<WelcomePage setCurrentPage={setCurrentPage} />}>
            </Route>
          }

          {Object.keys(currentPage)[0] === "contact" &&
            <Route path="contact"
              element={<Contact setCurrentPage={setCurrentPage}
                name="RoseBlue Purple"
                phone="01 06 00 00 00"
                email="contact@rosebluepurple.fr"

              />}>
            </Route>

          }
          {Object.keys(currentPage)[0] === "products" &&
            <Route path="products"
              element={
                <ProductList
                  setCurrentPage={setCurrentPage}
                  isAdmin={isAdmin}
                />}>
            </Route>

          }
          {Object.keys(currentPage)[0] === "details" &&
            <Route path="details/:prdId"
              element={
                <ProductDetails
                  setCurrentPage={setCurrentPage}
                  productId={currentPage.details}
                  isAdmin={isAdmin}
                />}>
            </Route>

          }
          {Object.keys(currentPage)[0] === "cart" &&
            <Route path="cart"
              element={
                <Cart setCurrentPage={setCurrentPage} />}>
            </Route>
          }
        </Routes>
      </div>
      <EFooter setCurrentPage={setCurrentPage} />
    </div >
  )
}

export default App;
