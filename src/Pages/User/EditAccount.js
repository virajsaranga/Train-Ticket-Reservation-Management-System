import axios from "axios";
import React, { useEffect, useState } from "react";

const EditAccount = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    nic: "",
  });

  useEffect(() => {
    const id = localStorage.getItem("token");
    axios
      .get(`http://localhost:5068/api/User/${id}   `)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching train data:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const id = localStorage.getItem("token");
      await axios.put(`http://localhost:5068/api/User/${id}`, formData);
      alert("Account updated successfully!"); // You can display a success message or redirect to another page
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error updating account:", error);
      alert("An error occurred while updating your account. Please try again."); // You can display an error message to the user
    }
  };

  return (
    <>
     <div style={{ backgroundColor: "#80bfff", minHeight: "114vh", padding: "0px" }}>
    <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://www.goskills.com/blobs/blogs/314/49f2b21f-2c29-4307-8bcd-8fe6010623ac-hero.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
          <h1 style={{ fontWeight:'bold'}} >Edit Your Profile</h1>
          
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img
              src="https://www.iconarchive.com/download/i6063/custom-icon-design/pretty-office-3/Edit-Male-User.ico"
              //   src="https://knowledgemission.kerala.gov.in/img/official-login.jpg"
              //   src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
              className="img-fluid"
              alt="EditAccount"
            />
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
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
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Give Password Again To Submit
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default EditAccount;
