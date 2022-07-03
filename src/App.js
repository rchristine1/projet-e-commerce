import './App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import WelcomePage from './WelcomePage';
import Contact from './Contact';
import Cart from './Cart';
import Register from './Register';
import Login from './Login';
import React, { useState, } from 'react';
import NavBar from './Components/NavBar';
import EFooter from './Components/EFooter';
import Header from './Components/Header';


function App() {

  let [currentPage, setCurrentPage] = useState({ "welcome": "null" })
  let [isAdmin, setIsAdmin] = useState(false)
  let [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} isLogged={isLogged}/>
      <NavBar setCurrentPage={setCurrentPage} setIsLogged={setIsLogged} setIsAdmin={setIsAdmin}/>
      {Object.keys(currentPage)[0] === "register" &&
        <div>
          <Register setCurrentPage={setCurrentPage} />
        </div>
      }
      {Object.keys(currentPage)[0] === "login" &&
        <div>
          <Login
            setCurrentPage={setCurrentPage}
            setIsAdmin={setIsAdmin}
            setIsLogged={setIsLogged}
          />
        </div>
      }
      {Object.keys(currentPage)[0] === "welcome" &&
        <div>
          <WelcomePage setCurrentPage={setCurrentPage} />
        </div>
      }
      {Object.keys(currentPage)[0] === "contact" &&
        <div>
          <Contact setCurrentPage={setCurrentPage}
            name="RoseBlue Purple"
            phone="01 06 00 00 00"
            email="contact@rosebluepurple.fr"
          />
        </div>
      }
      {Object.keys(currentPage)[0] === "products" &&
        <div>
          <ProductList
            setCurrentPage={setCurrentPage}
            isAdmin={isAdmin}
          />
        </div>
      }
      {Object.keys(currentPage)[0] === "details" &&
        <div>
          <ProductDetails
            setCurrentPage={setCurrentPage}
            productId={currentPage.details}
            isAdmin={isAdmin}
          />
        </div>
      }
      {Object.keys(currentPage)[0] === "cart" &&
        <div>
          <Cart setCurrentPage={setCurrentPage} />
        </div>
      }
      <EFooter setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App;
