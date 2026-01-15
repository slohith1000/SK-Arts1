import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../images/img1home.jpeg";
import img2 from "../images/img2home.jpeg";
import img3 from "../images/img3home.jpeg";
import img4 from "../images/img4home.jpeg";

function Home() {
  return (
    <div className="container mt-4">
      <Carousel>
        <div className="carousel-img-wrapper">
          <img src={img1} />
        </div>
        <div className="carousel-img-wrapper">
          <img src={img2} />
        </div>
        <div className="carousel-img-wrapper">
          <img src={img3} />
        </div>
        <div className="carousel-img-wrapper">
          <img src={img4} />
        </div>
      </Carousel>

      {/* Section 3 */}
      <div className="row mb-4">
        <div className="col-md-7 border p-4">
          <h5>Artist painting and motto</h5>
          <p>
            A brief paragraph of what art explains the theme, emotional
            expression and artist vision.
          </p>
        </div>

        <div className="col-md-5 border p-4 text-center">
          <p>ARTIST PHOTO</p>
        </div>
      </div>

      {/* Section 5 - Top artworks */}
      <div className="border p-4 mb-4">
        <h4 className="text-center">TOP ARTWORKS</h4>

        {[1, 2].map((i) => (
          <div className="row mt-3" key={i}>
            <div className="col-md-4 border p-3 text-center">ARTWORK</div>
            <div className="col-md-8 border p-3">
              <p>
                <b>Artwork Type</b>
              </p>
              <p>Theme of artwork and artist experience</p>
              <p>Sold Details</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
