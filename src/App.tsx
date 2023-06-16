import c from './App.module.scss';
import Hero from './components/hero/Hero';
import { useRef, useState } from 'react';
import Place from './components/place/Place';

function App() {
  return (
    <div className={c.app}>
      <Place/>
    </div>
  );
}

export default App;
