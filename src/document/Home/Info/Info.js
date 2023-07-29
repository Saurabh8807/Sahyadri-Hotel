import React from "react";
import "./info.css";
import { Fade, Slide, Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
import divider from "./divider.png";

export default function Info() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/user/reservation`;
    navigate(path);
  };

  return (
    <div className="info">
      <Fade bottom duration={1000}>
        <div className="headings fade-in">
          <h1>WELCOME TO SAHYADRI HOTEL</h1>
          <h3>Best Boutique Accommodation In Mumbai</h3>
          <img className="divider" src={divider} alt="" width="300vw" />
          <p className="downHeading">
            Sahyadri provides you with quality accommodation ideal for leisure and business travelers.
          </p>
        </div>
      </Fade>

      <div className="both">
        <Fade left duration={800} delay={200}>
          <div className="detail">
            <p className="downHeading2">
              Sahyadri is a captivating leisure destination in itself, offering a myriad of services and facilities to experience our truly enriching surroundings. Sahyadri is one of the best budget homestays in Mumbai. If you are planning a visit to the city of lakes, Mumbai, then it is one of the most prominent accommodations for your comfortable stay. To pamper the guests with ultimate comfort, luxury, and pleasure, we offer multifarious amenities, rooftop restaurant, and services. Sahyadri is one of the best budget homestays in Mumbai, equipped with all modern amenities.
            </p>
          </div>
        </Fade>
        <Slide right duration={1000} delay={400}>
          <div className="video">
            <iframe
              title="Hotel Video"
              width="400"
              height="230"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
            ></iframe>
          </div>
        </Slide>
      </div>

      <button type="button" id="booknow" onClick={routeChange} className="btn btn-primary">
        Book Now
      </button>

      <div className="img100" style={{ marginRight: "12vw" }}>
        <img className="Image100" src={Image} alt="" width="500vw" />
      </div>
      <Fade bottom duration={1000}>

      <h2 style={{ textShadow:"20px" ,justifyContent:"center", marginBottom: "3vh", color: "darkgreen", fontStyle: "oblique" }}>
        STAY IN THE HEART OF MUMBAI
      </h2>
      <img className="aboutDivider" src={divider} alt=""  width="300vw" />
      <p
        style={{
          width: "89vw",
          textAlign: "center",
          marginLeft: "5vw",
          height: "15vh",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
          fontSize: 18.4,
          fontWeight: 400,
          marginBottom:5
        }}
      >
        Conveniently located in the heart of South Mumbai on Marine Drive, Sahyadri Hotel has been welcoming both business and leisure clientele for over 50 years. Overlooking the beautiful Arabian Sea, guests are treated to the best view in Mumbai – the spectacular Queen's Necklace. Guests can enjoy breathtaking sunsets and stunning sea views from their own private balcony. Our spacious rooms are all air-conditioned and come equipped with free wireless internet, a mini refrigerator, tea/coffee making facilities, and an electronic safe. The hotel is an ideal base from which to explore the busy city of Mumbai, with museums, shops, art galleries, restaurants, and other attractions all within walking distance or a short drive away.
      </p>
      </Fade>
      {/* Facilities */}
    <div className="circle-row">
      <Slide left duration={1000} delay={400}>
        <div className="circle">
          <Zoom duration={800} delay={600}>
            <span>75 YEARS of HOSPITALITY</span>
          </Zoom>
        </div>
      </Slide>
      <div className="circle">
        <Zoom duration={800} delay={800}>
          <span>STYLISH HAVEN</span>
        </Zoom>
      </div>
      <Slide right duration={1000} delay={400}>
        <div className="circle">
          <Zoom duration={800} delay={1000}>
            <span>LUXURIOUS RETREAT</span>
          </Zoom>
        </div>
      </Slide>
    </div>
    </div>
  );
}
