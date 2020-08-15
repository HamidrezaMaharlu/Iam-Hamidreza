import React, { Component } from 'react';
import TitlePage from "./components/titlePage";
import AboutPage from "./components/aboutPage";
import SkillPage from "./components/skillPage";
import ScrollTop from "./components/scrollToTop";
import ThemeSwitcher from "./components/themeSwitcher/themeSwitcher";
import snowstorm from "./snowstorm";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <snowstorm/>
        <ThemeSwitcher>
          <TitlePage />
          <AboutPage />
          <SkillPage />
          <ScrollTop />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
