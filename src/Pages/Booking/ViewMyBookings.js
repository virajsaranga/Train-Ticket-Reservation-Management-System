import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Row } from 'react-bootstrap';

function ViewMyBookings() {
    const [bookings, setBookings] = useState();

    useEffect((e) => {
        getMyBookings();
    }, []);

    const getMyBookings = () => {

        let result = localStorage.getItem("token")
        const abc = { token: result }
        console.log(abc.token);

        axios.get(`http://localhost:5068/api/booking/mybookings/${abc.token}`).then(res => {

            if (res.data.length != 0) {
                setBookings(res.data)
            } else {

            }
            console.log(res.data)
        })
            .catch((err) => {
                alert(err);
            })
    }
   //delete order by id
    const deleteOrder = (e) => {
        const orderid = e.target.id;
        axios.delete(`https://foodordersystm.onrender.com/foodorder/admin/delete/${orderid}`).then((res) => {
            console.log(res.data)
            alert('Order Deleted')
            window.location.reload();
        })
    }

    const setaa = (id) => {
        const data = {
            cmp: true
        }
        axios.put(`https://foodordersystm.onrender.com/foodorder/admin/update/${id}`, data);
        window.location.reload();

    }

    return (
        <div>
        
            <div className="">
            <header className="text-white text-center py-5 mb-5" style={{ backgroundImage: 'url("https://hips.hearstapps.com/countryliving/assets/17/31/1501697145-coast-starlight-train-ride-most-beautiful-america.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>
          <h1 style={{ fontWeight:'bold'}} >My Bookings</h1>
          <p >
            
          </p>
        </div>
      </header>
                {bookings ? <div>
                    <div class=" mt-5 mb-5" >
                        <div class="d-flex justify-content-center" >
                            <div class="col-md-8" >
                                <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                                    {bookings.map((booking, index) => (
                                        <div class="row p-2  border rounded pb-4 pt-4 " style={{ background: "hsl(0,0%,75%,0.3)", marginTop: "30px" }}>

                                            <div class="col-md-3 mt-1"><img
                                                class="img-fluid img-responsive rounded product-image"
                                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c79f526-868a-4f00-ad94-3cb7b694002a/d6mdbgy-d47174ad-9c04-4d35-b840-f9a568c34b79.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjNzlmNTI2LTg2OGEtNGYwMC1hZDk0LTNjYjdiNjk0MDAyYVwvZDZtZGJneS1kNDcxNzRhZC05YzA0LTRkMzUtYjg0MC1mOWE1NjhjMzRiNzkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mJpW_mrHwZn1BrMLwtoFhu9YqsSB5tFwZC_WbdnuNlo"
                                                style={{ height: '130px', marginTop: "14px" }} />
                                            </div>

                                            <div class="col-md-6 mt-1">
                                                <h5>{index + 1}. &nbsp;{booking?.trainName} - ( {booking?.noOfTickets} )</h5>
                                                <div class="d-flex flex-row">
                                                    <div className='fst-italic text-muted mb-3'> Ordered at {booking?.bookdate} ,  by Mr/Mrs.{booking?.bookdate}</div>
                                                </div>
                                                <p class="text-justify  para mb-0">
                                                    If you want to cancel your reservation, please do it within 5 days of booking. Otherwise, you can't cancel your reservation.
                                                </p>
                                            </div>

                                            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                <div class="d-flex flex-row align-items-center">
                                                    <h4 class="mr-1">Rs. {booking?.bookdate}</h4>
                                                </div>
                                                <h6 class="text-success">   Thank you Mr/Mrs.{booking?.cusName}</h6>
                                                <div class="d-flex flex-column mt-4">
                                                    <button onClick={() => setaa(booking.status)} style={{ border: "0", backgroundColor: booking.status == "Pending" ? "#b14700" : "" }} className="btn btn-success btn-sm mb-2">
                                                        {booking.status == "Pending" ? <text>Approve</text> : null}
                                                        {booking.status == "Approve" ? <text>Not Approve</text> : null}
                                                    </button>
                                                    <button class="btn btn-danger btn-sm " style={{ border: "0", backgroundColor: booking.status == "Pending" ? "#722828" : "" }} type="button" id={booking?.bookdate} onClick={(e) => deleteOrder(e)} >
                                                        {booking.status == "Pending" ? <text>Delete Reservation</text> : null}
                                                        {booking.status == "Approve" ? <text>Cancle Reservation</text> : null}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </div> : <div class="alert alert-primary mt-5" role="alert" style={{ textAlign: 'center' }}>
                    <h3>There are no any Reservations</h3>
                </div>}
            </div>
        </div>
    )
}

export default ViewMyBookings