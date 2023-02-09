import React from 'react'
import img1 from '../../images/people.png'
import img2 from '../../images/platform.png'

const aboutsol = [
    {
      img: img1,
      description: 'We have members from all religions and ages. Our most popular age group is from 27 - 60. Almost all our singles are successful professionals and businessmen. Creating a great profile is essential in online matchmaking and adding your best photo to your profile. We offer abundant tips and relationship advice through our blogs. It is our passion to help you in the best possible way.'
    },
    {
      img: img2,
      description: 'Shadi.com is an international matchmaking platform. Through which people can find love and long lasting relationships. Our profiles are verified with cell phone and email verification. We make use of the latest technology for fraud detention and SSL encryption. Non-active users are removed from our network. We are committed to providing a safe web service for like-minded singles in your region.'
    },
  ]

const MeetOurMembers = () => {
  return (
    <>
    <h1 className='text-red-600 text-center font-bold text-3xl my-12'>
    MEET OUR MEMBERS - SUCCESSFUL <br/> PROFESSIONAL SINGLES
    </h1>
    <div className="meet-our-member flex justify-around flex-wrap m-20">
      {aboutsol.map((prop)=>{
          return(
        <div className="meet-our-members w-2/5 p-8">
        <img className='color-indigo-700 m-auto' src={prop.img} />
        <p className='text-justify text-2xl'>
         {prop.description}
         </p>
        </div>  
        ) 
    })}
    </div>
      





    
    
    </>
  )
}

export default MeetOurMembers