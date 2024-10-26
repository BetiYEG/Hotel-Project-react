import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageSliderRef = useRef(null);

  const images = [
    "/assets/img/about-1.jpg",
    "/assets/img/about-2.jpg",
    "/assets/img/about-3.jpg",
    "/assets/img/about-4.jpg",
    "/assets/img/about-5.jpg",
    "/assets/img/about-6.jpg",
  ];

  useEffect(() => {
    const slider = imageSliderRef.current;
    slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < Math.floor((images.length - 1) / 3)) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <style>
        {`
        .image-slider-container {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          border: 2px solid #ddd;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .image-slider {
          display: inline-flex;
          transition: transform 0.5s ease;
        }

        .image-slider img {
          width: 30%;
          margin: 0 1.5%;
          transition: filter 0.3s ease, transform 0.3s ease;
          border-radius: 5px;
        }

        .image-slider img.middle {
          width: 38%;
          transform: scale(1.1);
        }

        .image-slider img:hover {
          filter: brightness(70%);
        }

        .bold {
          font-weight: bold;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: orange;
          color: white;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1;
          border-radius: 50%;
          transition: background 0.3s ease;
        }

        .arrow:hover {
          background: #ff8c00;
        }

        .arrow:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .prev {
          left: 10px;
        }

        .next {
          right: 10px;
        }
        `}
      </style>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                Rooms & Suites
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Stay easy</span>
              </h1>
            </div>
            <div className="row g-3 pb-4"> 
              <div className="col text-start"> 
              </div> 
              <div className="col text-end"> 
                <div className="row g-3 pb-4">
                <div className="col text-start"><p>1</p></div>
                  <div className="col text-end"><p>1</p></div>
                  <div className="col text-end"><p>2</p></div>
                </div>
              </div> 
            </div>
            <div className="row g-3 pb-4">
              <div className="col-12 image-slider-container">
                <div className="image-slider" ref={imageSliderRef}>
                
                </div>
                <button
                  className="arrow prev"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  <i className="fa fa-angle-left"></i>
                </button>
                <button
                  className="arrow next"
                  onClick={handleNext}
                  disabled={currentIndex === Math.floor((images.length - 1) / 3)}
                >
                  <i className="fa fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
