import React from 'react';
import './App.css';
// import NavBar from './Components/NavBar/NavBar';
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
  // AOS.init({
  //   useClassNames: true,
  // });
  useEffect(() => {
    AOS.init({
      // easing: 'ease',
      duration: 1200,
      delay: 200,
      mirror: true,
    });
  }, [])
  return (
    <div className="app">
      {/* <NavBar /> */}
   
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
