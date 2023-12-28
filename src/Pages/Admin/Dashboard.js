import React, { useState, useEffect } from "react";

function AdminHome() {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    // Retrieve user type from local storage
    const userTypeData = localStorage.getItem("myData");
    const userTypeObject = JSON.parse(userTypeData);
    const userRole = userTypeObject.userRole;

    // Set the user type based on the role
    setUserType(userRole);
    if (userRole === "1") {
      setName("Traveler Agent");
    } else {
      setName("Backoffice Agent");
    }
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#b3ffb3", minHeight: "114vh", padding: "0px" }}>
        {/* Header Section */}
        <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://www.goskills.com/blobs/blogs/314/49f2b21f-2c29-4307-8bcd-8fe6010623ac-hero.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
            <h1 style={{ fontWeight: 'bold' }}>Dashboard</h1>
          </div>
        </header>
        <div style={{ backgroundColor: "hsla(90, 100%, 89%, 0.55)" }}>
          <div id="bodyadd">
            <div className="infoadmin">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-auto mx-auto">
                    <div class="card flex-row my-3 border-5 shadow rounded-5 overflow-hidden" style={{ backgroundColor: "hsla(90, 0%, 100%, 0.7)" }}>
                      <div class="card-img-left d-none d-md-flex"></div>
                      <div class="card-body p-4 p-sm-5">
                        <center>
                          <h1>{name} DashBoard</h1>
                        </center>
                        <hr class="my-4" />
                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                              <a href="/get" style={{ textDecoration: "none", color: "black" }}>
                                <i class="fa fa-user mr-2" aria-hidden="true"></i> Traveler Management
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                              <a href="/travelpackages/admin" style={{ textDecoration: "none", color: "black" }}>
                                <i class="fa fa-car mr-2" aria-hidden="true"></i> Train Management
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            {userType === "1" ? (
                              <button class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                                <a href="/allbookings" style={{ textDecoration: "none", color: "black" }}>
                                  <i class="fa fa-hotel mr-2" aria-hidden="true"></i> Ticket Booking Management
                                </a>
                              </button>
                            ) : null}
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            {userType === "1" ? (
                              <button class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                                <a href="/allagents" style={{ textDecoration: "none", color: "black" }}>
                                  <i class="fa fa-swimmer mr-2" aria-hidden="true"></i> User Management
                                </a>
                              </button>
                            ) : null}
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 "></div>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 "></div>
                        </div>
                        <hr class="my-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
