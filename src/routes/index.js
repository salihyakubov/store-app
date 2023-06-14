import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Products from '../pages/Products';

const routes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='about' element={<About/>} />
                <Route path='products' element={<Products/>} />
                <Route path='contacts' element={<Contacts/>} />
            </Routes>
            
        </div>
    );
};

export default routes;