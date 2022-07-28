import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Navbar from './components/Navbar';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  
  <Navbar />
  <App /> 
  <Footer />
  
  </>
);


