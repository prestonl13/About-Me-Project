import React from 'react';
import {Header} from './Header.js'
import {Introduction} from './Introduction.js'
import {Projects} from './Projects.js'
import {Resume} from './Resume.js'
import {Footer} from './Footer.js'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <Projects></Projects>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}
export default App;
