import React, { useRef, useState } from "react";
import "../styles/hf.css";
import { useForm, ValidationError } from "@formspree/react";
import { Modal } from "./Modal";

export function AppHeader() {
  // const { navScreen } = state;
  const [isNavDrower, setisNavDrower] = useState(false);
  return (
    <div className="hfA z-40">
      {/* <div className="hfAa" onClick={() => navScreen("/")} /> */}
      <a className="hfAa" href="/" />
      <div className="hfAb">
        <div className="hfAbA">
          About Us
          <div className="hfAbAa">
            {/* <div className="hfAbAaA" onClick={() => navScreen("/whyImpactEcosystem")}> */}
            <a href="/whyImpactEcosystem" className="hfAbAaA">
              Why Impact Ecosystem
            </a>
            {/* <div className="hfAbAaA" onClick={() => navScreen("/ourTeam")}> */}
            <a href="/ourTeam" className="hfAbAaA">
              Our Team
            </a>
            <a className="hfAbAaA" href="/career">
              Careers
            </a>
            {/* <div
              className="hfAbAaA"
              onClick={() =>
                window.open(
                  "https://medium.com/@impactecosystem/impact-ecosystem-react-native-dev-ec91c5b9272e",
                  "_blank"
                )
              }
            > */}
            {/* <a
              href="https://medium.com/@impactecosystem/impact-ecosystem-react-native-dev-ec91c5b9272e"
              className="hfAbAaA"
              target="_blank"
              rel="noreferrer"
            >
              Careers
            </a> */}
            {/* <div className="hfAbAaA" href="/">
              Community
            </div> */}
            <a href="/contactUs" className="hfAbAaA">
              Contact Us
            </a>
          </div>
        </div>
        {/* <a href="/ieMoneyWorks" className="hfAbA">
          IE Money */}
        {/* <div className="hfAbA">
          IE Money
          <div className="hfAbAa">
            
            <a className="hfAbAaA" href="/ieMoneyWorks">
              How IE Money Works
            </a>
          </div>
        </div> */}
        {/* </a> */}

        {/* <div className="hfAbA">
          Resources
          <div className="hfAbAa">
            <a className="hfAbAaA" href="/blogs">
              Blogs
            </a> */}

            {/* ------------ */}
            {/* <div className="hfAbAaA" onClick={() => navScreen("/")}>
              Case Studies
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              E-Books
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              Impact Stories
            </div> */}
            {/* -------------- */}
          {/* </div>
        </div> */}

        {/* Contest */}
        <div className="hfAbA">
          Events
          <div className="hfAbAa">
            <a href="/explore" className="hfAbAaA">
              Book A Meeting
            </a>
            <a className="hfAbAaA" href="contest">
              Upcoming Events
            </a>
            <a className="hfAbAaA" href="/contest">
              Green Grant Contest 2023
            </a>
            <a className="hfAbAaA" href="https://investinearthday.org/">
              Invest In Earth Day 
            </a>
          </div>
        </div>
        
        <div className="hfAbA">
        Philanthropy
          <div className="hfAbAa">
            <a href="/explore" className="hfAbAaA">
              NGOs
            </a>
            <a className="hfAbAaA" href="explore">
              Donors
            </a>
            <a className="hfAbAaA" href="/ieMoneyWorks">
              IE Money
            </a>
            <a className="hfAbAaA" href="/blogs">
             Resources
            </a>
            {/* <a className="hfAbAaA" href="/ieMoneyWorks">
             Impact Stories
            </a> */}
          </div>
        </div>
   
        <a
          href="explore"
          // target="_blank"
          // rel="noreferrer"
          className="hfAbB"
        >
          Get IE Money
        </a>

        {/* mobile nav */}
        <div className="hfAbC" onClick={() => setisNavDrower(!isNavDrower)}>
          {isNavDrower ? (
            <div className="hfAbCa">
              <div className="hfAbCaA">
                <b>About Us</b>
              </div>
              <div>
                <a className="hfAbAaA" href="/whyImpactEcosystem">
                  Why Impact Ecosystem
                </a>
              </div>
              <div>
                <a className="hfAbAaA" href="/ourTeam">
                  Our Team
                </a>
              </div>
              <div>
                <a className="hfAbAaA" href="/career">
                  Careers
                </a>
              </div>
              {/* <div
                className="hfAbAaA"
                onClick={() =>
                  window.open(
                    "https://medium.com/@impactecosystem/impact-ecosystem-react-native-dev-ec91c5b9272e",
                    "_blank"
                  )
                }
              >
                Careers
              </div> */}
              {/* <div className="hfAbAaA" onClick={() => navScreen("/")}>
                Community
              </div> */}
              <div>
                <a className="hfAbAaA" href="/contactUs">
                  Contact Us
                </a>
              </div>
              {/* ///////////////////////// */}
              <div className="hfAbCaA">
                <b>IE Money</b>
              </div>
              <a
                className="hfAbAaA"
                // onClick={() => navScreen("/contest")}
                href="/ieMoneyWorks"
              >
                How IE Works
              </a>
              {/* <a className="hfAbCaA" href="/ieMoneyWorks">
                <b>IE Money</b>
              </a> */}

              {/* contest */}
              <div className="hfAbCaA">
                <b>Events</b>
              </div>
              <div>
                <a
                  className="hfAbAaA"
                  // onClick={() => navScreen("/contest")}
                  href="/contest"
                >
                  Green Impact Contest
                </a>
              </div>
              {/* <div
                className="hfAbAaA"
                onClick={() => navScreen("/ieMoneyWorks")}
              >
                How IE Money Works
              </div>
              <div className="hfAbAaA" onClick={() => navScreen("/")}>
                Area Of Work
              </div>
              <div className="hfAbAaA" onClick={() => navScreen("/")}>
                Developer Tools
              </div> */}
              {/* ///////////////////////// */}
              <div className="hfAbCaA">
                <b>Resources</b>
              </div>
              <div>
                <a className="hfAbAaA" href="/blogs">
                  Blogs
                </a>
              </div>

              {/* ----------------- */}
              {/* <div className="hfAbAaA" onClick={() => navScreen("/")}>
                Case Studies
              </div>
              <div className="hfAbAaA" onClick={() => navScreen("/")}>
                E-Books
              </div>
              <div className="hfAbAaA" onClick={() => navScreen("/")}>
                Impact Stories
              </div> */}
              {/* ///////////////////////// */}
              <div
                className="hfAbCaA"
                onClick={() =>
                  window.open(
                    "https://investinearthday.org/apply/#tab1",
                    "_blank"
                  )
                }
              >
                <b>Grant Application</b>
              </div>
              {/* ///////////////////////// */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function AppFooter({ state }) {
  if (!state || !state.navScreen) {
    // Handle the case where state or navScreen is undefined
    return null;
  }
  const { navScreen } = state;
  return (
    <div  className="hfD">
      <div className="hfDa">
        <div className="hfDaA" id="footer">Subscribe to our newsletters</div>
        <div className="hfDaB">
          <input className="hfDaBa" placeholder="Email Address" />
          <div className="hfDaBb">Submit</div>
        </div>
      </div>
      <div className="hfDb">
        <div className="hfDbA">
      <div style={{display:'flex',flexDirection:'column'}}>
      <div className="hfDbAa" onClick={() => navScreen("/")} >
           
          </div>
          <div style={{color:'white',marginTop:"20px"}}>
             Powered by Impact Investments , Natural Capital<br/>
               and Team Humanity</div>
               <div style={{color:'white',marginTop:"20px"}}>
               Frisco, Colorado, USA<br/>
              </div> 
      </div>
            <div>
            <div className="hfDbAb">
              {/* <div className="hfDbAbA" onClick={() => navScreen("/")}>
                Home
              </div> */}
              <div className="hfDbAbB">&nbsp;</div>
              {/* <div className="hfDbAbC">FAQ's</div> */}
            </div>
            <div className="hfDbAb">
            <div className="hfDbAbA" onClick={() => navScreen("/")}>Home</div>
              <div className="hfDbAbB">Contact</div>
              {/* <div className="hfDbAbB">Risk Disclosure & Disclaimer</div> */}
              {/* <div className="hfDbAbC">Terms of use</div> */}
             
            </div>
            <div className="hfDbAb">
             <a href="/whyImpactEcosystem"><div className="hfDbAbA">About Us</div></a> 
              <div className="hfDbAbB">Resources</div>
              <div className="hfDbAbC">Privacy policy</div>
            </div>
          </div>
        </div>
        <div className="hfDbB">
          <div className="hfDbBa" onClick={() => {}} />
          <div
            className="hfDbBb"
            onClick={() => window.open("https://twitter.com/iemoneyhq")}
          />
          <div
            className="hfDbBc"
            onClick={() =>
              window.open("https://www.linkedin.com/company/impact-ecosystem/")
            }
          />
          <div
            className="hfDbBd"
            onClick={() => window.open("https://www.instagram.com/ie_money/")}
          />
          <div
            className="hfDbBe"
            onClick={() => window.open("https://impactecosystem.medium.com/")}
          />
        </div>
      </div>
    </div>
  );
}
