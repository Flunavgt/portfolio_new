import './mainPage.css';

const MainPage = () => {
  return ( 
    <div id='MainPage' className="container">
  <video className="bg-video" autoPlay loop muted>
    <source src="https://imgur.com/2cSaKIt.mp4" type="video/mp4" />
  </video>
  <p className="text"><span></span> Federico <span>Luna</span><span></span></p>
</div>
   );
}
 
export default MainPage;