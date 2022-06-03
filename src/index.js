import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bureau from './components/bureau';
import reportWebVitals from './reportWebVitals';
import img from '../src/assets/logo3il.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <div className='_container'>
      <div className="_logo">
        <img src={img} alt="logo3il" className='imgLogo'/>
      </div>                
      <div className="_titre">
          <h1>Créateur de calendrier alternance </h1>
      </div>
    </div>
    <div>
      <Bureau/>
    </div>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
