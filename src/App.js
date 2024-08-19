import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'
import CardFlip from './components/CardFlip'
import ChatPage from './pages/ChatPage'
import Sidebar from './components/Sidebar'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />

        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />

        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
        <Route path="/chatPage" element={<ChatPage />} />
        <Route path="/cardFlip" element={<CardFlip />} />
      </Routes>
    </div>
  )
}

export default App
