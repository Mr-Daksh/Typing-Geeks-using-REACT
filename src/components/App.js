import React, { Component } from 'react';
import Home from './Home';
import { Route, Switch } from "react-router";
import About from './about';
import App1 from './App1/App1';
import App2 from './App1/App2';
import App3 from './App1/App3';
import App4 from './App1/App4';
import App5 from './App1/App5';
import App6 from './App1/App6';
import App7 from './App1/App7';
import App8 from './App1/App8';
import App9 from './App1/App9';
import Article from './article';
import Coming from './coming';
import Contact from './contact';
import Documentary from './documentary';
import Fact from './fact';
import Feedback from './feedback';
import Footer from './footer';
import Game1 from './game1';
import Game2 from './game2';
import GameSelection from './gameselection';
import Header from './header';
import Howuse from './pages/Howuse';
import Keyboard from './keyboard';
import Keyboardlayout from './key-layout';
import MainFeature from './MainFeature';
import Navbar from './pages/Navbar';
import Sidenav from './pages/Sidenav';
import TestSelection from './testselection';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/typingtest" component={App1}></Route>
          <Route path="/typingtest1" component={App2}></Route>
          <Route path="/typingtest2" component={App3}></Route>
          <Route path="/typingtest4" component={App4}></Route>
          <Route path="/typingtest5" component={App5}></Route>
          <Route path="/typingtest6" component={App6}></Route>
          <Route path="/typingtest7" component={App7}></Route>
          <Route path="/typingtest8" component={App8}></Route>
          <Route path="/typingtest9" component={App9}></Route>
          <Route exact path="/article" component={Article}></Route>
          <Route exact path="/coming" component={Coming}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/documentary" component={Documentary}></Route>
          <Route exact path="/fact" component={Fact}></Route>
          <Route exact path="/feedback" component={Feedback}></Route>
          <Route exact path="/footer" component={Footer}></Route>
          <Route exact path="/gameeasy" component={Game1}></Route>
          <Route exact path="/gamemedium" component={Game2}></Route>
          <Route exact path="/gameselection" component={GameSelection}></Route>
          <Route exact path="/header" component={Header}></Route>
          <Route exact path="/howtouse" component={Howuse}></Route>
          <Route exact path="/keyboard" component={Keyboard}></Route>
          <Route exact path="/keyboardlayout" component={Keyboardlayout}></Route>
          <Route exact path="/mainfeature" component={MainFeature}></Route>
          <Route exact path="/navbar" component={Navbar}></Route>
          <Route exact path="/sidenav" component={Sidenav}></Route>
          <Route exact path="/testselection" component={TestSelection}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;