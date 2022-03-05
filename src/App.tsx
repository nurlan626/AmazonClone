import React, { useState } from 'react';
import './App.css';
import DisplayContent from './components/displayContent/DisplayContent';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/navbar/sidebar/SideBar';
import MainPage from './components/pages/mainPage/MainPage';
import Slider from './components/pages/mainPage/slider/Slider';

function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <Navbar setSidebar={setSidebar} />
      <SideBar sidebar={sidebar} showSidebar={showSidebar} />
      <Slider />
      <MainPage />


    </div>
  );
}

export default App;
