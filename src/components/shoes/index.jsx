import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getShoes} from '../../redux/shoes/shoesSlice'
import Spinner from '../Spinner';
import ShoesItem from '../ShoesItem';

const Shoes = () => {
    const {shoes, isLoading} = useSelector(state => state.shoes)
    const dispatch= useDispatch()
    console.log(shoes)
    useEffect(() => {
        dispatch(getShoes())
    }, [dispatch])

    if(isLoading){
        return <Spinner/>
    }
    return (
        <div className='flex justify-between items-center py-6 px-10 container mx-auto items'>
            {
             shoes &&  shoes.map(el => <ShoesItem key={el.id} title={el.title} price={el.price} img={el.img} id={el.id}/>)
            }
        </div>
    );
};

export default Shoes;