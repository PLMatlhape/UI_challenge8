import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        <NavBar />
        <ReadMore />

        <Carousel
          cans={{
            name: 'Ginger_Blueberry',
            image: 'Ginger_Blueberry.png',
            buttonTheme: { text: '$35.99' },
          }}
        />
        <Carousel
          cans={{
            name: 'Ginger_Guava',
            image: 'Ginger_Guava.png',
            buttonTheme: { text: '$33.99' },
          }}
        />
        <Carousel
          cans={{
            name: 'Strawberry_Lemon',
            image: 'Strawberry_Lemon.png',
            buttonTheme: { text: '$37.99' },
          }}
        />
        <Carousel
          cans={{
            name: 'Classic Ginger_Lemon',
            image: 'Ginger_Lemon.png',
            buttonTheme: { text: '$36.99' },
          }}
        />
      </main>
          <PromoBanner />
      <Footer />
    </>
  )
}

export default App
