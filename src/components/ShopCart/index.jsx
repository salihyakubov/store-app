import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import backicon from '../../assets/icons/backicon.png'
import Cartitem from '../cartitems';

const ShopCartModal = ({setCart}) => {
    
    
    const {itemInCart} = useSelector(state => state.cart)
    console.log(itemInCart)
    return (
        <>
        <div style={{width:"100%", height:'100%', position:'fixed', backdropFilter:"blur(10px)",top:"0", left:"0"}}></div>
            <div style={{ width: "1100px", margin: "20px auto", border: "solid 1px black", padding: "30px", borderRadius: '10px', background: 'white', position: 'absolute', top: '50px', right: '15%' }}>
            <div class=" bg-gray-100 ">
            <li><button onClick={() => setCart(false)} class="w-15 h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"><img className="w-5" src={backicon}/></button></li>
                <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">

        {
            itemInCart && itemInCart.map(el => <Cartitem key={el.id} item={el}/>)
        }
      </div>
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$129.99</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$134.98 USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div></div>
            </div>
        
        </>
        
    );
};

export default ShopCartModal;