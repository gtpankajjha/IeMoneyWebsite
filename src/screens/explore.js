import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/ex.css";
import "../styles/hm.css";
import "../styles/ot.css";
import { Card1, Card2 } from "../widgets/cards";
import bgVedio from "../assets/Video/pexels_videos.mp4";
import yourImage from "../assets/Prancheta.png"
import group from "../assets/group.png"
import office from "../assets/office.png"
import arrow from "../assets/arrow.png"

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

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ////////////////// SCREEN FUNCTION /////////////////////
      navScreen: props.navScreen,
    };
    this.handleBookMeetingClick = this.handleBookMeetingClick.bind(this);
  }
  handleBookMeetingClick() {
    const attendElement = document.getElementById("attend");
    if (attendElement) {
      attendElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  render() {
    const state = this.state;
    return (
      <StrictMode>
      <div className="hmB">
      <div className="exBa"></div>
        <br />
        <div className="exe_holder">
        <div className="text-overlay on_video_container">
            <a className="ex_logo" href="/" />
              <div className="on_video_text">
                <h1 style={{color:'white',textAlign:'center',font: 'normal normal 500 36px/68px Montserrat'}} >The Ultimate In Next-Gen Giving
                <br/><span style={{color:'white',textAlign:'center',fontSize:'14px',font: 'normal normal 500 16px/68px Montserrat'}}>Turning cash donations into appreciated assets</span>
                </h1>
              
              </div>
            <a
            
          target="_blank"
          rel="noreferrer"
          className="ex_button"
          onClick={this.handleBookMeetingClick}
        >
          Book a meeting
        </a>
        </div>
          <div >
            <video autoPlay loop muted className="ex_video">
              <source src={bgVedio} type="video/mp4" />
            </video>
            </div>
         
        </div>
        <div className="hmBc" />
        {/* <a href="#iemoney">
          <BsFillArrowDownCircleFill className="hmBc bounce" />
        </a> */}
      </div>

      
      {/* //////////////////////////////////////////////////////////////// */}
      <div className="ie-flex">
       <div className="ex_header">Amplifying Donations with Appreciated Assets</div>
       {/* need space in between this text and image */}
       <div className="ex_text_holder">
       <div className="ex_title">
       At Impact Ecosystem, we believe in turning networks, assets,<br/>
      and money into impact. Appreciated assets unlock a new realm<br/>
      of generosity and potential tax benefits.<br/> <br/>
      Donor Money turns cash donations into appreciated assets<br/>
       amplifying the impact of your NGO.
        </div>
        <div style={{flex:1,marginTop:'3%'}} >
        <img src={yourImage} alt="Your Alt Text" />
        </div>
       </div>
       
<div className="ex_summary">
Are you allowing your donors to maximise tax deductions<br/> and their philanthropic impact?</div>     
      </div>
      {/* <Container2 /> */}
     
      <div className="ie-container">
       <div className="ex_header">Sustain Impact with Recurring Donations</div>
       {/* need space in between this text and image */}
       <div className="ex_text_holder">
       <div className="ex_title">
       Discover the power of continuous support. Automatic and<br/>
        recurring donations provide stability for your organization.<br/><br/>
        Cultivate lasting relationships with donors who are committed to<br/>
        your cause, ensuring sustained impact over time.<br/> 
         
        </div>
        <div style={{flex:1,marginTop:'3%'}} >
        <img src={group} alt="Your Alt Text" />
        </div>
       </div>
       
<div className="ex_summary">
  Do you want automatic recurring donations?</div>     
      </div>      
    

      {/* container 3 */}

      <div className="ie-container">
       <div className="ex_header">Strategic Use of Balance Sheet for<br/> Mission Advancement</div>
       {/* need space in between this text and image */}
       <div className="ex_text_holder">
       <div className="ex_title">
       Optimize your organization’s balance sheet for greater mission<br/>
       Fulfillment. Donor Coin empowers you to leverage investable<br/> assets strategically, aligning financial strength with the<br/> 
       advancement of your mission. <br/><br/> 
       Explore innovative avenues to fund your cause without <br/>compromising financial stability.
        </div>
        <div style={{flex:1,marginTop:'3%'}} >
        <img src={office} alt="Your Alt Text" />
        </div>
       </div>
       
<div className="ex_summary">
Are your investible assets promoting your<br/> philanthropic missions?</div>     
      </div>

      <div className="otH">
          <div className="otHd" id="attend">How we can help you get it all?</div>
          <div>
          <a href="https://calendly.com/abhishek-iemoney/30min" >
          <div className="otHa" style={{color:'#09C700'}}>
          SCHEDULE A CALL TO LEARN MORE AND<br/>
          BECOME ELIGIBLE FOR A GRANT WORTH UP <br/>TO $100,000 FOR YOUR NGO
          </div>
          </a>
          <a
            className="otHe"
            href="/career"
            onClick={() =>
              window.open(
                "https://medium.com/@impactecosystem/impact-ecosystem-react-native-dev-ec91c5b9272e",
                "_blank"
              )
            }
          >
           Schedule a call with us <img src={arrow}/>
          </a>
          </div>
        </div>
      
      <AppFooter state={state} />
      <AppHeader state={state} />
    </StrictMode>
    );
  }
}
