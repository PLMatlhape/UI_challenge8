import './App.css'
import { NavBar } from './components/NavBar'
import { ReadMore } from './components/ReadMore'
import { Carousel } from './components/Carousel'
import { PromoBanner } from './components/PromoBanner'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <NavBar />

      <main>
        <ReadMore />
        <div className='carousel_container'>
          <Carousel
            cans={{
              name: 'Ginger Lemon',
              image: '/assets/images/Ginger-Lemon.png',
              backgroundColor: "#e6d99c",
              buttonTheme: { text: '$35.99', color: "#f9c74f" },
            }}
          />
          <Carousel
            cans={{
              name: 'Classic Grape',
              image: '/assets/images/Classic-Grape.png',
              backgroundColor: "#c5a5d4",
              buttonTheme: { text: '$33.99', color: "#9d4edd" },
            }}
          />
          <Carousel
            cans={{
              name: 'Orange Squeeze',
              image: '/assets/images/Orange-Squeeze.png',
              backgroundColor: "#f4c2a1",
              buttonTheme: { text: '$37.99', color: "#ff8500" },
            }}
          />
          <Carousel
            cans={{
              name: 'Tropical Punch',
              image: '/assets/images/Tropical-Punch.png',
              backgroundColor: "#a8dadc",
              buttonTheme: { text: '$36.99', color: "#e63946" },
            }}
          />
        </div>

      </main >
      <PromoBanner />
      <Footer />
    </>
  )
}

export default App
