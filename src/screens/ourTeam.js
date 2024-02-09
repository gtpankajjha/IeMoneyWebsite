import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import { Card2 } from "../widgets/cards";
import "../styles/ot.css";

const cardsData = {
  name: "From Our Founder",
  img: require("../assets/publicImg/why2.png"),
  desc: "The impact of an individual on the world is often underestimated. Every decision we make affects the world around us. From volunteering at a local nonprofit to purchasing organic & regenerative food, every action we take makes a difference in someone's life or to our home, Planet Earth.",
};

const card2Data = {
  title: "What binds us together ",
  desc: "Let’s dream and achieve together. Ambassadors for fairness and multiple perspectives, we see things from every angle, recognizing the importance of our efforts and working with diverse communities to create integrated solutions.",
};

const card2Data1 = {
  title: "Proud Assossiations",
  desc: "Collaborating with sustainable and charitable organizations is an excellent way for businesses to make a positive impact on the world. By partnering with these organizations, businesses can not only improve their social and environmental responsibility, but they can also gain valuable insights and support from the non-profit sector.",
};

const founders = [
  {
    name: "Matt Elston",
    position: "FOUNDER - IMPACT ECOSYSTEM",
    img: require("../assets/publicImg/men1.png"),
    words:
      "Stop the pollution, stop the damage: Let's heal the planet together.",
  },
  {
    name: "Manish Chandrashekar",
    position: "OPERATIONS HEAD",
    img: require("../assets/publicImg/men2.png"),
    words:
      "Every decision we make, no matter how small, has the potential to influence the world around us in a significant way",
  },
  {
    name: "Md. Shan'E Ali",
    position: "CREATIVE HEAD",
    img: require("../assets/publicImg/men3.png"),
    words:
      "Materialising unconventional concepts and redefining design processes",
  },
  {
    name: "Abhishek V",
    position: "BUSINESS DEVELOPMENT",
    img: require("../assets/publicImg/abhi.png"),
    words:
      "Investing in sustainability isn't just good for the planet; it's a strategic imperative for resilient and responsible business success in the future.",
  },
  // {
  //   name: "Karthikeya",
  //   position: "SOFTWARE DEVELOPER",
  //   img: require("../assets/publicImg/karthikeya.png"),
  //   words:
  //     "Empowering technology to combat climate change, where innovation becomes the catalyst for a sustainable tomorrow.",
  // },
];

const workers = [
  {
    name: "H. Mossini",
    position: "CEO - RENEWABLE ENERGY TRUST",
    img: require("../assets/publicImg/men1.png"),
    words:
      "Stop the pollution, stop the damage: Let's heal the planet together.",
  },
  {
    name: "M. Tahir",
    position: "CFO - RIDDI'ME COLLECTIVE",
    img: require("../assets/publicImg/men2.png"),
    words:
      "Think globally, act locally: Join the fight against climate change.",
  },
];

const partners = [
  require("../assets/publicImg/team1.png"),
  require("../assets/publicImg/team2.png"),
  require("../assets/publicImg/team3.png"),
  require("../assets/publicImg/team4.png"),
  require("../assets/publicImg/team5.png"),
];

export default class OurTeamScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ////////////////// SCREEN FUNCTION /////////////////////
      navScreen: props.navScreen,
    };
  }

  render() {
    const state = this.state;
    return (
      <StrictMode>
        <div className="otA">
          <div className="otAa">Our Team</div>
          <div className="otAb">
            WE’RE A GLOBAL TEAM OF THINKERS AND DOERS WITHOUT BOUNDARIES.
          </div>
        </div>
        <Card2 data={card2Data} />
        <div className="otD">
          {founders.map((it, k) => (
            <div className="otDa" key={k}>
              <div
                className="otDaA"
                style={{ backgroundImage: `url(${it?.img})` }}
              ></div>
              <div className="otDaB uppercase" style={{color:'white'}}>{it?.name}</div>
              <div className="otDaC uppercase" style={{color:'white'}}>{it?.position}</div>
              <div className="otDaD" style={{color:'white'}}>{it?.words}</div>
            </div>
          ))}
        </div>
        <div className="otE">
          <div className="otEa" style={{color:'white'}}>Our purpose</div>
          <div className="otEb">
            OUR AMBITIOUS TEAM OF FORWARD THINKING PHILANTHROPISTS, DYNAMIC
            DEVELOPERS, DATA GURUS, FINANCE INNOVATORS AND CREATIVES ARE HERE TO
            LEVEL THE CAUSE, HELPING US BUILD MONEY WITH MEANING FOR BETTER
            TOMORROW.
          </div>
        </div>
        {/* proud association */}
        {/* <Card2 data={card2Data1} /> */}
        {/* <div className="otD">
          {workers.map((it, k) => (
            <div className="otDa" key={k}>
              <div
                className="otDaA"
                style={{
                  backgroundImage: `url(${it?.img})`,
                  width: 120,
                  height: 120,
                }}
              ></div>
              <div className="otDaB">{it?.name}</div>
              <div className="otDaC">{it?.position}</div>
              <div className="otDaD">{it?.words}</div>
            </div>
          ))}
        </div> */}
        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}
        <div className="otG">
          <div className="otGa" />
          <div className="otGb">
            <div className="otGbA" style={{color:'white'}}>From Our Founder</div>
            <div className="otGbB"></div>
            <div className="otGbC" style={{color:'white'}}>
              The impact of an individual on the world is often underestimated.
              Every decision we make, no matter how small, has the potential to
              influence the world around us in a significant way. From choosing
              to recycle a plastic bottle to volunteering at a local charity,
              every action we take has the potential to make a positive
              difference in someone's life or to the environment.
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}
        <div className="otH">
          <div className="otHa">JOIN OUR TEAM</div>
          <div className="otHb" style={{color:'white'}}>
            Get your career moving, be part of something bigger than you or us,
            be a change maker.
          </div>
          <a
            className="otHc"
            href="/career"
            // onClick={() =>
            //   window.open(
            //     "https://medium.com/@impactecosystem/impact-ecosystem-react-native-dev-ec91c5b9272e",
            //     "_blank"
            //   )
            // }
          >
            See career opportunities
          </a>
        </div>
        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}
        {/* <div className="otI">
          {partners.map((it, k) => (
            <img className="otIa" src={it} key={k} />
          ))}
        </div> */}
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
