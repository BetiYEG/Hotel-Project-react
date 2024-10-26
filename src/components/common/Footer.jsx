import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons ,something} from "../data/Data";
import Newsletter from "../home/Newsletter";

export default function Footer() {
  return (
    <>
      <Newsletter />
    <div
       className="container-fluid footer wow fadeIn"
       data-wow-delay="0.1s"
       style={{ backgroundColor: "#2a2a2a", color: "#fff" }}
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div >
                <Link to="/">
                <img src='../images/logo-light.png' alt='' />
                  
                </Link>
                <div className="d-flex pt-2">
               
              </div>
               
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-6 g-10">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      {section.header}
                    </h6>
                    <div className="row">
                      {/* Render the first half of the items */}
                      <div className="col-md-6 pe-9">
                        {section.UnitItem.slice(0, Math.ceil(section.UnitItem.length / 2)).map((item, itemIndex) => (
                          <a className="btn btn-link" href="" key={itemIndex}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                      {/* Render the second half of the items */}
                      <div className="col-md-6">
                        {section.UnitItem.slice(Math.ceil(section.UnitItem.length / 2)).map((item, itemIndex) => (
                          <a className="btn btn-link" href="" key={itemIndex}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                     
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>


            
            <div className="col-md-6 col-lg-3">
              {/* <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Contact
              </h6> */}
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              
              
            </div>
            
            
            
          </div>
        </div>
        <div className="row g-9">
            <div className="col-md-9 col-lg-5">
              <div >
               
                <div className="d-flex pt-2">
                <p>c 2023 Stay Easy Plus | All right reserved</p>
              </div>
               
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    
                    <div className="row">
                      
                      <div className="d-flex pt-2">
                            {socialIcons.slice(0, 4).map((val, index) => (
                              <a className="btn btn-outline-light btn-social" href="">
                                {val.icon}
                              </a>
                            ))}
                          </div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>


            
            <div className="col-md-6 col-lg-2">
             
              <div className="d-flex pt-2">
                <p>Made with by WubSites</p>
              </div>
              
            </div>
            
            
            
          </div>
      </div>
    </>
  );
}
