import React from 'react';
import './MyFooter.css';

const MyFooter = () => {
  return (
    <div className="my-footer">
      <div className="mt-5">
        <div className="card">
          <div className="row mb-4">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="footer-text pull-left">
                <div className="d-flex">
                  <h2 style={{ color: "#8ca3ba" }}>
                    <img
                      style={{ width: "40px", height: "40px", marginRight: "10px" }}
                      src="https://static.vecteezy.com/system/resources/previews/024/521/349/original/train-transparent-background-png.png"
                      alt="Rail Rover Logo"
                    />
                    Rail Rover
                  </h2>
                </div>
                <p className="card-text">
                  The primary goal of the proposed online train ticket booking system is to serve travelers in Sri Lanka.
                </p>
                <div className="social mt-2 mb-3">
                  <i className="fa fa-facebook-official fa-lg" onClick={() => { window.location.replace("https://www.facebook.com/profile.php?id=100007444869672&mibextid=LQQJ4d") }}></i>
                  <i className="fa fa-instagram fa-lg" onClick={() => { window.location.replace("https://instagram.com/k_a_m_i_n_d_u_") }}></i>
                  <i className="fa fa-twitter fa-lg" onClick={() => { window.location.replace("https://twitter.com/k_a_m_i_n_d_u_") }}></i>
                  <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.location.replace("https://www.linkedin.com/in/kamindu-gayantha-4693661b5") }}></i>
                  <i className="fa fa-github" onClick={() => { window.location.replace("https://github.com/Kamindu99") }}></i>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">Services</h5>
              <ul>
                <li>User Management</li>
                <li>Ticket Booking</li>
                <li>View Trains</li>
                <li>Payment</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">Terms & Conditions</h5>
              <ul className="card-text">
                <li>Copyright</li>
                <li>Privacy Policy</li>
                <li>End User Agreement</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">Contact Us</h5>
              <ul className="card-text">
                <li>SLIIT</li>
                <li>Malabe</li>
                <li>Kollupitiya</li>
                <li>071 2222224</li>
              </ul>
            </div>
          </div>
          <div className="divider mb-4"></div>
          <div className="row" style={{ fontSize: "10px", textAlign: "center" }}>
            <div>
              Designed and Developed by Rail Rover Team <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
