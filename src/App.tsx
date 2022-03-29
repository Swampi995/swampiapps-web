import React from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import moment from 'moment';
import './App.css';

const DATE = moment('2022-04-16T04:25:00.000Z');

function App() {

  const renderer: CountdownRendererFn = (props) => {
    if (props.completed) {
      // Render a completed state
      return <span>DISTRACTIE!</span>;
    }

    return <div className='Cowntdown'>
      <div className='Timer'>
        <span className='Time'>{props.days}</span>
        <span className='Description'>zile</span>
      </div>
      <div className='Timer'>
        <span className='Time'>{props.hours}</span>
        <span className='Description'>ore</span>
      </div>
      <div className='Timer'>
        <span className='Time'>{props.minutes}</span>
        <span className='Description'>minute</span>
      </div>
      <div className='Timer'>
        <span className='Time'>{props.seconds}</span>
        <span className='Description'>secunde</span>
      </div>
    </div>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Countdown date={DATE.valueOf()} renderer={renderer} />
      </header>
    </div>
  );
}

export default App;
