import React from 'react';

const ShoesItem = ({title,price,img}) => {
    return (
        <div >
           
   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs shoesItem">
     <img class="mb-3   shadow-lg mx-auto" src={img} alt="product designer"/>
     <h1 class="text-lg text-gray-700"> {title} </h1>
     <h3 class="text-sm text-gray-400 ">{price} сом</h3>
     <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">В корзинку</button>
   </div>
        </div>
    );
};

export default ShoesItem;