import React, { useState } from "react";

export default function Rooms() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentItems = [
    {
      title: "Deluxe Room",
      description: "Enjoy our spacious and luxurious deluxe room with stunning views.",
      image: "assets/img/meeting.png"
    },
    {
      title: "Luxury Suite",
      description: "Experience the ultimate in luxury with our spacious and opulent suites.",
      image: "assets/img/carousel-1.jpg"
    },
    {
      title: "Standard Room",
      description: "Enjoy a comfortable and affordable stay in our standard rooms.",
      image: "assets/img/carousel-2.jpg"
    }
  ];

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % contentItems.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + contentItems.length) % contentItems.length);
  };

  return (
    <div className="container-fluid py-5" style={{ marginTop: "60px" }}>
      {/*  content section */}
      <div className="container">
        <div className="row g-5 align-items-center justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="text-column" style={{ boxShadow: "0 0 10px rgba(255, 140, 0, 0.5)", transition: "box-shadow 0.3s ease" }}>
              <h6 className="section-title text-primary text-uppercase text-center ">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Hotelier</span>
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              
              <a className="btn btn-primary py-3 px-5 mt-2" href="https://example.com">
                Explore More
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-end">
              <img
                className="img-fluid rounded wow zoomIn enlarged-image"
                data-wow-delay="0.3s"
                src="assets/img/carousel-2.jpg"
                alt="Meeting Room"
                style={{ width: "100%", position: "relative", left: "-10%", zIndex: "-1" }} // Adjust width and left positioning, and set z-index to make the image appear behind the left column
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second content section */}
      <div className="container mt-5" >
        <div className="row g-12 align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="text-start">
              <img
                className="img-fluid rounded wow zoomIn enlarged-image"
                data-wow-delay="0.3s"
                src="assets/img/carousel-2.jpg"
                alt="Your Alt Text"
                style={{ width: "100%", position: "relative", left: "10%", zIndex: "2" }} // Adjust width and left positioning, and set z-index to make the image appear over the right column
              />
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="text-column" style={{ boxShadow: "0 0 10px rgba(128, 128, 128, 0.5)", transition: "box-shadow 0.3s ease", position: "relative", zIndex: "1" }}>
              <h6 className="section-title text-primary text-uppercase text-center ">
                Second Section
              </h6>
              <h1 className="mb-4">
                Your Title Here
              </h1>
              <p className="mb-4">
                Your description here
              </p>
              
              <a className="btn btn-primary py-3 px-5 mt-2" href="https://example.com">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Second content section */}
      <div className="container mt-5">
        <div className="row g-12 align-items-center justify-content-center" >
          <div className="col-lg-5">
            <div className="text-start">
              <img
                className="img-fluid rounded wow zoomIn enlarged-image"
                data-wow-delay="0.3s"
                src="assets/img/carousel-2.jpg"
                alt="Your Alt Text"
                style={{ width: "100%", position: "relative", left: "10%", zIndex: "2" }} // Adjust width and left positioning, and set z-index to make the image appear over the right column
              />
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="text-column" style={{ boxShadow: "0 0 10px rgba(255, 140, 0, 0.5)", transition: "box-shadow 0.3s ease", position: "relative", zIndex: "1" }}>
              <h6 className="section-title text-primary text-uppercase text-center ">
                Second Section
              </h6>
              <h1 className="mb-4">
                Your Title Here
              </h1>
              <p className="mb-4">
                Your description here
              </p>
              
              <a className="btn btn-primary py-3 px-5 mt-2" href="https://example.com">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Second content section */}
      <div className="container mt-5">
        <div className="row g-12 align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="text-start">
              <img
                className="img-fluid rounded wow zoomIn enlarged-image"
                data-wow-delay="0.3s"
                src="assets/img/carousel-2.jpg"
                alt="Your Alt Text"
                style={{ width: "100%", position: "relative", left: "10%", zIndex: "2" }} // Adjust width and left positioning, and set z-index to make the image appear over the right column
              />
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="text-column" style={{ boxShadow: "0 0 10px rgba(255, 140, 0, 0.5)", transition: "box-shadow 0.3s ease", position: "relative", zIndex: "1" }}>
              <h6 className="section-title text-primary text-uppercase text-center ">
                Second Section
              </h6>
              <h1 className="mb-4">
                Your Title Here
              </h1>
              <p className="mb-4">
                Your description here
              </p>
              
              <a className="btn btn-primary py-3 px-5 mt-2" href="https://example.com">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* last content section */}
      <div className="container-fluid py-5" style={{ marginTop: "70px" }}>
        <div className="row g-1 align-items-center justify-content-center">
          <div className="col-lg-8 text-center">
            <div
              className="text-column position-relative"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h6 className="section-title text-primary text-uppercase text-center" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                {contentItems[currentIndex].title}
              </h6>
              <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                {contentItems[currentIndex].title}
              </h1>
              <p className="mb-4" style={{ fontSize: '1.2rem' }}>
                {contentItems[currentIndex].description}
              </p>

              <a className="btn btn-primary py-3 px-5 mt-2" href="https://example.com" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
                Explore More
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="position-relative">
              <img
                className="img-fluid rounded wow zoomIn enlarged-image"
                data-wow-delay="0.3s"
                src={contentItems[currentIndex].image}
                alt="Your Alt Text"
                style={{
                  width: "100%",
                  height: "400px",
                  position: "relative",
                  left: "-20%",
                  marginTop: "-30%",
                  zIndex: "2"
                }}
              />
              <div className="position-absolute bottom-0 start-0 mb-2 ms-5 d-flex justify-content-between w-150" style={{ zIndex: "3" }}>
                <button className="btn btn-transparent text-white position-relative me-2 glowing" onClick={handlePrevClick} style={{ boxShadow: currentIndex === 0 ? '0 0 20px rgba(255, 255, 255, 0.7)' : 'none', transition: 'box-shadow 0.3s ease' }}>
                  <i className="fa fa-arrow-left text-warning" style={{ marginRight: '5px' }}></i> Prev
                  {currentIndex === 0 && <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">First</div>}
                </button>
                <span className="text-white me-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', fontSize: '1.2rem', animation: 'glow 1.5s infinite alternate' }}>{currentIndex + 1}/{contentItems.length}</span>
                <button className="btn btn-transparent text-white position-relative me-2 glowing" onClick={handleNextClick} style={{ boxShadow: currentIndex === contentItems.length - 1 ? '0 0 20px rgba(255, 255, 255, 0.7)' : 'none', transition: 'box-shadow 0.3s ease' }}>
                  Next <i className="fa fa-arrow-right text-warning" style={{ marginLeft: '5px' }}></i>
                  {currentIndex === contentItems.length - 1 && <div className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-warning">Last</div>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  );
}
