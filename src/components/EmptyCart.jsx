import React from 'react'
import ContinueBuying from './ContinueBuying';

const EmptyCart = () => {
  return (
    <>
        <h2 className='empty-cart'>El carrito esta vacio</h2>
        <img src="/assets/download.png" alt="" className='img-empty-cart mb-4'/>
        <p className='empty-cart-text'>No tiene agregado ningún producto a su carro de compras.</p>
        <ContinueBuying />
    </>
  )
}

export default EmptyCart;