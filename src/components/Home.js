import React, { Component } from 'react';
// import './App1.css';
import App1 from './App1/App1';
import Game1 from './game1'
import Navbar from "./navbar"
import Header from "./header"
import Sidenav from "./sidenav"
import Article from "./article"
import Mainfeature from "./MainFeature"
import Game2 from './game2'
import Fact from './fact'
import About from './about'
import Coming from './coming'
import Contact from './contact'
import Documentary from './documentary'
import Feedback from './feedback'
import Footer from './footer'
import GameSelection from './gameselection'
// import Graph from './graph'
import Howuse from './howuse'
// import Joinus from './joinus'
import Keyboard from './keyboard'
import KeyboardLayout from './key-layout'
import TestSelection from './testselection'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Sidenav />
        <Navbar />
        <Header />
        <Article />
        <Mainfeature />
        <Fact />
        <Keyboard />
        
        <Coming />
         <Feedback />
        
        <Contact />
        <About />
        <Documentary /> 
        
        
        {/* <GameSelection /> */}
        {/* <Graph /> */}
        {/* <Howuse /> */}
        {/* <Joinus /> */}
        
        {/* <TestSelection /> */}
        {/* <App1 /> */}
        {/* <KeyboardLayout /> */}
        {/* <Game2 /> */}
        {/* <Game1 />  */}
        <Footer />
      </div>
    );
  }
}

export default Home;