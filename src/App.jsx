import Hero from './components/section/hero/Hero';
import Navbar from './components/nav/Navbar';

import './index.css'

import AirplaneGif from "./components/media/airplane/AirplaneGif";
import Education from "./components/section/education/Education";
import Skills from "./components/section/skills/Skills";
import WhatIDo from "./components/section/what-i-do/WhatIDo";
import Profiles from "./components/section/profiles/Profiles";
import Experiences from "./components/section/experiences/Experiences";
import Contact from "./components/section/contact/Contact";

import React from "react";

const App = () => {
  return (
      <div className={'container'}>
          <Navbar/>
          <Hero/>

          <div className={'left-margin'}>
              <AirplaneGif/>
              <Education/>
              <Skills />
              <WhatIDo />
              <Profiles />

              <Experiences/>
              <Contact />
          </div>
      </div>
  );
}

export default App;
