import React from 'react'
import './App.css'
import HomePage from './HomePage'
import About from './AboutPage'
import ContactPage from './ContactPage'
import { Routes , Route} from 'react-router-dom'
import BuildYourselfPage from './BuildYourselfPage'
import OurServices from './OurServices'


function App() {

  return (
    <>
    
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/build-your-team' element={<BuildYourselfPage />} />
        <Route path = '/our-services' element={<OurServices />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
      
    </>
  )
}

export default App
