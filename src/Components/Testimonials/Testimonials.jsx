import React from 'react';
import './Testimonials.css';
import ruby from './logos/ruby.png';
import reactLogo from './logos/react.png';
import rails from './logos/rails-logo.png';
import javaScript from './logos/javascript.png';
import postgresql from './logos/postgresql.png';
import webpack from './logos/webpack.png';
import redux from './logos/redux.png';
import bootstrap from './logos/bootstrap.png';
import htmlLogo from './logos/htmlLogo.png';
import css3 from './logos/css3.png';
import git from './logos/git.png';

const Testimonials = () => {
  return (
    <div id='Testimonials'>
      <div className='js-scroll-counter'>
        <h1>My Stack</h1>
      </div>
      <div className='aos-all'>
        <div data-aos='fade-up'>
          <div className='pepitaPerez'>
            <img src={reactLogo} alt='ruby' />
            <h3>React</h3>
          </div>
        </div>
        <div data-aos='fade-up'>
          <div className='pepitaPerez'>
            <img src={redux} alt='ruby' />
            <h3>Redux</h3>
          </div>
        </div>
        <div data-aos='fade-down'>
          <div className='pepitaPerez'>
            <img src={ruby} alt='ruby' />
            <h3>Ruby.</h3>
          </div>
        </div>
        <div data-aos='zoom-out-down'>
          <div className='pepitaPerez'>
            <img src={rails} alt='ruby' />
            <h3>Ruby on Rails</h3>
          </div>
        </div>
        <div data-aos='flip-down'>
          <div className='pepitaPerez'>
            <img src={javaScript} alt='ruby' />
            <h3>JavaScript</h3>
          </div>
        </div>
        <div data-aos='flip-up'>
          <div className='pepitaPerez'>
            <img src={postgresql} alt='ruby' />
            <h3>PostgreSQL</h3>
          </div>
        </div>
        <div data-aos='fade-in'>
          <div className='pepitaPerez'>
            <img src={webpack} alt='ruby' />
            <h3>Webpack</h3>
          </div>
        </div>
        <div data-aos='fade-down'>
          <div className='pepitaPerez'>
            <img src={bootstrap} alt='ruby' />
            <h3>Bootstrap</h3>
          </div>
        </div>
        <div data-aos='fade-in'>
          <div className='pepitaPerez'>
            <img src={htmlLogo} alt='ruby' />
            <h3>Html</h3>
          </div>
        </div>
        <div data-aos='fade-down' data-aos-id='super-duper'>
          <div className='pepitaPerez'>
            <img src={css3} alt='ruby' />
            <h3>CSS</h3>
          </div>
        </div>
        <div data-aos='fade-up'>
          <div className='pepitaPerez'>
            <img src={git} alt='ruby' />
            <h3>Git</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
