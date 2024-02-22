import React from "react";
import "./About.css"
export const About = () => {
  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Contact Us</h2>
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Enter Your Name" />
              <input type="email" name="email" placeholder="Enter Your Email" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit" className="btn">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="form-img">
            <img src="bg1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
