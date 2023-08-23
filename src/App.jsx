import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Project from './pages/Project'
import Service from './pages/Service'
import Footer from './pages/Footer'
import NavBar from './components/NavBar'

function App() {
  
 return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About me" element={<AboutMe />}/>
          <Route path="/Services" element={<Service />}/>
          <Route path="/Projects" element={<Project /> }/>
          <Route path="/Contact me" element={<ContactMe />}/>
          <Route path="/Footer" element={<Footer />}/>
        </Routes>
        <AboutMe />
        <Service />
        <Project />
        <ContactMe />
        <Footer />
      </div>
  )
}


export default App
