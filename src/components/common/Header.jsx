import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Data";

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="container-fluid bg-white px-0 position-relative">
        <div className="orange-box-container d-none d-lg-flex justify-content-center">
          <div className="orange-box"></div>
        </div>
        <div className="row gx-0 position-relative">
          <div className="col-lg-3 bg-light d-none d-lg-flex align-items-center justify-content-center">
            <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
              <img src="images/logo-light.png" alt="Stay Easy" className="img-fluid" style={{ maxHeight: '80px', padding: '10px' }} />
            </Link>
          </div>
          <div className="col-lg-9 d-flex align-items-center">
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-3 p-lg-0 w-100">
              <div className="orange-box-container d-flex d-lg-none justify-content-center">
                <div className="orange-box"></div>
              </div>
              <Link to="/" className="navbar-brand d-block d-lg-none">
                {/* <h1 className="m-0 text-primary text-uppercase">Stay easy</h1> */}
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-around navbarCollapse"
                    : "collapse navbar-collapse justify-content-around"
                }
              >
                <div className="navbar-nav mr-auto py-0">
                  {navList.map((item, index) => (
                    <div key={index} className="mx-3">
                      {item.subItems ? (
                        <div
                          className="nav-item dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            to={item.path}
                            className="nav-link dropdown-toggle text-dark hover-bg-dark-grey hover-orange font-weight-bold"
                          >
                            {item.text}
                          </Link>
                          <div
                            className={`dropdown-menu rounded-0 m-0 ${
                              activeDropdown === item.id ? "show" : ""
                            }`}
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                to={sub.path}
                                className="dropdown-item text-dark hover-bg-dark-grey hover-orange font-weight-bold"
                              >
                                {sub.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="nav-item nav-link text-dark hover-bg-dark-grey hover-orange font-weight-bold"
                        >
                          {item.text}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary btn-md rounded-pill px-3 py-1 ml-4 font-weight-small">
                  BOOK NOW
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <style>
        {`
          .orange-box-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 7px;
            z-index: 1;
          }
          .orange-box {
            width: 100%;
            height: 7px;
            background-color: #ffa500;
          }
          .hover-orange:hover {
            color: #ffa500 !important; /* Orange color */
          }
          .hover-bg-dark-grey:hover {
            background-color: #333333 !important; /* Dark gray color */
            color: orange !important;
            padding: 0.5rem 1rem;
          }
          .font-weight-bold {
            font-weight: bold !important;
          }
          .font-weight-medium {
            font-weight: 500 !important;
          }
          .rounded-pill {
            border-radius: 50px !important;
          }
        `}
      </style>
    </>
  );
}
