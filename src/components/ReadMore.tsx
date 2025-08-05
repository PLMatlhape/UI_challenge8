import "./ReadMore.css"

export const ReadMore = () => {
  return (
    <section id="read-more">
      <div className="homepart">
        <div className="highlight">
          <h1>
            A New Kind<br />of Soda
          </h1>
          <button>Shop OLIPOP</button>
        </div>

        <div className="homeImage">
          <img
            src="/assets/images/Strawberry-vanilla.png"
            alt="Strawberry"
          />
        </div>
      </div>

      <div className="more-container">
        <div className="image">
          <img
            src="/assets/ingredients.png"
            alt="Foundational Ingredients"
          />
        </div>
        <div className="text">
          <h2>Our Foundational Ingredients</h2>
          <p>
            OLIPOP blends prebiotics, plant fiber, and botanical extracts to
            support digestive health without compromising flavor. Every sip is a
            carefully crafted balance of function and taste.
          </p>
          <button>Read More</button>
        </div>
      </div>

      <div className="taste-section">
        <h2>Taste Your Favourite</h2>
        <p>Enjoy our take on the classic flavors you know and love</p>
      </div>
    </section>
  )
};