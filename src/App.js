import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, SnaplogicCourses, LaunchEvent, Construction, Error } from "./routes";
import ScrollToTop from './constants/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/courses' element={ <SnaplogicCourses /> } />
          <Route path='/event' element={ <LaunchEvent /> } />
          <Route path='/underconstruction' element={ <Construction /> } />
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;