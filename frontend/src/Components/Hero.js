import React, { useState } from "react";
import "../App.css";
import hero from "./image/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="banner_text">
        <h1>Book a City Taxi to your Destination</h1>
        <h3>50% discount on your first ride</h3>
        <a href="/book"><button className="submit , button">Book Now</button></a>
      </div>
      <div className="banner_img">
        <img src={hero} />
      </div>
    </div>
  );
}
