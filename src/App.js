import './App.css';
import {NavBar} from './container/index.js';
import {Landing} from './container/index.js';
import {Partnership} from './container/index.js';
import {Features} from './container/index.js';
import {Presence} from './container/index.js';
import {TopPartner} from './container/index.js';
import {Events} from './container/index.js';
import {Footer} from './container/index.js';
import {Courses} from './container/index.js';
import {Snaplogic} from './container/index.js';
import {UnderConstruction} from './container/index.js';
import {NotFound} from './container/index.js';
import {CourseDetails} from './container/index.js';

import { AllCourseDetails } from './constants';

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Landing />
      <Partnership />
      <Features />
      <Presence />
      <TopPartner />
      <Events /> */}
      <Footer />
      {/* <Snaplogic />
      <Courses />
      <UnderConstruction />
      <Footer />
      <NotFound />
      <Footer /> */}
      {
        AllCourseDetails.map( (course, idx) => {
          return(
            <>
              <NavBar />
              <CourseDetails title={course.title} illustration={course.illustration} description={course.description} about={course.about} curriculum={course.curriculum} key={idx + course.title + " Course"} />
              <Footer />
            </>
          );
        } )
      }
    </div>
  );
}

export default App;