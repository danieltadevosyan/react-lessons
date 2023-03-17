import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';



const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className='app-wrapper__content'>
        <Routes>
        <Route exact path='/profile' element = {<Profile/>} />
        <Route exact path='/dialogs/*' element = {<Dialogs/>} />
        <Route path='/news' element = {<News/>} />
        <Route path='/settings' element = {<Settings/>} />
        <Route path='/music' element = {<Music/>} />
        </Routes>    
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
