import axios from "axios";
import React, { useEffect, useState } from "react";

function AllTrains() {
  const [alltrains, setAlltrains] = useState([]);

  // Fetch all trains when the component mounts
  useEffect(() => {
    axios.get("http://localhost:5068/api/trains").then((res) => {
      console.log(res.data);
      setAlltrains(res.data);
    });
  }, []);

  // Handle train deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5068/api/trains/${id}`);
      alert("Train Deleted Successfully");
      // Reload the page or navigate to another route as needed
    } catch (error) {
      console.error("Error deleting train data:", error);
    }
  };

  // Toggle the active status of a train
  const handleActive = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5068/api/trains/${id}`);
      const train = response.data;
      train.isActive = !train.isActive;
      await axios.put(`http://localhost:5068/api/trains/${id}`, train);
      alert("Train Details Updated Successfully");
      // Reload the page or navigate to another route as needed
    } catch (error) {
      console.error("Error updating train data:", error);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#b3ffb3", minHeight: "114vh", padding: "0px" }}>
        <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://www.goskills.com/blobs/blogs/314/49f2b21f-2c29-4307-8bcd-8fe6010623ac-hero.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
            <h1 style={{ fontWeight: 'bold' }}>All Users List</h1>
            <p>All Users List</p>
          </div>
        </header>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Train Name</th>
                <th>Type</th>
                <th>Start</th>
                <th>Destination</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {alltrains.map((train) => (
                <tr key={train.id}>
                  <td>
                    <img
                      src={train.imageURL}
                      alt={train.trainName}
                      style={{ width: "50px", height: "auto" }}
                    />
                  </td>
                  <td>{train.trainName}</td>
                  <td>{train.type}</td>
                  <td>{train.from}</td>
                  <td>{train.to}</td>
                  <td>{train.departureTime}</td>
                  <td>{train.arrivalTime}</td>
                  <td>
                    {train.isActive === true ? (
                      <span className="badge bg-success">Active</span>
                    ) : (
                      <span className="badge bg-danger">Inactive</span>
                    )}
                  </td>
                  <td>
                    <a className="btn btn-warning " href={`/edittrain/${train.id}`}>
                      Edit
                    </a>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(train.id)}
                      style={{ marginLeft: "5px" }}
                    >
                      Delete
                    </button>
                    {train.isActive === true ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => handleActive(train.id)}
                        style={{ marginLeft: "5px" }}
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => handleActive(train.id)}
                        style={{ marginLeft: "5px" }}
                      >
                        Activate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllTrains;
