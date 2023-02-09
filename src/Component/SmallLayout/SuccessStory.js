import React from 'react'
import { NavLink } from 'react-router-dom'

const SuccessStory = () => {
    return (
        <>
            <h1 className=' text-red-600 text-center font-bold text-3xl my-12'>
                SUCCESS STORIES
            </h1>

            <div className='my-8'>


                <div className='w-3/5 h-96 bg-slate-200 hover:bg-slate-300 hover:shadow-lg m-auto rounded-2xl '>
                    <div className='text-justify text-2xl py-8 px-20'>
                        <p>After joining Shadi.com for almost a year, I found a nice girl in Los Angeles who seemed to have the qualities that I wanted in a partner. She was everything that I could ask for in a match. We first met outside Costa, because of Covid. Conversations continued for almost 6 months, now we are engaged! Thinking of getting married in 2021.</p><br />
                        <p>Thank you Shadi.com for your help.</p><br />
                        <p className='font-bold'>Gaurav S</p>
                        
                        <p>Los Angeles</p>

                        <p className='text-red-500'> <br />
                        <NavLink to="/successStory" >readmore..</NavLink>

                        </p>
                    </div>


                </div>

            </div>



        </>
    )
}

export default SuccessStory