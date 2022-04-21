import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Achievements from "./Achievements/Achievements";
import Certificates from "./Certificates/Certificates";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import WorkExperience from "./WorkExperience/WorkExperience";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path = '/' element={<Hero/>}/>
        <Route exact path = '/projects' element={<Projects/>}/>
        <Route exact path = '/skills' element={<Skills/>}/>
        <Route exact path = '/education' element={<Education/>}/>
        <Route exact path = '/achievements' element={<Achievements/>}/>
        <Route exact path = '/workexperience' element={<WorkExperience/>}/>
        <Route exact path = '/certificates' element={<Certificates/>}/>
        <Route exact path = '/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
