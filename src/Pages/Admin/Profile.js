import React, { useState, useEffect } from "react";
import "./User.css";
import axios from "axios";

const ProfileEditAdmin = () => {
  // State variables for user information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  // Fetch user information from local storage and populate the form
  useEffect(() => {
    // Retrieve user data from local storage
    const userInfo = localStorage.getItem("myData");
    const userInfoObject = JSON.parse(userInfo);

    // Extract user details
    const userName = userInfoObject.name;
    const userEmail = userInfoObject.email;
    const userNum = userInfoObject.mobileNumber;
    const userPassword = userInfoObject.password;
    const userRole = userInfoObject.userRole;

    // Update state with user details
    setName(userName);
    setEmail(userEmail);
    setMobileNumber(userNum);
    setPassword(userPassword);
    setUserRole(userRole);
  }, []);

  const onInputChange = (e) => {
    // Handle changes in form inputs
    const { name, value } = e.target;

    // Update the corresponding state variable
    if (name === "Name") {
      setName(value);
    } else if (name === "Email") {
      setEmail(value);
    } else if (name === "Num") {
      setMobileNumber(value);
    } else if (name === "Password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: "#b3d9ff", minHeight: "114vh", padding: "0px" }}>
      {/* Header Section */}
      <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://eurasiantimes.com/wp-content/uploads/2020/10/BULLET-TRAIN-1.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
          <h1 style={{ fontWeight: 'bold' }}>Admin Profile</h1>
          <p></p>
        </div>
      </header>
      <div className="info">
        <div className="userAccountcss">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div style={{ marginTop: "35%" }}>
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
                          />
                        </div>
                        <h6 className="f-w-600">{name}</h6>
                        <p>{email}</p>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                          Update Your Information
                        </h6>
                        <form>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Name</p>
                              <input
                                className="text-muted mb-4"
                                style={{ width: "150px" }}
                                type="text"
                                name="Name"
                                value={name}
                                onChange={onInputChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Email</p>
                              <input
                                className="text-muted mb-4"
                                style={{ width: "150px" }}
                                type="text"
                                name="Email"
                                value={email}
                                onChange={onInputChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Mobile Number</p>
                              <input
                                className="text-muted mb-4"
                                style={{ width: "150px" }}
                                type="text"
                                name="Num"
                                value={mobileNumber}
                                onChange={onInputChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">User Type</p>
                              <input
                                className="text-muted mb-4"
                                style={{ width: "150px" }}
                                type="text"
                                name="Num"
                                value={userRole}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Password</p>
                              <input
                                className="text-muted mb-4"
                                style={{ width: "150px" }}
                                type="password"
                                name="Password"
                                value={password}
                                onChange={onInputChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Confirm Password</p>
                              <input
                                className="text-muted mb-4"
                                style={{ width: "150px" }}
                                type="password"
                                name="Password"
                                value={password}
                                onChange={onInputChange}
                              />
                            </div>
                          </div>
                          <center>
                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                              <li>
                                <a
                                  href="#!"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="facebook"
                                  data-abc="true"
                                >
                                  <i
                                    className="fa fa-facebook-square feather icon-facebook facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="twitter"
                                  data-abc="true"
                                >
                                  <i
                                    className="fa fa-twitter feather icon-twitter twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="instagram"
                                  data-abc="true"
                                >
                                  <i
                                    className="fa fa-instagram feather icon-instagram instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </center>
                          <button
                            className="btn btn-info a123 me-5 text-white"
                            type="button"
                            name="submit"
                            style={{ width: "40%" }}
                          >
                            Cancel
                          </button>
                          <button
                            className="btn btn-danger a123 text-white"
                            type="submit"
                            name="submit"
                            style={{ width: "40%" }}
                          >
                            Update
                          </button>
                        </form>
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
    </div>
  );
};

export default ProfileEditAdmin;
