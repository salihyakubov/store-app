import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setItemInCart } from '../../redux/Card/cartSlice';

const ShoesItem = ({shoes}) => {
  const dispatch= useDispatch()

  const addinCart =() => {
    dispatch(setItemInCart(shoes))
  }

    return (
        
      
        <div >
           
   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10  max-w-xs shoesItem">
    <Link to={`productpage/${shoes.id}`}>  <img style={{width:'300px', height:'300px'}} src={shoes.img} alt="product designer"/>  </Link>
     <h1 class="text-lg text-gray-700"> {shoes.title} </h1>
     <h3 class="text-sm text-gray-400 ">{shoes.price} сом</h3>
     <button onClick={() => addinCart() } class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">В корзинку</button>
   </div>
        </div>
       
        
    );
};

export default ShoesItem;