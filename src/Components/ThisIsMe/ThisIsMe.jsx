import React, { useState } from 'react';
import './ThisIsMe.css';
import MyprofilePic from './Pictures/Federico_profile.jpeg';
import Button from 'react-bootstrap/Button';
import resume from './Pictures/rflv.png';

const ThisIsMe = () => {

  const initialVisibleAreas = {
    area1: true,
    area2: false
  };

  const [visibleAreas, setVisibleAreas] = useState(initialVisibleAreas);
  // shows the element by given key
  const showInfo = (event, key) => {
    event.preventDefault();
    setVisibleAreas({ ...visibleAreas, ...{ [key]: true } });
  };

  // hides the element by given key
  const hideInfo = (event, key) => {
    event.preventDefault();
    setVisibleAreas({ ...visibleAreas, ...{ [key]: false } });
  };
  return ( 
    
    <div id='ThisIsMe' className="meGeneral">
      
      <div className="myPicture">
        <img src={MyprofilePic} style={{borderRadius: '50%'}} alt="me" />
      </div>
      <div className="myStory">
      <section className='seccionToggle1'>
        {visibleAreas['area1'] && (
        <>
        <p className="titleMystory1">In an ordinary world, </p>
        <h2 className="titleMyStory">You need an extraordinary developer</h2>
        <p>I'm a software engineer capable of building, desing and develop your digital requirements
          from scratch. I'm a self-taught developer with a passion for learning new technologies and
          solving problems. I'm a fast learner and I'm always looking for new challenges.
        </p>
        <p>To understand the future......</p>
        <p > Let's go back in time!</p>
        </>)}
      </section>
        
        
          <Button
            variant='primary'
            size='lg'
            onClick={(e) => {
              showInfo(e, 'area2');
              // hideInfo(e, 'area1');
            }}
          >
            My Story
          </Button>
      
      
      <section className='seccionToggle'>
        {visibleAreas['area2'] && (
          <div className='wrap' style={{ transition: 'right 1s ease-in-out' }}>

          <div className="overlay__container">
          <p style={{color: "black"}}>click on the image to access PDF</p>

          <a href='https://docs.google.com/document/d/1BqW91JFf5PU2M2q2C9yBZyYXI-vtTbKesngZV8YiN3k/edit?usp=sharing'
          target="_blank" rel="noreferrer"> <img src={resume} className='wraps' alt="me" /></a>
          <button className="btn btn-outline-success"
              onClick={(e) => {
                hideInfo(e, 'area2');
              }}
            >
              Close it
            </button>
            </div>
          </div>
        )}
      </section>

      </div>
    </div>
   );
}
 
export default ThisIsMe;