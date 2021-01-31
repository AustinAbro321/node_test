import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

import Greeting from './components/Greeting'
import RandomGreeting from './components/RandomGreeting'

function App() {
  return (
    <Fragment>
      <div class="container">
        <Greeting />
        <RandomGreeting/>
      </div>
    </Fragment>
  );
}

export default App;
