import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Programmes from './components/Programmes'
import Services from './components/Services'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
      <div className="min-h-screen bg-[url('/src/assets/wgsc-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <NavBar />
        <section id='home'>
          <HomePage />
        </section>
      </div>
      <Programmes />
      <section id='service'>
        <Services />
      </section>   
      <section id='about'>
        <AboutUs />
      </section>
      <section className='bg-zinc-950/80'>
        <Footer />
      </section>
    </>
  )
}

export default App
