import Hero from './components/section/hero/Hero';
import Navbar from './components/nav/Navbar';

import './index.css'

const App = () => {
  return (
      <div className={'container'}>
          <Navbar/>
          <Hero/>
      </div>
  );
}

export default App;
