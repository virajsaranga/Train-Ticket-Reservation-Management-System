import axios from "axios";
import React, { useEffect, useState } from "react";

function TrainsList() {
  const [trains, setTrains] = useState([]);

  // Fetch the list of trains when the component mounts
  useEffect(() => {
    axios.get("http://localhost:5068/api/trains").then((res) => {
      console.log(res.data);
      setTrains(res.data);
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#b3d9ff", minHeight: "114vh", padding: "0px" }}>
        <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://lp-cms-production.imgix.net/2023-02/shutterstock_1828523150.jpg?auto=format&w=1440&h=810&fit=crop&q=75")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
            <h1 style={{ fontWeight: 'bold' }}>Train List</h1>
            
          </div>
        </header>

        <div className="container">
          <div className="row">
            {trains.map((train) => (
              <div key={train.id} className="col-md-3 mb-3">
                <div className="card">
                  <img
                    src={train.imageURL}
                    className="card-img-top"
                    alt={train.trainName}
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">{train.trainName}</h5>
                      </div>
                      <div className="col-md-4">
                        <span className="badge bg-primary">{train.type}</span>
                      </div>
                    </div>

                    <p className="card-text">Start: {train.from}</p>
                    <p className="card-text">Destination: {train.to}</p>
                    <p className="card-text">Departure: {train.departureTime}</p>
                    <p className="card-text">Arrival: {train.arrivalTime}</p>
                    <button className="btn btn-primary w-100 mt-2" onClick={() => { window.location.replace(`/addbooking/${train.id}`) }}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainsList;
