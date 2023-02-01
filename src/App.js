import React from 'react';
import './App.css';
// import NavBar from './Components/NavBar/NavBar';
import MainPage from './Components/MainPage/MainPage';
import ThisIsMe from './Components/ThisIsMe/ThisIsMe';
import "swiper/css/bundle";
import Projects from './Components/Projects/Projects';
import Stack from './Components/Stack/Stack';

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
   
        <MainPage />
        <ThisIsMe />
        <Projects />
        <Stack />
   
    </div>
  );
}

export default App;
