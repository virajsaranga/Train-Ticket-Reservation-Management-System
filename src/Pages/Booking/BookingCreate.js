import axios from "axios";
import React, { useEffect, useState } from "react";
import './Booking.css';

function BookingCreate() {
    // State variables to manage form fields
    const [type, settype] = useState("");
    const [img, setImg] = useState("");
    const [from, setfrom] = useState("");
    const [to, setto] = useState("");
    const [departureTime, setdepartureTime] = useState("");
    const [CusName, setCusName] = useState("");
    const [cusId, setcusId] = useState("");
    const [bookdate, setBookdate] = useState("");
    const [traintime, setTraintime] = useState("");
    const [noOfTickets, setnoOfTickets] = useState("");
    const [total, settotal] = useState("");
    const [trainId, settrainId] = useState("");
    const [trainName, settrainName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a data object with the form values
        const data = {
            CusName,
            cusId,
            bookdate,
            from,
            to,
            traintime,
            noOfTickets,
            total,
            trainId,
            trainName
        };

        try {
            // Make a POST request to create a booking
            const response = await axios.post(
                "http://localhost:5068/api/booking",
                data
            );

            // Display a success message
            alert("Booking Added Successfully");

            // Clear the form fields after successful submission
            setCusName("");
            setBookdate("");
            setto("");
            setfrom("");
            setTraintime("");
        } catch (error) {
            // Handle any errors that occur during the POST request
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getTrainDetails();
    }, [])

    const getTrainDetails = async () => {
        const id = window.location.pathname.split("/")[2];
        const response = await axios.get(`http://localhost:5068/api/trains/${id}`);
        console.log(response.data);
        settrainName(response.data.trainName);
        settype(response.data.type);
        setImg(response.data.imageURL);
        setfrom(response.data.from);
        setto(response.data.to);
        setdepartureTime(response.data.departureTime);
    }

    return (
        <div style={{ backgroundColor: "lightgreen", minHeight: "114vh", padding: "0px" }}>
            <div class="bookingcss" >
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-11">
                            <div class="card card0 rounded-0">
                                <div class="row">
                                    <div class="col-md-5 d-md-block d-none box">
                                        <div class="righta " style={{ backgroundColor: "white", border: "0px", paddingLeft: '10px' }}>
                                            <div class="text-center mb-2"> <h2>Your Reservation Details</h2> </div>
                                            <hr class="text-center mb-4" />
                                            <h4 style={{ color: "hsl(0,0%,0%,0.6)" }}>{trainName}</h4>
                                            <div >
                                                <div class="col-12 "><img class="img-fluid" src={`${img}`} style={{ height: "200px", width: "100%", objectFit: 'cover' }} /></div>
                                            </div>
                                            <hr />
                                            <div class="row lower">
                                                <div class="col text-lefta">Train Type</div>
                                                <div class="col text-righta">{type}</div>
                                            </div>
                                            <div class="row lower">
                                                <div class="col text-lefta">From Location</div>
                                                <div class="col text-righta">{from}</div>
                                            </div>
                                            <div class="row lower">
                                                <div class="col text-lefta">To Location</div>
                                                <div class="col text-righta">{to}</div>
                                            </div>
                                            <hr />
                                            <div class="row lower">
                                                <div class="col text-lefta"><b>Total Price</b></div>
                                                <div class="col text-righta"><b>Rs. 1600.00</b></div>
                                            </div>
                                            <br />
                                            <p class="text-muted text-center">Apply Terms and Condition</p>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-sm-12 p-0 box">
                                        <div class="card rounded-0 border-0 card2" id="paypage" style={{ marginLeft: '5%' }}>
                                            <div class="form-card">
                                                <div className="tabcard">
                                                    <div class="">
                                                        <ul class="nav nav-pills mb-3 shadow-sm" id="pills-tab" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" id="bookingDetails-tab" data-toggle="pill" href="#bookingDetails" role="tab" aria-controls="bookingDetails" aria-selected="true">Booking Details</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="payment-tab" data-toggle="pill" href="#payment" role="tab" aria-controls="payment" aria-selected="false">Payment Details</a>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content" id="pills-tabContent p-3">
                                                            <div class="tab-pane fade show active" id="bookingDetails" role="tabpanel" aria-labelledby="bookingDetails-tab">
                                                                <label class="pay">Customer Name</label>
                                                                <input type="text" name="holdername" placeholder="Customer Name" />
                                                                <label class="pay">NIC / Passport / Driving License</label>
                                                                <input type="text" name="holdername" placeholder="NIC / Passport / Driving License" />
                                                                <div class="row">
                                                                    <div class="col-8 col-md-4">
                                                                        <label class="pay">Book Date</label>
                                                                        <input type="date" name="cardno" id="cr_no" />
                                                                    </div>
                                                                    <div class="col-4 col-md-4">
                                                                        <label class="pay">Number of Seats</label><br />
                                                                        <select name="cvcpwd" class="placeicon" style={{ width: '100%', height: '43px' }}>
                                                                            <option value="1">1 Seat</option>
                                                                            <option value="2">2 Seats</option>
                                                                            <option value="3">3 Seats</option>
                                                                            <option value="4">4 Seats</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-4 col-md-4">
                                                                        <label class="pay">Class</label><br />
                                                                        <select name="cvcpwd" class="placeicon" style={{ width: '100%', height: '43px' }}>
                                                                            <option value="1">First Class</option>
                                                                            <option value="2">Second Class</option>
                                                                            <option value="3">Third Class</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-8 col-md-6">
                                                                        <label class="pay">From Location</label>
                                                                        <input type="text" name="cardno" id="cr_no" placeholder="From Location" />
                                                                    </div>
                                                                    <div class="col-4 col-md-6">
                                                                        <label class="pay">To Location</label>
                                                                        <input type="text" name="cvcpwd" placeholder="To Location" class="placeicon" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <a class="btn btn-info placeicon w-100" id="payment-tab" data-toggle="pill" href="#payment" role="tab" aria-controls="payment" aria-selected="false">NEXT &nbsp; &#xf178;</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                                                <h2 id="heading2" class="text-danger">Payment Method</h2>
                                                                <div class="radio-group">
                                                                    <div class='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px" /></div>
                                                                    <div class='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px" /></div>
                                                                    <br />
                                                                </div>
                                                                <label class="pay">Name on Card</label>
                                                                <input type="text" name="holdername" placeholder="Card Holder's Name" />
                                                                <div class="row">
                                                                    <div class="col-8 col-md-6">
                                                                        <label class="pay">Card Number</label>
                                                                        <input type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minlength="16" maxlength="16" />
                                                                    </div>
                                                                    <div class="col-4 col-md-6">
                                                                        <label class="pay">CVV</label>
                                                                        <input type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" class="placeicon" minlength="3" maxlength="3" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <label class="pay">Expiration Date</label>
                                                                    </div>
                                                                    <div class="col-md-12">
                                                                        <input type="text" name="exp" id="exp" placeholder="MM/YY" minlength="5" maxlength="5" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <input type="submit" value="MAKE A PAYMENT &nbsp; &#xf178;" class="btn btn-info placeicon" style={{ width: '100%' }} />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCreate;
