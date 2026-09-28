import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Programmes from './components/Programmes'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import TrainingVenues from './components/TrainingVenues'
import Ceo from './components/Ceo'

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-700/20 bg-blend-multiply bg-[url('/src/assets/swimming.jpg')] bg-cover object-contain bg-no-repeat">
        <NavBar />
        <section id='home'>
          <HomePage />
        </section>
      </div>
      <Programmes />
      <Services />
      <TrainingVenues />  
      <AboutUs />
      <Ceo />
      <section className='bg-zinc-950/80'>
        <Footer />
      </section>
    </>
  )
}

export default App
