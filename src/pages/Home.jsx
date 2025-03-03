
import React from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = () => {
  return (
   <div> 
    <Banner></Banner>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Projects></Projects>
   </div>
  );
};

export default Home;