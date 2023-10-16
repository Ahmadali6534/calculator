import { useState } from 'react'
import React from 'react'
import { data } from './Product'
import './Scss.css';
import { AiFillAppstore, AiOutlineSearch } from 'react-icons/ai'
import { GrAdd, GrFormSubtract } from 'react-icons/gr'
import { BsCart4 } from 'react-icons/bs'

const Productsale = () => {
  const [first, setFirst] = useState(0);

  const incrementFirst = () => {
    setFirst(first + 1);
  };

  const decrementFirst = () => {
    if (first > 0) {
      setFirst(first - 1);
    }
  };

  return (
    <div>
      <div className='child'>
        <b><p id='icon'><span><AiFillAppstore /></span><span>X</span>CART</p></b>
      </div>
      <div className='child1'>
        <p>Hello.john@doe.com   <button id='button'>My Account</button><button id='button'>Logout</button>
          <span id='bucket'><BsCart4 /><sup>{first}</sup></span>
        </p>
        <button id='search'><input id='search1' type="search" placeholder='Search...' /> <AiOutlineSearch /></button>
      </div>
      <div className='child12'>
        <button id='bu'>Home</button>
        <button id='bu'>Shopping Bag</button>
        <button id='bu'>My Account</button>
        <button id='bu'> Contact Us</button>
      </div>
      <h1>Your Shopping bag-5 items</h1>
      <div className='main'>
        <div className='parent'>
          <div className='display'>
            <div className='child'>
              <h3>Products in bag</h3>
            </div>
            <div className='child2'>
              <h3>Price</h3>
              <h3>Add/Subtract</h3>
              <h3>Qty</h3>
              <h3>Subtotal</h3>
            </div>
          </div>
          {
            data.map((item) => {
              return (
                <div className='parent2'>
                  <div className='display2'>
                    <div className='child3'>
                      {item.img}
                    </div>
                    <div className='child4'>
                      <h3>{item.h3}</h3>
                      <p>{item.p} <span>{item.span}</span></p>
                    </div>
                  </div>
                  <div className='child5'>
                  <button onClick={incrementFirst} className='add' ><GrAdd /></button>  <button onClick={decrementFirst} className='add' ><GrFormSubtract /></button>
                    <input id='no' type="number" />
                    <span>{item.span2}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='parent3'>
          <div className='display3'>
            <div className='child6'>
              <p>Subtotal</p>
              <p>Shipping cost</p>
              <span>Total</span>
            </div>
            <div className='child7'>
              <p>$14.08</p>
              <p>$15.00</p>
              <p>$29.08</p>
            </div>
          </div>
          <button>Go to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Productsale;
