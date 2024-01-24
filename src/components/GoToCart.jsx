import React from 'react';
import { Link } from 'react-router-dom';

const GoToCart = () => {
  return (
    <>
        <Link to='/cart' className='go-to-cart'>IR AL CARRITO</Link>
    </>
  )
}

export default GoToCart;