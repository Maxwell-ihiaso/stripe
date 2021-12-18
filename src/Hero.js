import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main className="hero" onMouseOver={() => closeSubmenu()}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">start now</button>
        </div>
        <div className="hero-images">
          <img className="phone-img" src={phoneImg} alt="stripe" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
