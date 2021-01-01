import React from 'react'
import './components/App.css'
import Header from './components/Header.js'
import About from './components/About.js'
import Nav from './components/Nav.js'
import Content from './components/Content.js'


function App() {
  return (
    <div className="main">
      <Nav />
      <Header /> 
      <Content />
      <About />
    </div>
  );
}

export default App;
