import './mainPage.css';

const MainPage = () => {
  return ( 
    <div id='MainPage' className="container">
  <video className="bg-video" autoPlay loop muted>
    <source src="https://imgur.com/2cSaKIt.mp4" type="video/mp4" />
  </video>
  <p className="text"> Federico </p>
</div>
   );
}
 
export default MainPage;