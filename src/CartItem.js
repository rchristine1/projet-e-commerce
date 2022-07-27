import React, { useState, useEffect } from "react";
import { Trash } from 'react-bootstrap-icons';


function CartItem(props) {

  let [cartItem, setCartItem] = useState([])

  useEffect(() => {
    let url = "http://localhost:3004/get-cartItem/"
    let options = {
      method: 'GET',
      credentials: 'include',
    }

    fetch(url + props.id, options)
      .then(response => response.json())
      .then(jsonBackendData => {
        console.log("get-cart-Item : Reception des infos de l'article")
        setCartItem(jsonBackendData);
      }
      )
  }, [])

  function removeFromCart(event, id) {
    event.preventDefault()
    const URL = 'http://localhost:3004/del-cartItem';
    let product = {
      'id': id
    }
    console.log("removeFromCart", id)
    let options = {
      method: 'POST',
      //method: 'DELETE',
      credentials: 'include',
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
        console.log("retour delCartItem json", json)
        props.setCart(json)
      })
  }

  let inputQuantityId = "productCartqty" + props.id

  let valueInputQty = props.qty
  try {
    valueInputQty = document.getElementById(inputQuantityId).value
  } catch (error) {
    console.log(error)
  }

  function toDoOnChange(event, id) {
    console.log("ToDoonChange")
    event.preventDefault()
    let product = {
      'id': id,
      'qty': document.getElementById(inputQuantityId).value
    }

    const URL = "http://localhost:3004/get-cartItem-amount"

    let options = {
      method: 'POST',
      //method: 'PUT',
      credentials: 'include',
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
        if (typeof json.cart === "undefined") {
          props.setCart(json)
        } else {
          setCartItem(json.item)
          props.setCart(json.cart)
        }
      })
  }


  return (
    <tr id={cartItem.id}
      className="col-md-12"
    >

      <td>
        <img className="ml-2"
          src={cartItem.picture}
          alt={cartItem.shortDesc}
          width="32" height="32"

        />
      </td>
      <td className="text-muted"
      >
        {cartItem.name}
      </td>
      <td className="text-muted"
      >
        {cartItem.price}€
      </td>
      <td className="">
        <form className="row flex-row"
          onChange={event => toDoOnChange(event, props.id)}
        >
          <label className="" htmlFor='cartitemqty'></label>
          {valueInputQty <= cartItem.quantity || valueInputQty === "null" ? (
            <input id={inputQuantityId} className="form-control form-control-sm "
              type="number" defaultValue={props.qty} name="cartitemqty"
              min="1" max={cartItem.quantity}
            />
          ) : (<input id={inputQuantityId} className="form-control form-control-sm btn-dark"
            type="number" defaultValue={props.qty} name="cartitemqty"
            min="1" max={cartItem.quantity}
          />)}

        </form>
      </td>
      <td className=""  >
        {cartItem.amount} €
      </td>
      <td>
        <Trash className="mb-2"
          onClick={event => removeFromCart(event, props.id)}
        />
      </td>
    </tr>

  );
};


export default CartItem;