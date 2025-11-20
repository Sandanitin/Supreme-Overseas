import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import JourneyWizard from './JourneyWizard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<JourneyWizard />} />
      </Routes>
    </div>
  )
}

export default App
