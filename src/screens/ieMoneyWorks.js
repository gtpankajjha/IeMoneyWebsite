import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/ie.css";
import { Card1, Card2 } from "../widgets/cards";

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

export default class IeMoneyWorksScreen extends Component {
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
        <div style={{backgroundColor:'black'}}>
        <div className="ieA" ></div>
        {/* /////////////////////////////////////////////////// */}
        {/* <Card2 data={card2Data} /> */}
        <div className="cdE">
          <div className="cdEa">
            <div className="cdEaA" />
            <div className="cdEaB">Why Community Currencies?</div>
          </div>
          <div className="cdEb text-xs tracking-widest leading-6" style={{color:'white'}}>
            Access to currency empowers individuals and families to make local
            purchases they might have deferred otherwise. Whether it’s covering
            immediate bills, investing in home improvements, or supporting local
            businesses, these funds create a ripple effect that benefits
            everyone. When people have the means to spend, local enterprises
            thrive, increasing demand for goods and services, and, in turn,
            creating job opportunities. <br /> <br />
            Furthermore, local spending can strengthen community bonds. As
            businesses flourish, they often give back to the communities that
            support them through sponsorships, donations, and job creation.
            Stronger local economies can lead to enhanced infrastructure,
            improved educational opportunities, shorter supply chains, increased
            resiliency and a higher quality of life for all residents. By
            nurturing purchasing power, we empower individuals and strengthen
            the very foundations of the places we call home.
          </div>
        </div>

        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieB">
          <div className="ieBaA">
            <div className="text-sm text-center" style={{color:'white'}}>
              Impact Ecosystem helps Communities implement their own currency
              designed to achieve local goals, resilience and prosperity.
            </div>
            <div className="ieBaAa" />
            <div className="ieBaAb">DISTRIBUTION</div>
            <div className="ie_text">STAKEHOLDERS</div>
            <div className="ie_text">IMPACT INVESTORS</div>
            <div className="ie_text">NATURAL ASSET OWNERS</div>
            <div className="ie_text">NONPROFITS</div>
          </div>
          <div className="ieBaA">
            <div className="text-sm text-center" style={{color:'white'}}>
              An example of how your community currency could work.
            </div>
            <div className="ieBaAa_1" />
            <div className="ieBaAb" >CIRCULATION</div>
            <div className="ie_text" >PURCHASES</div>
            <div className="ie_text">LOYALTY POINTS</div>
            <div className="ie_text">REWARDS</div>
            <div className="ie_text">NONPROFITS</div>
          </div>
          <div className="ieBaA">
            <div className="text-sm text-center" style={{color:'white'}}>
              An example of how your community currency could be redeemed.
            </div>
            <div className="ieBaAa_2" />
            <div className="ieBaAb">REDEEM</div>
            <div className="ie_text">REDEEM TO USD</div>
            <div className="ie_text">TRANSFER</div>
            <div className="ie_text">MERCHANT PAYMENT</div>
            <div className="ie_text">DONATE</div>
          </div>
        </div>

        {/* HOw it works */}
        <div className="hmH">
          <div className="hmHa">HOW IE WORKS</div>

          <div className="hmHc">
            <div className="hmHcA">1.</div>
            <div className="hmHcB">
              Impact Ecosystem helps Communities implement their own currency
              designed to achieve local goals, and economic resiliency.
            </div>
          </div>

          <div className="hmHc">
            <div className="hmHcA">2.</div>
            <div className="hmHcB">
              There are numerous ways your community currency can be distributed
              to residents and other stakeholders.
            </div>
          </div>

          <div className="hmHc">
            <div className="hmHcA">3.</div>
            <div className="hmHcB">
              Like gift cards, loyalty points and government currency, value can
              be:
              <div className="hmHcBb">
                <div className="hmHcBbA">
                  <div className="hmHcBbAa" />
                  USED FOR <br />
                  PURCHASES
                </div>
                <div className="hmHcBbA">
                  <div className="hmHcBbAa" />
                  TRANSFERRED/
                  <br />
                  GIFTED/DONATED
                </div>
                <div className="hmHcBbA">
                  <div className="hmHcBbAa" />
                  GIVEN AS A REWARD
                  <br />
                  TO INCENTIVIZE
                </div>
              </div>
            </div>
          </div>
          <div className="hmHc">
            <div className="hmHcA">4.</div>
            <div className="hmHcB">
              Merchants & Ecosystem Partners who accept your community currency
              as payment can redeem it for government fiat currency like $USD or
              spend/transfer/gift/donate within your community.
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* <div className="ieC">
          <div className="ieCa">
            <div className="ieCaA">1. DISTRIBUTION</div>
            <div className="ieCaB">
              IE point tokens are distributed to Ecosystem Service Stakeholders,
              Impact Investors, Natural Asset Owners & Nonprofits.
            </div>
          </div>
          <div className="ieCa">
            <div className="ieCaA">2. CIRCULATION</div>
            <div className="ieCaB">
              Like gift cards, loyalty points and government currency, value can
              be:
              <div className="ieCaBa">
                <div className="ieCaBaA">
                  <div className="ieCaBaAa" />
                  <div className="ieCaBaAb">USED FOR PURCHASES</div>
                </div>
                <div className="ieCaBaA">
                  <div className="ieCaBaAa" />
                  <div className="ieCaBaAb">TRANSFERRED/ GIFTED/ DONATED</div>
                </div>
                <div className="ieCaBaA">
                  <div className="ieCaBaAa" />
                  <div className="ieCaBaAb">
                    GIVEN AS A REWARD TO INCENTIVIZE
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ieCa">
            <div className="ieCaA">3. REDEEM</div>
            <div className="ieCaB">
              Merchants & Ecosystem Partners who accept ie.Money as payment can
              redeem ie.Money for local currency like $USD OR
              spend/transfer/gift/donate within the Impact Ecosystem.
            </div>
          </div>
        </div> */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* <div className="ieD">
          <div className="ieDa">OUR AREA OF FOCUS</div>
          <div className="ieDb">
            We are committed to create a sustainable approach is that takes into
            account the social, environmental, and economic impacts of its
            operations and seeks to create long-term value for all stakeholders,
            including shareholders, employees, customers, and the broader
            community. This approach involves integrating sustainability
            considerations into every aspect of the business, from product
            design and supply chain management to marketing and communications.
          </div>
        </div> */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* <Card1 data={cardsData[0]} /> */}
        {/* <div className="ieE">
          “CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON
          A WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN
          CARBONIZING OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.”
        </div> */}
        {/* <Card1 reverse data={cardsData[1]} /> */}
        {/* <Card1 data={cardsData[2]} /> */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* <div className="ieE">
          “CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON
          A WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN
          CARBONIZING OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.”
        </div> */}
        {/* <Card1 reverse data={cardsData[3]} /> */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieF">
          <div className="ieFa">CONTACT US FOR MORE INFORMATION.</div>
          {/* <div className="ieFb">
            Be part of something bigger than you or us, be a change maker.
          </div> */}
          <div className="ieFb"></div>
          <a className="ieFc" href="/contactUs">
            Contact Us
          </a>
          {/* <div
            className="ieFc"
            onClick={() =>
              window.open(
                "https://medium.com/@impactecosystem/impact-ecosystem-react-native-dev-ec91c5b9272e",
                "_blank"
              )
            }
          >
            See career opportunities
          </div> */}
        </div>
        <AppFooter state={state} />
        <AppHeader state={state} />
        </div>
      </StrictMode>
    );
  }
}
