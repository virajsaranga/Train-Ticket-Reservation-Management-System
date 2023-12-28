import axios from "axios";
import React, { useEffect, useState } from "react";

function AllAgents() {
  // State to store all users
  const [AllUsers, setAllUsers] = useState([]);

  // Fetch all users' data from the server
  useEffect(() => {
    axios.get("http://localhost:5068/api/Admin").then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  }, []);

  // Function to handle user deletion
  const handleDelete = async (id) => {
    try {
      // Send a request to delete the user with the specified ID
      await axios.delete(`http://localhost:5068/api/User/${id}`);
      
      // Inform the user about successful deletion
      alert("User Deleted Successfully");

      // Clear user-related data from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("name");

      // Redirect to the "AllUsers" page
      window.location.href = "/AllUsers";
    } catch (error) {
      console.error("An error occurred while deleting user data:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#b3d9ff", minHeight: "114vh", padding: "0px" }}>
      <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://content.api.news/v3/images/bin/ae11b0611a34ead73fad10d57770c7a2")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
          <h1 style={{ fontWeight:'bold'}} >All Agents</h1>
          <p >All Agents Details</p>
        </div>
      </header>
      
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>User Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {AllUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  {/* Display user type based on userRole */}
                  {user.userRole === "1" ? (
                    <span className="badge bg-success">Backoffice</span>
                  ) : (
                    <span className="badge bg-success">Travel Agent</span>
                  )}
                </td>
                <td>
                  <a className="btn btn-warning " href={`/edituser/${user.id}`}>
                    Edit
                  </a>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                    style={{ marginLeft: "5px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllAgents;
