import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/cu.css";

export default class ContactUsScreen extends Component {
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
        <div className="cuA">
          <div className="cuAa">CONTACT US</div>
          <div className="cuAb">We love to hear from you.</div>
        </div>
        <div className="cuB">
          <div className="cuBa">
            <div className="cuBaA">
              <div className="cuBaAa">Reach us out at:</div> <span style={{color:"white"}}>hello@ie.money</span>
            </div>
          </div>
          <div className="cuBa">
            <div className="cuBaA">
              <div className="cuBaAa">Schedule a meeting</div>
              <a
                href="https://calendly.com/mattelston"
                target="_blank"
                rel="noreferrer"
                style={{color:"white"}}
              >
                https://calendly.com/mattelston
              </a>
            </div>
          </div>
        </div>

        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
