import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, SnaplogicCourses, LaunchEvent, SystemIntegratorsInfo, EducationalInstitutesInfo, LearnersInfo, Construction, Error } from "./routes";
import { Snaplogic } from './container';
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
          <Route path='/systemintegrators' element={ <SystemIntegratorsInfo /> } />
          <Route path='/educationalinstitutes' element={ <EducationalInstitutesInfo /> } />
          <Route path='/learners' element={ <LearnersInfo /> } />
          <Route path='/course' element={ <><Snaplogic type="SnapLogicInfo" /> <Snaplogic type="CoursesOffered" /></> } />
          <Route path='/underconstruction' element={ <Construction /> } />
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;