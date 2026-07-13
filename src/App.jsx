import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="min-h-screen bg-[url('/src/assets/wgsc-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <NavBar />
      <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-sm">
        Wave Gliders
      </h1>
    </div>
  )
}

export default App
