import React from "react";
import "./PromoBanner.css";

export const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <img
        src="/Ginger_Lemon.png"
        alt="Olipop Ginger Lemon"
        className="promo-image"
      />

      <div className="promo-perks">
        <div className="perk">
          <h4> Save 15%</h4>
          <p>On every subscription order</p>
        </div>
        <div className="perk">
          <h4> Early Access</h4>
          <p>Try new flavors first</p>
        </div>
        <div className="perk">
          <h4> Free Shipping</h4>
          <p>Always, no extra fees</p>
        </div>
        <div className="perk">
          <h4> Flexible Plans</h4>
          <p>Swap, skip, or cancel anytime</p>
        </div>
      </div>

      <div className="promo-banner">
        <h3>Save 15% with Endless Olipop.</h3>
        <p>
          Never run out of your favorite flavors when you join our fam.
          Subscribe and save on every order — your wallet (and digestion) will
          thank you.
        </p>
        <button className="subscribe-btn">Subscribe & Save</button>
      </div>
    </div>
  );
};
