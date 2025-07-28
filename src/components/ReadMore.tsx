import React from "react"
import "./ReadMore.css"

export const ReadMore = () => {
  return (
    <section id="read-more">
      <div className="homepart">
        <div className="highlight">
          <div>
            <p>
              A New Kind<br />of Soda
            </p>
          </div>
          <div>
            <button>Shop OLIPOP</button>
          </div>
        </div>

        <div className="homeImage">
          <img
            src="/assets/StrawberryVanilla.png"
            alt="StrawberryVanilla"
          />
        </div>
      </div>

      <div className="image">
        <img
          src="/assets/ingredients.png"
          alt="Foundational Ingredients"
        />
      </div>

      <div className="text">
        <h1>Our Foundational Ingredients</h1>
        <p>
          OLIPOP blends prebiotics, plant fiber, and botanical extracts to
          support digestive health without compromising flavor. Every sip is a
          carefully crafted balance of function and taste.
        </p>
      </div>

      <div className="button">
        <button>Read More</button>
      </div>

      <div className="highlight">
        <p>Taste Your Favourite</p>
        <p></p>
      </div>
    </section>
  )
}