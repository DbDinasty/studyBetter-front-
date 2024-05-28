import Navbar from './Navbar'
import Main from './Pages/Main'
import Math from './Pages/Math'
import DiscreteMath from './Pages/DiscreteMath'
import MathLectures from './Pages/MathLectures'
import DiscreteLectures from './Pages/DiscreteLectures'
import { Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/math" element={<Math />} />
          <Route path="/discretemath" element={<DiscreteMath />} />
          <Route path="/mathlectures" element={<MathLectures />} />
          <Route path="/discretelectures" element={<DiscreteLectures />} />
        </Routes>
      </div>
    
    </>
  )
}

export default App
