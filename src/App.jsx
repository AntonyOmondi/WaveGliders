import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Programmes from './components/Programmes'
import Services from './components/Services'
import TrainingVenues from './components/TrainingVenues'
import AboutUs from './components/AboutUs'
import Ceo from './components/Ceo'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HomePage />
        <Programmes />
        <Services />
        <TrainingVenues />
        <AboutUs />
        <Ceo />
      </main>
      <Footer />
    </>
  )
}

export default App
