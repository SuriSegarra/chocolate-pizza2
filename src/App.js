import React, { Component } from 'react';
import Header from './Header.js';
import myLogo from './assets/logo.png';
import myOtherLogo from './assets/delicious-logo.png';
import "./App.css";
import Body from './body.js';
import Background, { Ingredients } from './Ingredients.js';
import Author from './Author.js';
import Footer from './Footer.js';


export default class App extends React.Component {

 render(){
     return (
    
    <div>
          <Header 
           logo= { myLogo }
           otherLogo= { myOtherLogo }/>
           <Body/>
           <Background/>
           <Ingredients/>
           <Author/>
           <Footer/>
    </div>

      
  );
}
}


