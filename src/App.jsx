import Hero from './components/Hero';
import Navbar from './components/Navbar';

import './index.css'

const App = () => {
  return (
      <div className='container'>
          <Navbar/>
          <Hero/>
      </div>
  );
}

export default App;
