import { useState } from 'react'
import Navbar from './Navbar';
import Main from './Pages/Main';
import Math from './Pages/Math';
import DiscreteMath from './Pages/DiscreteMath';
import Lectures from './Pages/Lectures';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/math" element={<Math />} />
          <Route path="/discretemath" element={<DiscreteMath />} />
          <Route path="/lectures" element={<Lectures />} />
        </Routes>
      </div>
    </>
  )
}

export default App
