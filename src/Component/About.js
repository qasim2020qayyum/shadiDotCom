import React from 'react'
import img1 from '../images/people.png'
import img2 from '../images/cap.png'
import img3 from '../images/system.png'

const aboutsol = [
  {
    img: img1,
    description: ' Millions of people register on shadi.com looking for someone special. This website is for serious singles looking for a long lasting relationship.'
  },
  {
    img: img2,
    description: '80% of our members are highly educated. Most of them are successful professionals on their selected fields.'

  },
  {
    img: img3,
    description: 'Shadi.com uses a smart matchmaking system. We present you matches based on current location, education level & lifestyle choices.'
  },
]


const About = () => {
  return (
    <>
    <h1 className=' text-red-600 text-center font-bold text-3xl my-12'>
    Best Matrimony Site. Used By Millions Of Member Worldwide
    </h1>
    <div className="flex justify-around flex-wrap m-20">
      {aboutsol.map((prop)=>{
        return(
        <div className="w-96 shadow-xl rounded-3xl p-8">
        <img className='color-indigo-700 m-auto' src={prop.img} />
        <p className='text-center text-2xl'>
         {prop.description}
         </p>
        </div>  
        ) 
      })}
      



</div>

    </>
  )
}

export default About