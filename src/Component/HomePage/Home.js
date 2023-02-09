import React from 'react'
import Navbar from "../Navbar";

import Header from '../Header'
import About from "../About";
import Profiles from '../Profiles'
import MeetOurMembers from '../SmallLayout/MeetOurMembers';
import SuccessStories from '../SmallLayout/SuccessStories';
import SuccessStory from '../SmallLayout/SuccessStory';

const Home = () => {
  return (
    <>
      <Header />
      <About  />
      <Profiles/>
      <MeetOurMembers/>
      <SuccessStory/>
      
      {/* <SuccessStories/> */}
      

      <section className="hero-section">
        <p>Home </p>
        <h1>Section</h1>
      </section>
    
    
    </>
  )
}

export default Home