import c from './App.module.scss';
import Hero from './components/hero/Hero';
import { useRef, useState } from 'react';
import Place from './components/place/Place';
import Loader from './components/loader/Loader';

function App() {
  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 3000)
  return (
    <div className={c.app}>
      {loader ?
      <Loader/>
      :
      <Place/> 
      }
    </div>
  );
}

export default App;
