import React from 'react'

type CanData = {
  name: string
  image: string
  buttonTheme: {
    text: string
  }
}

export const Carousel = ({ cans }: { cans: CanData }) => {
  return (
    <div id='window'>
      <div id='image'>
        <img src={cans.image} alt={cans.name} />
      </div>

      <div id='text'>
        <p id='OlipopName'>{cans.name}</p>
      </div>

      <div id='button'>
        <button id='price'>{cans.buttonTheme.text}</button>
      </div>
    </div>
  )
}
