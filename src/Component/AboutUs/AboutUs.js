import React, { useState,useEffect } from 'react'
import AboutData from './AboutData';

const AboutUs = () => {

  const [items, setItems] = useState(AboutData);

  useEffect(()=>{
    filterItem("About Us")
  },[])
  
  const filterItem = (categoryItem) => {
    const updatedItems = AboutData.filter((currentElem) => {
      return currentElem.category === categoryItem;
    })
    setItems(updatedItems);
  }
  
  
  return (
    <>
      <div className='flex justify-around flex-wrap p-4'>
        <button className='bg-teal-700 hover:bg-teal-900 m-8 px-8 py-4 rounded-xl text-white text-2xl' onClick={() => filterItem('About Us')}>About Us</button>
        <button className='bg-teal-700 hover:bg-teal-900 m-8 px-8 py-4 rounded-xl text-white text-2xl' onClick={() => filterItem('Search Details')}>Search option</button>
        <button className='bg-teal-700 hover:bg-teal-900 m-8 px-8 py-4 rounded-xl text-white text-2xl' onClick={() => filterItem('Privacy Policy')}>Privacy Policy</button>
        <button className='bg-teal-700 hover:bg-teal-900 m-8 px-8 py-4 rounded-xl text-white text-2xl' onClick={() => filterItem('Online Help 24/7')}>FAQ</button>
      </div>

      {
        items.map((elem) => {
          const { id, category, mainHead1, mainHead2, head1, head1P, head2, head2P, head3, head3P, head4, head4P } = elem;
          
          return (
            <>
              
                <div className='about-us text-2xl font-serif px-20 my-4' key={id}>
                  <h1 className='text-red-600 text-center font-bold text-3xl mb-8'>{category} </h1>
                  <p className='font-serif text-justify px-8'>{mainHead1}</p><br/><br/>
                  <p className='font-serif text-justify px-8'>{mainHead2}</p>
                  <h1 className='text-red-600 font-bold text-3xl my-4'>{head1}</h1>
                  <p className='font-serif text-justify px-8'>{head1P}</p>
                  <h1 className='text-red-600 font-bold text-3xl my-4'>{head2}</h1>
                  <p className='font-serif text-justify px-8'>{head2P}</p>
                  <h1 className='text-red-600 font-bold text-3xl my-4'>{head3}</h1>
                  <p className='font-serif text-justify px-8'>{head3P}</p>
                  <h1 className='text-red-600 font-bold text-3xl my-4'>{head4}</h1>
                  <p className='font-serif text-justify px-8'>{head4P}</p><br/><br/><hr/>
                </div>
            </>
          )
            
        })
      }
    </>
  )
}

export default AboutUs