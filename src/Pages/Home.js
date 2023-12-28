import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function Home() {

  const [trendingEvents, setTrendingEvents] = useState([
    {
      itemname: 'Badulla Kandy Express',
      itemDesc: 'Badulla Colombo Express is a train service operated by Sri Lanka Railways. The train runs daily from Badulla to Colombo.',
      itemImage: 'https://ceylontoday.lk/wp-content/uploads/2022/03/23f551ce92298ad37dd8dd829166e62a.jpg'
    },
    {
      itemname: 'Colombo Colombo Express',
      itemDesc: 'Colombo Kandy Express is a train service operated by Sri Lanka Railways. The train runs daily from Colombo to Kandy.',
      itemImage: 'https://imgeng.jagran.com/images/2022/apr/railways1650074183526.jpg'
    },
    {
      itemname: 'Colombo Jaffna Express',
      itemDesc: 'Colombo Jaffna Express is a train service operated by Sri Lanka Railways. The train runs daily from Colombo to Jaffna.',
      itemImage: 'https://images.livemint.com/img/2023/02/02/600x338/Vande_Metro_1675296807624_1675296807838_1675296807838.jpg'
    },
    {
      itemname: 'Colombo Matara Express',
      itemDesc: 'Colombo Matara Express is a train service operated by Sri Lanka Railways. The train runs daily from Colombo to Matara.',
      itemImage: 'https://www.seat61.com/images/SriLanka-s11-train-ext.jpg'
    },
    {
      itemname: 'Colombo Galle Express',
      itemDesc: 'Colombo Galle Express is a train service operated by Sri Lanka Railways. The train runs daily from Colombo to Galle.',
      itemImage: 'https://www.seat61.com/images/SriLanka-commuter-train2.jpg'
    },
    {
      itemname: 'Colombo Anuradhapura Express',
      itemDesc: 'Colombo Anuradhapura Express is a train service operated by Sri Lanka Railways. The train runs daily from Colombo ',
      itemImage: 'https://www.mfa.gov.lk/images/stories/Newspapers/BUP_DFT_DFT-6-5.jpg'
    },
    {
      itemname: 'Colombo Embilipitiya Express',
      itemDesc: 'Colombo Batticaloa Express is a train service operated by Sri Lanka Railways. The train runs daily from Colombo ',
      itemImage: 'https://cdn.hirunews.lk/Data/News_Images/201905/1558927716_3427115_hirunews_Train-delay.jpg'
    },
    {
      itemname: 'Colombo Trincomalee Express',
      itemDesc: 'Colombo Trincomalee Express is a train service operated by Sri Lanka Railways. The train runs daily from Colombo ',
      itemImage: 'https://d1c4d7gnm6as1q.cloudfront.net/Pictures/480xany/4/5/4/25454_tn_lk-icf-emu_02.jpg'
    }
  ])

  // Divide the trending events into groups of four
  const groupedEvents = trendingEvents.reduce((acc, event, index) => {
    if (index % 4 === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(event);
    return acc;
  }, []);

  const serviceData = [
    {
      name: 'Ticket Booking',
      img: 'https://png.pngtree.com/png-vector/20220906/ourmid/pngtree-train-ticket-png-image_6139639.png',
      desc: 'A ticket is a voucher that indicates that an individual is entitled to admission to an event or establishment.'
    },
    {
      name: 'Seat Reservation',
      img: 'https://www.vogelsitze.com/wp-content/uploads/Magnio_Vip_Front_B-150x150.png',
      desc: 'A seat reservation is a guarantee that you will have a seat on a train. It is not a ticket and does not allow you to travel.'
    },
    {
      name: 'Train Tracking',
      img: 'https://static.vecteezy.com/system/resources/thumbnails/024/724/482/small/railroad-track-isolated-on-transparent-background-generative-ai-railway-track-png.png',
      desc: 'Train tracking is the process of determining the location of a train and its direction of travel using a variety of technologies.'
    }
  ]

  return (
    <div style={{ backgroundColor: "#b3d9ff", minHeight: "114vh", padding: "0px" }}>
    

      <div className="intro" id="home">
        <h1 className="animate">Welcome to  Rail Rover</h1>
        <p>Get a ride Rail Rover booking train tickets.</p>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Search Your Journey</h2>
            

            <p style={{ fontSize: "20px" }}>
            The best train reservation tool in Sri Lanka is called "Rail Rover" and it was created to offer tourists a simple and effective way to organize, schedule, and manage their train travel. This cutting-edge application
            has a variety of features and advantages, making it the preferred option.
            both local commuters and visitors examining the Sri Lanka's gorgeous landscapes


            </p>
            <a className="btn btn-primary w-50 h-30" href="/trainsList">
              Book Now
            </a>
          </div>
          <div className="col-md-6">
            <img
              style={{ borderRadius: "10px" }}
              src="https://images6.alphacoders.com/133/1334446.png"
              alt="Train"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <br />
     

      <br />
      
     
      <section id="contact" style={{ fontSize: "20px" }}>
        <div className="container mt-3 contactContent">
          <h1 class="text-center mt-2" style={{ color: "#000099", fontFamily: "Times New Roman, Times, serif" }}>
            Contact Us
          </h1>

          <div className="row mt-4">
            <div className="col-lg-6">
              <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '500px', height: '500px' }}>
                <div id="g-mapdisplay" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                  <iframe
                    style={{ height: '100%', width: '100%', border: '0' }}
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.5101513425207!2d79.97036957483822!3d6.914682818494246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e1!3m2!1sen!2slk!4v1694113968171!5m2!1sen!2slk"
                  ></iframe>
                </div>
                <a className="the-googlemap-enabler" href="https://www.bootstrapskins.com/themes" id="enable-maps-data">
                  premium bootstrap themes
                </a>
                <style>{`#g-mapdisplay img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}`}</style>
              </div>

            </div>

            <div className="col-lg-6 d-flex align-items-center">
              <form className="w-100" >
                If you have any questions or would like to contact us, please fill out the form below and We will get back to you as soon as possible.
                {/* Form fields */}<br /><br />
                <input type="text" className="form-control form-control" name="name" placeholder="Name" />
                <input type="email" className="form-control mt-3" name="email" placeholder="Email" />
                <input type="text" className="form-control mt-3" name="subject" placeholder="Subject" />
                <div className="mb-3 mt-3">
                  <textarea className="form-control" rows={5} id="comment" name="message" placeholder="Message"></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary mt-3" style={{ width: '100%' }}>Send Mail</button>
              </form>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
