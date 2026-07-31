import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="min-h-screen bg-[url('/src/assets/wgsc-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <NavBar />
      <HomePage />
    </div>
      <section className='bg-zinc-950/80'>
        <Footer />
      </section>
    </>
  )
}

export default App
