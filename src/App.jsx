import React from 'react';
import NavBar from './components/NavBar';
// import {  Route, Routes } from 'react-router-dom';
 import Home from './pages/Home';
 import AboutMe from './pages/AboutMe';
 import ContactMe from './pages/ContactMe';
import Project from './pages/Project';
 import Service from './pages/Service';
 import Footer from './pages/Footer'
// import NavBar from './components/NavBar';

function App() {
  return (
        <>
        <NavBar />
        <Home />
        <AboutMe />
        <Service />
        <Project />
        <ContactMe />
        <Footer />
      </>
  );
}

export default App;




// import {Routes,Route } from 'react-router-dom'
// import Home from './pages/Home'
// import AboutMe from './pages/AboutMe'
// import ContactMe from './pages/ContactMe'
// import Project from './pages/Project'
// import Service from './pages/Service'
// import Footer from './pages/Footer'
// import NavBar from './components/NavBar'

// function App() {
  
//  return (
//       <div>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/about-me" element={<AboutMe />}/>
//           <Route path="/services" element={<Service />}/>
//           <Route path="/projects" element={<Project /> }/>
//           <Route path="/contact" element={<ContactMe />}/>
//           <Route path="/Footer" element={<Footer />}/>
//         </Routes>
//         {/* <AboutMe />
//         <Service />
//         <Project />
//         <ContactMe /> */}
//         <Footer />
//       </div>
//   )
// }


// export default App


