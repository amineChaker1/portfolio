import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'
import Portfolio from './component/Portfolio/Portfolio'
import Skills from './component/Skills/Skills'
import toast, { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
