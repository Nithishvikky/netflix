import React, { useState } from 'react';
import './trending.css';
import { Home } from '../Homes/Home';
import { trending } from '../../API';

export const Trending = () => {
    const[items,setItems]=useState(trending)
  return (
    <>
     <section className='trending'>
      <Home items={items} />
     </section>
    </>
  )
}
