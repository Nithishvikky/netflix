import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container flex">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              © 2022 Nithish. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, Nithish Inc. Duplication and copy of this is
              strictly prohibited. All rights reserved.
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <ul className="flex">
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.facebook.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.facebook.com/"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="box">
            <h3>Nithish App</h3>
            <div className="img flex">
              <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              <span>App Store</span>
              <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
