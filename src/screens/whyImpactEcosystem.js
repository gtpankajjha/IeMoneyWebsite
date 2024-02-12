import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/wi.css";
import { Card1, Card2 } from "../widgets/cards";
import WhyImpact from "../assets/whyimpact.png"

const cardsData = [
  {
    name: "Carbon",
    title: "Our carbon negative projects >",
    img: require("../assets/publicImg/why2.png"),
    desc: "To meet our commitment to be carbon negative by 2030, we’re improving efficiencies; delivering technology to help our customers report and reduce their carbon emissions more effectively; and breaking new ground with carbon removal purchases and investments to help develop the carbon removal markets.",
  },
  {
    name: "Water",
    title: "Our water conservation projects >",
    img: require("../assets/publicImg/why3.png"),
    desc: "To meet our commitment to be water positive by 2030, we will continue our water stewardship work across our operations. We're also expanding access to clean water and replenishment projects.",
  },
  {
    name: "Forestation",
    title: "Our carbon negative projects >",
    img: require("../assets/publicImg/why1.png"),
    desc: "To meet our commitment to be carbon negative by 2030, we’re improving efficiencies; delivering technology to help our customers report and reduce their carbon emissions more effectively; and breaking new ground with carbon removal purchases and investments to help develop the carbon removal markets.",
  },
  {
    name: "Ethical Sustainability",
    title: "Our Ethical projects >",
    img: require("../assets/publicImg/why3.png"),
    desc: "To meet our commitment to be water positive by 2030, we will continue our water stewardship work across our operations. We're also expanding access to clean water and replenishment projects.",
  },
];

const card2Data = {
  title: "How our modest actions are having an impact.",
  desc: "The impact of an individual on the world is often underestimated. Every decision we make affects the world around us. From volunteering at a local nonprofit to purchasing organic & regenerative food, every action we take makes a difference in  someone's life or to our shared home, Planet Earth.",
};

export default class WhyImpactEcosystem extends Component {
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
        <div className="wiA">
          <div className="wiAa">
            WE’RE BUILDING AN EQUITABLE PHILANTHROPIC CURRENCY POWERED BY IMPACT
            INVESTMENTS, NATURAL CAPITAL & TEAM HUMANITY
          </div>
        </div>
        <Card2 data={card2Data} />
        <div className="wiC" style={{backgroundColor:"black"}}>
          OUR ELECTRONIC VOUCHERS MAKE IT EASIER FOR NGOS, DAFS & FOUNDATIONS TO
          CONNECT WITH THEIR LOCAL COMMUNITIES AND TRANSPARENTLY INCREASE THE
          FLOW OF PHILANTHROPIC FUNDING WORLDWIDE.
        </div>
        <div className="wiD">
          <div className="wiDa">
            <img src={WhyImpact}/>
          </div>
          {/* <div className="wiDb_">
            <div className="wiDb">
              <div className="wiDbA">
                <div className="wiDbAa">Compassion</div>
                Compassion is the ability to empathize with those who are
                suffering, marginalize or less fortunate than ourselves. Not
                only should we feel motivated to help others out of the goodness
                of our hearts, but also the realization that our lifestyles have
                caused planetary damage that affects all humans.
              </div>
              <div className="wiDbA">
                <div className="wiDbAa">Integrity</div>
                Most human interactions, including Philanthropy and Impact
                Investing, benefit from integrity. This includes being honest,
                transparent, and accountable for the funds raised and how they
                are used to benefit people and planet.
              </div>
              <div className="wiDbA">
                <div className="wiDbAa">Collaboration</div>
                Working together with other organizations, community members,
                and stakeholders to achieve shared goals is a key ingredient to
                humanity's biggest success stories. This involves building
                strong relationships and partnerships, leveraging resources, and
                coordinating efforts to maximize positive impact.
              </div>
              <div className="wiDbA">
                <div className="wiDbAa">Impact</div>
                Impact Ecosystem strives to create measurable and less tangible
                outcomes that positively affect people and the planet we depend
                on for life. This requires careful analysis, planning,
                implementation, and evaluation of programs and projects in a
                holistic way.
              </div>
            </div>
          </div> */}
        </div>
        
        <div className="wiC" style={{backgroundColor:'black'}}>
          CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON A
          WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN CARBONIZING
          OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.
        </div>
        {/* <Card1 reverse data={cardsData[3]} /> */}
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
