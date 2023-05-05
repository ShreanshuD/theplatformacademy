import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SnaplogicCourses, LaunchEvent, AboutSnapLogic, SystemIntegratorsInfo, EducationalInstitutesInfo, LearnersInfo, Construction, Error } from "./routes";
import { SnapDevelopmentCertification, SnapDevelopmentTraining, SnaplogicIntegratorCertification, SnaplogicIntegratorTraining, SnaplogicIntegratorLibrary, SnaplogicAdministratorCertification, SnaplogicAdministratorTraining, SnaplogicArchitectCertification, SnaplogicArchitectTraining, SnaplogicContinuousIntegrationAndContinuousDelivery, SnaplogicCertifiedEnterpriseAutomationProfessional, SnaplogicAccreditation } from './routes';
import ScrollToTop from './constants/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/courses' element={ <SnaplogicCourses /> } />
          <Route path='/sledu-series' element={ <LaunchEvent /> } />
          <Route path='/snaplogic' element={ <AboutSnapLogic /> } />
          <Route path='/system-integrators' element={ <SystemIntegratorsInfo /> } />
          <Route path='/educational-institutes' element={ <EducationalInstitutesInfo /> } />
          <Route path='/learners' element={ <LearnersInfo /> } />
          <Route path='/courses/snap-development-certification' element={ <SnapDevelopmentCertification /> } />
          <Route path='/courses/snap-development-training' element={ <SnapDevelopmentTraining /> } />
          <Route path='/courses/snaplogic-integrator-certification' element={ <SnaplogicIntegratorCertification /> } />
          <Route path='/courses/snaplogic-integrator-training' element={ <SnaplogicIntegratorTraining /> } />
          <Route path='/courses/snaplogic-integrator-library' element={ <SnaplogicIntegratorLibrary /> } />
          <Route path='/courses/snaplogic-administrator-certification' element={ <SnaplogicAdministratorCertification /> } />
          <Route path='/courses/snaplogic-administrator-training' element={ <SnaplogicAdministratorTraining /> } />
          <Route path='/courses/snaplogic-architect-certification' element={ <SnaplogicArchitectCertification /> } />
          <Route path='/courses/snaplogic-architect-training' element={ <SnaplogicArchitectTraining /> } />
          <Route path='/courses/snaplogic-continuous-integration-and-continuous-delivery' element={ <SnaplogicContinuousIntegrationAndContinuousDelivery /> } />
          <Route path='/courses/snaplogic-certified-enterprise-automation-professional' element={ <SnaplogicCertifiedEnterpriseAutomationProfessional /> } />
          <Route path='/courses/snaplogic-accreditation' element={ <SnaplogicAccreditation /> } />
          <Route path='/under-construction' element={ <Construction /> } />
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;