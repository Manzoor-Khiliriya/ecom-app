import { NavLink } from "react-router-dom";

function Footer() {

    return (
      <div className='container-fluid text-white' style={{ backgroundColor: '#232F3E' }}>
        <div className="row" >
          <div className="col p-3">
            <h4>About</h4>
            <div>
              <div><NavLink to="/contact-us">Contact us</NavLink></div>
              <div><NavLink to="/about-us">About us</NavLink></div>
              <div><NavLink to="/careers">Careers</NavLink></div>
              <div><NavLink to="/specials">Specials</NavLink></div>
            </div>
          </div>
  
          <div className="col p-3">
            <h4>Help</h4>
            <div>
              <div><NavLink to="/payment">Payment</NavLink></div>
              <div><NavLink to="/faq">FAQ</NavLink></div>
              <div><NavLink to="/returns">Returns</NavLink></div>
              <div><NavLink to="/shipping">Shipping</NavLink></div>
            </div>
          </div>
  
          <div className="col p-3">
            <h4>Information</h4>
            <div>
              <div><NavLink to="/privacy">Privacy Policy</NavLink></div>
              <div><NavLink to="/terms">Terms & Conditions</NavLink></div>
            </div>
          </div>
  
          <div className="col p-3">
            <h4>Social</h4>
            <div>
              <div><NavLink to="/facebook">Facebook</NavLink></div>
              <div><NavLink to="/youtube">Youtube</NavLink></div>
              <div><NavLink to="/twitter">Twitter</NavLink></div>
            </div>
          </div>
        </div>
        <hr />
        <div className='text-center'>
          <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
        </div>
  
      </div>
    )
  }

export default Footer;