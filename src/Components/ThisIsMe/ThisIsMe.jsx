import React, { useState } from 'react';
import './ThisIsMe.css';
import MyprofilePic from './Pictures/Federico_profile.jpeg';
import Button from 'react-bootstrap/Button';
import rflv from './Pictures/rflv.png';
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
        <p>In an ordinary world, You need an extraordinary developer</p>
        <p></p>
        <p>I'm a software engineer capable of building, desing and develop your digital requirements
          from scratch. I'm a self-taught developer with a passion for learning new technologies and
          solving problems. I'm a fast learner and I'm always looking for new challenges.
        </p>
        <h2 className="titleMyStory"> Let's go back in time</h2>
        <button className="btn btn-outline-success"></button>
        </>)}
      </section>
        <div className='masterbtn'>
        <div className='btnToggle'>
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
        </div>
      </div>
      <section className='seccionToggle'>
        {visibleAreas['area2'] && (
          <div className='wrap' style={{ transition: 'right 1s ease-in-out' }}>

        <img src={rflv} style={{height: '20%'}} alt="me" />
    

          <button className="btn btn-outline-success"
              onClick={(e) => {
                hideInfo(e, 'area2');
              }}
            >
              Close it
            </button>
          </div>
        )}
      </section>

      </div>
    </div>
   );
}
 
export default ThisIsMe;