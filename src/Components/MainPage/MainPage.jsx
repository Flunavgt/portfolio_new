import './mainPage.css';

const MainPage = () => {
  return (
    <div id='MainPage' className='container'>
      <video className='bg-video' autoPlay loop muted>
        <source src='/files/2cSaKIt.mp4' type='video/mp4' />
      </video>
      <p className='text'>
        {' '}
        <span className='textTop'>Federico</span> <span> Luna</span>
        <span className='textBottom'>Full Stack Dev </span>
      </p>
    </div>
  );
};

export default MainPage;
