import React,  { Suspense } from "react";
import Navbar from "./Component/Navbar";
import {Routes,Route } from 'react-router-dom'
import Header from './Component/Header'
import About from "./Component/About";
import Profiles from './Component/Profiles'
import Footer from "./Component/Footer";
import SuccessStories from "./Component/SmallLayout/SuccessStories";
const Home = React.lazy(() => import('./Component/HomePage/Home'))
const About2 = React.lazy(() => import('./Component/AboutUs/AboutUs'))

const Service = () => {
  return (
    <>
      <Header />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Services</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Header />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />    
    <Routes>
      <Route exact path="/" element={<React.Suspense fallback={<>...</>}><Home /> </React.Suspense>}></Route>

      <Route path="/about" element={<React.Suspense fallback={<>...</>}><About2 /></React.Suspense>}></Route>

      <Route path="/service" element={<React.Suspense fallback={<>...</>}><Service /></React.Suspense>}></Route>

      <Route path="/contact" element={ <React.Suspense fallback={<>...</>}><Contact /></React.Suspense>}></Route>
      <Route path="/successStory" element={ <React.Suspense fallback={<>...</>}><SuccessStories /></React.Suspense>}></Route>
    </Routes>
    <Footer/>

        </>
  );
};

export default App;