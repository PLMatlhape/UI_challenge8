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
              name: 'Ginger-Lemon',
              image: '/assets/images/Ginger-Lemon.png',
              backgroundColor: "tan",
              buttonTheme: { text: '$35.99', color: "gold" },
            }}
          />
          <Carousel
            cans={{
              name: 'Classic-Grape',
              image: '/assets/images/Classic-Grape.png',
              backgroundColor: "lavender",
              buttonTheme: { text: '$33.99', color: "purple" },
            }}
          />
          <Carousel
            cans={{
              name: 'Orange-Squeeze',
              image: '/assets/images/Orange-Squeeze.png',
              backgroundColor: "tan",
              buttonTheme: { text: '$37.99', color: "orange" },
            }}
          />
          <Carousel
            cans={{
              name: 'Tropical-Punch',
              image: '/assets/images/Tropical-Punch.png',
              backgroundColor: "aqua",
              buttonTheme: { text: '$36.99', color: "red" },
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
