import React from "react";
import { carouselData } from "../data/Data";

export default function Carousel() {
  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselData.length > 0 && (
              <div className="carousel-item active">
                <img
                  className="w-100 h-auto"
                  src={carouselData[0].img}
                  alt="Ime"
                  style={{ maxHeight: "700px" }}
                />
                <div className="carousel-caption d-flex justify-content-end align-items-center" style={{ right: "0", bottom: "0%" }}>
                  <div
                    className="p-4 bg-white text-dark rounded-3"
                    style={{ opacity: 0.7, width: "500px", height: "150px" }}
                  >
                    <h3 className="">Welcome to</h3>
                    <img src="assets/img/Group.png" alt="Img" style={{ height: "80px", marginBottom: "rem" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
