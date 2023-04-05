import React,{ useState } from 'react';
import { Homes } from '../components/Homes/Homes';
import { Upcomming } from '../components/upcomming/Upcomming';
import { latest, recommended, upcome } from '../API';
import { Trending } from '../components/trending/Trending';
import { Footer } from '../components/footer/Footer';


export const HomePages = () => {
  const[items,setItems]=useState(upcome)
  const[item,setItem]=useState(latest)
  const[rec,setRec]=useState(recommended)
  return (
    <>
    <Homes />
    <Upcomming items={items} title='Upcomming Movies'/>
    <Upcomming items={item} title='Latest Movies'/>
    <Trending/>
    <Upcomming items={rec} title='Recommended Movies'/>
    </>
  )
}
