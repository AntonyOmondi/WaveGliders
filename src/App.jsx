import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="flex-col max-h-screen items-center justify-center bg-slate-100">
      <NavBar />
      <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-sm">
        Wave Gliders
      </h1>
    </div>
  )
}

export default App
