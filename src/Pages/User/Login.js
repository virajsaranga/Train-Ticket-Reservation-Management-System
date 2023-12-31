import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    nic: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5068/api/User/login",
        formData
      );

      if (response.status === 200) {
        // Successful login, you can redirect the user or perform any other action here.
        console.log("Login successful!");
        console.log(response.data);
        localStorage.setItem("token", response.data.id);
        localStorage.setItem("name", response.data.username);
        window.location.href = "/";
      } else {
        // Handle unsuccessful login, show an error message, etc.
        console.log("Login failed.");
      }
    } catch (error) {
      // Handle any network errors or other exceptions here.
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#b3ffb3", minHeight: "114vh", padding: "0px" }}>
    <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://www.goskills.com/blobs/blogs/314/49f2b21f-2c29-4307-8bcd-8fe6010623ac-hero.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
          <h1 style={{ fontWeight:'bold'}} >Login</h1>
          
        </div>
      </header>

      <div className="container">
    
        <div className="row">
          <div className="col-md-6">
            <img
              //   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              //   src="https://knowledgemission.kerala.gov.in/img/official-login.jpg"
              //   src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
              src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png"
              className="img-fluid"
              alt="Login"
            />
          </div>

          <div className="col-md-6 mt-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  NIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nic"
                  name="nic"
                  value={formData.nic}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
