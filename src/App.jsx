import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import StudentDetails from './pages/StudentDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/students/:id' element={<StudentDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  )
}

export default App