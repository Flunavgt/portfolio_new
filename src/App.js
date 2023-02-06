import React from 'react';
import './App.css';
import { useEffect } from 'react';
import MainPage from './Components/MainPage/MainPage';
import ThisIsMe from './Components/ThisIsMe/ThisIsMe';
import "swiper/css/bundle";
import Projects from './Components/Projects/Projects';
import Stack from './Components/Stack/Stack';
import Testimonials from './Components/Testimonials/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 200,
      mirror: true,
    });
  }, [])
  return (
    <div className="app">   
        <MainPage />
        <ThisIsMe />
        <Projects />
        <Testimonials />
        <Stack />
        <ContactForm />
    </div>
  );
}

export default App;
