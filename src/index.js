import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import "swiper/css/bundle";
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    {/* <Provider store={store}> */}
      <NavBar sticky='top' />
      <App />
    {/* </Provider> */}
  {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
