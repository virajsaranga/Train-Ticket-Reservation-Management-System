import axios from "axios";
import React, { useState } from "react";

function AddTrain() {
  // State variables for form fields
  const [trainName, setTrainName] = useState("");
  const [type, setType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [imageURL, setImageURL] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      trainName,
      type,
      from,
      to,
      departureTime,
      arrivalTime,
      imageURL
    );

    // Create a data object with the form values
    const data = {
      trainName,
      type,
      from,
      to,
      departureTime,
      arrivalTime,
      imageURL,
    };

    try {
      // Make a POST request to the specified URL (http://localhost:5068/api/trains)
      const response = await axios.post(
        "http://localhost:5068/api/trains",
        data
      );

      // Inform the user about successful train addition
      alert("Train Added Successfully");

      // Handle the response as needed
      console.log("Server response:", response.data);

      // Clear the form fields after successful submission
      setTrainName("");
      setType("");
      setFrom("");
      setTo("");
      setDepartureTime("");
      setArrivalTime("");
      setImageURL("");
    } catch (error) {
      // Handle any errors that occur during the POST request
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#b3d9ff", minHeight: "114vh", padding: "0px" }}>
      {/* Header Section */}
      <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://eurasiantimes.com/wp-content/uploads/2020/10/BULLET-TRAIN-1.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
          <h1 style={{ fontWeight: 'bold' }}>Create New Train</h1>
          <p>Create New Train Profile</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* Train Name Input */}
              <div className="mb-3">
                <label htmlFor="trainName" className="form-label">
                  Train Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="trainName"
                  name="trainName"
                  value={trainName}
                  onChange={(event) => setTrainName(event.target.value)}
                  required
                />
              </div>

              {/* Type Input */}
              <div className="mb-3">
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                  required
                />
              </div>

              {/* From Input */}
              <div className="mb-3">
                <label htmlFor="from" className="form-label">
                  From
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="from"
                  name="from"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                  required
                />
              </div>

              {/* To Input */}
              <div className="mb-3">
                <label htmlFor="to" className="form-label">
                  To
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="to"
                  name="to"
                  value={to}
                  onChange={(event) => setTo(event.target.value)}
                  required
                />
              </div>

              {/* Departure Time Input */}
              <div className="mb-3">
                <label htmlFor="departureTime" className="form-label">
                  Departure Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="departureTime"
                  name="departureTime"
                  value={departureTime}
                  onChange={(event) => setDepartureTime(event.target.value)}
                  required
                />
              </div>

              {/* Arrival Time Input */}
              <div className="mb-3">
                <label htmlFor="arrivalTime" className="form-label">
                  Arrival Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="arrivalTime"
                  name="arrivalTime"
                  value={arrivalTime}
                  onChange={(event) => setArrivalTime(event.target.value)}
                  required
                />
              </div>

              {/* Image URL Input */}
              <div className="mb-3">
                <label htmlFor="imageURL" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imageURL"
                  name="imageURL"
                  value={imageURL}
                  onChange={(event) => setImageURL(event.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Add Train
              </button>
            </form>
          </div>

          {/* Image Display */}
          <div className="col-md-6">
            <img
              style={{ borderRadius: "10px" }}
              src="https://static.vecteezy.com/system/resources/previews/022/906/697/non_2x/high-speed-train-at-station-and-blurred-cityscape-at-night-on-background-postproducted-generative-ai-digital-illustration-of-non-existing-train-model-free-photo.jpg"
              className="img-fluid"
              alt="train"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTrain;
