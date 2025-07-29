import React from 'react'
import "./carousel.css";

type CanData = {
  name: string
  image: string
  backgroundColor: string
  buttonTheme: {
    text: string,
    color: string
  }
}

export const Carousel = ({ cans }: { cans: CanData }) => {
  return (
    
      <div
        id='window'
        style={{ backgroundColor: cans.backgroundColor }}
      >
        <div id='image'>
          <img src={cans.image} alt={cans.name} />
        </div>

        <div id='text'>
          <p id='OlipopName'>{cans.name}</p>
        </div>

        <div id='button'>
          <button
            id='price'
            style={{ backgroundColor: cans.buttonTheme.color }}
          >
            {cans.buttonTheme.text}
          </button>
        </div>
      </div>
   
  )
}