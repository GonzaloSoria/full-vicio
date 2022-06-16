import React from 'react';
import { Link } from 'react-router-dom';

const GoToCart = () => {
  return (
    <>
        <Link to='/carrito' className='go-to-cart'>IR AL CARRITO</Link>
    </>
  )
}

export default GoToCart;