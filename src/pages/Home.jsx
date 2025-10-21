
import React from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
   <div className='w-11/12 md:container mx-auto space-y-14'> 
    <Banner></Banner>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
   </div>
  );
};

export default Home;