import React, { useState } from "react";
import "./info.css";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import divider from "./divider.png";

export default function Info() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/user/reservation`;
    navigate(path);
  };

  const fadeInProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideInProps = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
    config: { duration: 800, delay: 200 },
  });
  const slideOutProps = useSpring({
    from: { transform: "translateX(100%)" }, // Slide in from the right
    to: { transform: "translateX(0)" },      // Slide to the original position
    config: { duration: 800, delay: 200 },
  
  });

  const fadeInUpProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 200 },
  });

  const fadeDownProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 200 },
  });

  const handleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <div className="info">
      <animated.div className="headings fade-in" style={fadeInProps}>
        <h1>WELCOME TO SAHYADRI HOTEL</h1>
        <h3>Best Boutique Accommodation In Mumbai</h3>
        <img className="divider" src={divider} alt="" width="300vw" />
        <animated.p className="downHeading" style={fadeDownProps}>
          Sahyadri provides you with quality accommodation ideal for leisure and business travelers.
        </animated.p>
      </animated.div>

      <div className="both">
        <animated.div className="detail" style={slideInProps}>
          <animated.p className="downHeading2" style={fadeInUpProps}>
          Sahyadri is a captivating leisure destination in itself, offering a myriad of services and facilities to experience our truly enriching surroundings. Sahyadri is one of the best budget homestays in Mumbai. If you are planning a visit to the city of lakes, Mumbai, then it is one of the most prominent accommodations for your comfortable stay. To pamper the guests with ultimate comfort, luxury, and pleasure, we offer multifarious amenities, rooftop restaurant, and services. Sahyadri is one of the best budget homestays in Mumbai, equipped with all modern amenities.          </animated.p>
        </animated.div>
        <animated.div className="video" style={slideOutProps}>
          <iframe
            title="Hotel Video"
            width="400"
            height="230"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
          ></iframe>
        </animated.div>
      </div>

      {isButtonVisible && (
        <animated.button
          type="button"
          id="booknow"
          onClick={routeChange}
          className="btn btn-primary"
          style={fadeInUpProps}
        >
          Book Now
        </animated.button>
      )}

      <animated.div
        className="img100"
        style={{ marginRight: "12vw", ...fadeInUpProps }}
      >
        <img className="Image100" src={Image} alt="" width="500vw" />
      </animated.div>

      <animated.h2
        style={{
          textShadow: "20px",
          justifyContent: "center",
          marginBottom: "3vh",
          color: "darkgreen",
          fontStyle: "oblique",
          ...fadeInUpProps,
        }}
      >
        STAY IN THE HEART OF MUMBAI
      </animated.h2>
      <img
        className="aboutDivider"
        src={divider}
        alt=""
        width="300vw"
        style={fadeInUpProps}
      />
      <animated.p
        style={{
          width: "89vw",
          textAlign: "center",
          marginLeft: "5vw",
          height: "15vh",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
          fontSize: 18.4,
          fontWeight: 400,
          marginBottom: 5,
          ...fadeInUpProps,
        }}
      >
 Conveniently located in the heart of South Mumbai on Marine Drive, Sahyadri Hotel has been welcoming both business and leisure clientele for over 50 years. Overlooking the beautiful Arabian Sea, guests are treated to the best view in Mumbai – the spectacular Queen's Necklace. Guests can enjoy breathtaking sunsets and stunning sea views from their own private balcony. Our spacious rooms are all air-conditioned and come equipped with free wireless internet, a mini refrigerator, tea/coffee making facilities, and an electronic safe. The hotel is an ideal base from which to explore the busy city of Mumbai, with museums, shops, art galleries, restaurants, and other attractions all within walking distance or a short drive away.      
 </animated.p>

      {/* Facilities */}
      <div className="circle-row">
        <animated.div className="circle" style={slideInProps}>
          <animated.span style={fadeInUpProps}>75 YEARS of HOSPITALITY</animated.span>
        </animated.div>
        <animated.div className="circle" style={slideInProps}>
          <animated.span style={fadeInUpProps}>STYLISH HAVEN</animated.span>
        </animated.div>
        <animated.div className="circle" style={slideInProps}>
          <animated.span style={fadeInUpProps}>LUXURIOUS RETREAT</animated.span>
        </animated.div>
      </div>
    </div>
  );
}
