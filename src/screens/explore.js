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
      <div className="hmBa"></div>
        <br />
        <div className="hmBb_holder">
        <div className="text-overlay on_video_container">
            <a className="ex_logo" href="/" />
              <div><h1 className="on_video_text">Are you looking for better fundraising tool which<br/> empower Nonprofits and Philanthropists for a<br/> Greater Impact?</h1></div>
            <a
            
          target="_blank"
          rel="noreferrer"
          className="ex_buton"
          onClick={this.handleBookMeetingClick}
        >
          Book a meeting
        </a>
        </div>
          <div >
            <video autoPlay loop muted className="hmBa">
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
       <div style={{color:'white',fontSize:'42px'}}>Amplifying Donations with Appreciated Assets</div>
       {/* need space in between this text and image */}
       <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'3%',width:'80%',justifyContent:'space-around'}}>
       <div style={{color:'white',flex:2,marginTop:'5%'}}>
        At Impact ecosystem, we believe in turning assets into impact.<br/>
         Accept appreciated assets, such as stocks and<br/> cryptocurrencies,
          and unlock a new realm of generosity.<br/> 
          Your donors can contribute in ways that resonate with them<br/> 
          while elevating the reach of your cause.
        </div>
        <div style={{flex:1,marginTop:'3%'}} >
        <img src={yourImage} alt="Your Alt Text" />
        </div>
       </div>
       
<div style={{color:'#437B40',fontSize:'32px',textAlign:'center',marginTop:'3%'}}>
  Are you allowing your donors to minimise tax deductions<br/> 
  and maximise impact?</div>     
      </div>
      {/* <Container2 /> */}
     
      <div className="ie-container">
       <div style={{color:'white',fontSize:'42px'}}>Sustain Impact with Recurring Donations</div>
       {/* need space in between this text and image */}
       <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'3%',width:'80%',justifyContent:'space-around'}}>
       <div style={{color:'white',flex:2,marginTop:'5%'}}>
       Discover the power of continuous support. We enable<br/>
       automatic and recurring donations that provide stability for your<br/>organization.<br/><br/>
       Cultivate lasting relationships with donors who are committed to<br/> 
       your cause, ensuring sustained impact over time<br/> 
         
        </div>
        <div style={{flex:1,marginTop:'3%'}} >
        <img src={group} alt="Your Alt Text" />
        </div>
       </div>
       
<div style={{color:'#437B40',fontSize:'32px',textAlign:'center',marginTop:'3%'}}>
  Do you want automatic recurring donations?</div>     
      </div>      
    

      {/* container 3 */}

      <div className="ie-container">
       <div style={{color:'white',fontSize:'42px',textAlign:'center'}}>Strategic Use of Balance Sheet for<br/> Mission Advancement</div>
       {/* need space in between this text and image */}
       <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'3%',width:'80%',justifyContent:'space-around'}}>
       <div style={{color:'white',flex:2,marginTop:'5%'}}>
       Optimize your organization’s balance sheet for greater mission<br/>
       ulfillment. Donor Coin empowers you to leverage investable<br/> assets strategically, aligning financial strength with the<br/> 
       advancement of your mission. <br/><br/> 
       Explore innovative avenues to fund your cause without <br/>compromising financial stability.
        </div>
        <div style={{flex:1,marginTop:'3%'}} >
        <img src={office} alt="Your Alt Text" />
        </div>
       </div>
       
<div style={{color:'#437B40',fontSize:'32px',textAlign:'center',marginTop:'3%'}}>
Are your investible assets promoting your<br/> philanthropic missions?</div>     
      </div>

      <div className="otH">
          <div className="otHd" id="attend">How we can help you get it all?</div>
          <div>
          <a href="https://calendly.com/abhishek-iemoney/30min" >
          <div className="otHa" style={{color:'#09C700'}}>
          ATTEND A CALL TO LEARN MORE AND RECIEVE<br/> $5000 WORTH DONATIONS
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
           Schedule a call on Calandly <img src={arrow}/>
          </a>
          </div>
        </div>
      
      <AppFooter state={state} />
      <AppHeader state={state} />
    </StrictMode>
    );
  }
}
