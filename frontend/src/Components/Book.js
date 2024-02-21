import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import "../cab.css";

import hero from "./image/hero.png";
import auto from "./image/auto.png";
import mini from "./image/mini.png";
import suden from "./image/suden.png";

import axios from "axios";
import exchange from "./image/exchange.png";

export default function Book(prop) {
  const baseurl = "http://localhost:8080/api/book_reqs";
  const [data, SetData] = useState({
    starting_point: "",
    ending_point: "",
  });
  const [cab, setCab] = useState("");
  const changeHandler = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };

  const selectCab = (cabType) => {
    setCab({ ...cab, cabType });
  };

  // console.log(cab.cabType==="Auto");


  function addBooking() {
    axios.post(baseurl, {
      user_id: prop.id,
      starting_point: data.starting_point,
      ending_point: data.ending_point,
      booking_status:"Pending",
      cab_type: cab.cabType,
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    addBooking();
  }

  return (
    <div className="hero">
      <div className="banner_text">
        <h2>Book a City Taxi to your Destination</h2>
        {/* Booking Form */}
        <div className="Book_form">
          <form onSubmit={handelSubmit}>
            <div className="add_form">
              <div className="input">
                <input
                  type="text"
                  placeholder="Form"
                  name="starting_point"
                  value={data.starting_point}
                  onChange={changeHandler}
                />
              </div>

              <div className="input">
                <input
                  type="text"
                  placeholder="To"
                  name="ending_point"
                  value={data.ending_point}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="cab_container">
              <div onClick={() => selectCab("Auto")} className={`cab ${cab.cabType==="Auto" ? "select_cab":""}`}>
                <div className="cab_detail">
                  <div className="cab_image">
                    <img src={auto} alt="Auto" />
                  </div>
                  <div className="cab_info">
                    <h1>Auto</h1>
                    <p>Get a vehicle at your Doorstep</p>
                  </div>
                </div>
                <div className="cab_fare">
                  <h1>₹100.49</h1>
                </div>
              </div>

              <div onClick={() => selectCab("Mini")} className={`cab ${cab.cabType==="Mini" ? "select_cab":""}`}>
                <div className="cab_detail">
                  <div className="cab_image">
                    <img src={mini} alt="Auto" />
                  </div>
                  <div className="cab_info">
                    <h1>Mini</h1>
                    <p>Get a vehicle at your Doorstep</p>
                  </div>
                </div>
                <div className="cab_fare">
                  <h1>₹100.49</h1>
                </div>
              </div>

              <div onClick={() => selectCab("Prime Sedan")} className={`cab ${cab.cabType==="Prime Sedan" ? "select_cab":""}`}>
                <div className="cab_detail">
                  <div className="cab_image">
                    <img src={suden} alt="Auto" />
                  </div>
                  <div className="cab_info">
                    <h1>Prime Sedan</h1>
                    <p>Get a vehicle at your Doorstep</p>
                  </div>
                </div>
                <div className="cab_fare">
                  <h1>₹100.49</h1>
                </div>
              </div>
            </div>

            <div className="book_container">
              <a href="/book">
                <button className="submit , button">Book Now</button>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="banner_img">
        <img src={hero} />
      </div>
    </div>
  );
}
