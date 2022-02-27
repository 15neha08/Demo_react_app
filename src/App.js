import { useEffect } from 'react';
import './App.css';
import Routers from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() =>{
    AOS.init();
    AOS.refresh();
},[])
  return (
    <div > 
      <Routers />
    </div>
  );
}

export default App;
