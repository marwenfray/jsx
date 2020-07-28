import React from 'react';
import './App.css';
import'./style.css';
import barbecue from './barbecue.jpg';

function App() {
  return (
    <>
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
      <h1 className="title red">Marwen fray</h1>
      <br/>
      <img src="/lamb.jpg"/>
      <br/>
      <img src={barbecue}/>
    </div>
    <video width={320} height={240} controls>
      <source src="/lamb video.mp4" type="video/mp4"/>
    </video>
    </>
  );
}

export default App;
