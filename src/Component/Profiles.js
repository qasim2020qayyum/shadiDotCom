import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

const matrimonialProfiles = [
  { 
    heading: "Religion",
    data1: "| Muslim |",
    data2:"| Hindu |",
    data3: "| Christian |",
    data4: "| Sikh |",
    linkMP: "/contact",
  },
  { 
    heading: "Caste",
    data1: "| Malik |",
    data2:"| Chaudhery |",
    data3: "| Mughal |",
    data4: "| Jutt |",
    data5: "| Butt |",
    data6: "| Sheikh |",
    linkMP: "/contact",
  },
  { 
    heading: "States",
    data1: "| Punjab |",
    data2:"| Sindh |",
    data3: "| Blochistan |",
    data4: "| KPK |",
    data5: "| Kashmir |",
    linkMP: "/contact",
  },
  { 
    heading: "International |",
    data1: "| India |",
    data2:"| UK |",
    data3: "| Canada |",
    data4: "| Australia |",
    data5: "| Germany |",
    linkMP: "/contact",
  },
]


const Profiles = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <h1 className='text-red-600 text-center font-bold text-3xl my-12'> BROWSE MATRIMONIAL
PROFILES</h1>
    <div className=' mx-auto w-6/12 '>

    <Carousel  responsive={responsive}>

      {matrimonialProfiles.map((prop)=>{
        return(

  <div className='w-96 shadow-xl rounded-3xl p-12 m-8'>
  <h1 className='text-red-600 text-center font-bold text-3xl my-12'>{prop.heading}</h1> 
  <NavLink className=' text-xl' to={prop.linkMP} > {prop.data1}</NavLink>
  <NavLink className=' text-xl' to={prop.linkMP}> {prop.data2}</NavLink>
  <NavLink className=' text-xl' to={prop.linkMP}> {prop.data3}</NavLink>
  <NavLink className=' text-xl' to={prop.linkMP}> {prop.data4}</NavLink>
  <NavLink className=' text-xl' to={prop.linkMP}> {prop.data5}</NavLink>
  <NavLink className=' text-xl' to={prop.linkMP}> {prop.data6}</NavLink> <br/> <br/>
  <p className='text-center'><NavLink className=' text-3xl text-white bg-teal-700 hover:bg-teal-900 rounded-xl px-8 p-2' to={prop.linkMP}> Read More</NavLink></p>
  </div>
        )
      })
      }



    </Carousel>
    </div>
    
    
    </>
  )
}

export default Profiles