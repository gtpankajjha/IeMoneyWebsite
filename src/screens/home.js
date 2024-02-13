import React, { Component, StrictMode, useRef, useState } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/hm.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import bgVedio from "../assets/background/bg1.mp4";
import bgVedioImg from "../assets/background/home-bg-img.png";
import banner from "../assets/banner.png";
import bannerMobile from "../assets/banner-mobile.png";
import surveyBtn from "../assets/survey-button.png";
import FINAL_1 from "../assets/Video/FINAL_1.mp4"
import Woman from "../assets/Video/woman.mp4"
import star_icon from "../assets/icons/star_icon.png"
import ethos1 from "../assets/image/ethos1.png"
import ethos2 from "../assets/image/ethos2.png"
import ethos3 from "../assets/image/ethos3.png"
import ethos4 from "../assets/image/ethos4.png"
import etho_icon1 from "../assets/image/etho_icon1.png"
import etho_icon2 from "../assets/image/etho_icon2.png"
import etho_icon3 from "../assets/image/etho_icon3.png"
import etho_icon4 from "../assets/image/etho_icon4.png"

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ////////////////// SCREEN FUNCTION /////////////////////
      navScreen: props.navScreen,
      isVideoLoaded: false,
      showAppFooter: false,
    };
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    const hmCElement = document.querySelector('.hmC');

    if (hmCElement && scrollPosition >= hmCElement.offsetTop) {
      this.setState({ showAppFooter: true });
    } else {
      this.setState({ showAppFooter: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const state = this.state;
    // const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const onLoadedData = () => {
      state.isVideoLoaded = true;
    };

    return (
      <StrictMode>
        <div className="hmB">
        <div className="hmBa">
        <div className="hmBb">
            <div className="hmBb_holder">
              <a href="/whyImpactEcosystem"><div className="hmba-text" ><span>About Us</span></div></a>
              <a href="ieMoneyWorks"><div className="hmba-text" >IE Money</div></a>
              <a href="explore"><div className="hmba-text" >Book A Meeting</div></a>
            </div>
            {/* <div > */}
              <video autoPlay loop muted className="hmBab">
                <source src={FINAL_1} type="video/mp4" />
              </video>
              {/* </div> */}
            <div className="hmBb_holder">
            <a href="contest"><div className="hmba-text-second">Philanthropy</div></a>
            <a href="contest"> <div className="hmba-text-second" href="/contest">Events</div></a>
            <a href="whyImpactEcosystem"><div className="hmba-text-second">Why Impact Ecosystem</div></a> 
            </div>
          </div>
        </div>
          <br />
         
          <a href="#footer">
          <div className="hmBc" />
          </a>
          {/* <a href="#iemoney">
            <BsFillArrowDownCircleFill className="hmBc bounce" />
          </a> */}
        </div>

        {this.state.showAppFooter && <AppHeader state={this.state} />}
        {/* //////////////////////////////////////////////////////////////// */}
        <div className="hmC">
          {/* <div className="hmCa">Introducing</div>
          <div className="hmCb">IE.Money</div> */}
          <div className="hmCc">
          {`A Holistic Solution Including Non-Profit
          Grants,Community Currency, Regenerative 
          Product Discounts, And Rewards For 
          Ecosystem Services & Impact Investments`}
          </div>
          <div className="backimage rotate-image"  >
            {/* <img src="../assets/background/bg11.png" 
          style={{height:'297px',width:'297px'}}
          /> */}
          </div>
          {/* <div className="hmCd">Join The Waitlist</div> */}
        </div>
        {/* <Container3 /> */}
        <Container4 />
        <Container6 />
        <Container5 state={state} />
        <AppFooter state={state}  id="footer"/>
        {/* <AppHeader state={state} /> */}
      </StrictMode>
    );
  }
}

function Container3() {
  const myRef = useRef(null);
  const [right1, setRight1] = useState();
  const [right2, setRight2] = useState();
  const [right3, setRight3] = useState();
  const [right4, setRight4] = useState();

  const executeScroll1 = () => {
    const left = myRef.current.scrollLeft + 680;
    myRef.current.scrollTo({ left, behavior: "smooth" });
    setRight1(!right1);
  };

  const executeRightScroll1 = () => {
    const left = myRef.current.scrollLeft - 680;
    myRef.current.scrollTo({ left, behavior: "smooth" });
    setRight1(!right1);
  };

  const executeScroll2 = () => {
    const left = myRef.current.scrollLeft + 680;
    myRef.current.scrollTo({ left, behavior: "smooth" });
    setRight2(!right2);
  };

  const executeRightScroll2 = () => {
    const left = myRef.current.scrollLeft - 680;
    myRef.current.scrollTo({ left, behavior: "smooth" });
    setRight2(!right2);
  };

  const executeScroll3 = () => {
    const left = myRef.current.scrollLeft + 680;
    myRef.current.scrollTo({ left, behavior: "smooth" });
    setRight3(!right3);
  };

  const executeRightScroll3 = () => {
    const left = myRef.current.scrollLeft - 680;
    myRef.current.scrollTo({ left, behavior: "smooth" });
    setRight3(!right3);
  };

  const executeScroll4 = () => {
    const left = myRef.current.scrollLeft + 680;
    myRef.current.scrollTo({ left, behavior: "smooth" });
    setRight4(!right4);
  };

  const executeRightScroll4 = () => {
    const left = myRef.current.scrollLeft - 680;
    myRef.current.scrollTo({ left, behavior: "smooth" });
    setRight4(!right4);
  };

  return (
    <div className="hmE" ref={myRef}>
      <div className="hmEa">
        <div className="hmEaA">PEOPLE PLANET PROSPERITY</div>
        <div className="hmEaB">
          Impact Ecosystem brings together businesses, communities, government,
          individuals, NGOs and mother nature to achieve mutual prosperity.
        </div>
      </div>

      <div className="hmEb c10">
        <div className="hmEbA">
          <div className="hmEbAa">01</div>
          {right1 ? (
            <div className="rightArrow" onClick={executeRightScroll1} />
          ) : (
            <div className="hmEbAb" onClick={executeScroll1} />
          )}

          {/* <div className="hmEbAb" onClick={executeScroll} /> */}
          {/* <div className="rightArrow" onClick={executeRightScroll} /> */}
        </div>

        <div className="hmEbB">
          <div className="hmEbBa">Bring A Smile</div>
          <div className="hmEbBb">
            Human health and happiness are central to our mission!
          </div>
        </div>
      </div>
      <div className="hmEb c11">
        <div className="hmEbA">
          <div className="hmEbAa">02</div>
          {right2 ? (
            <div className="rightArrow" onClick={executeRightScroll2} />
          ) : (
            <div className="hmEbAb" onClick={executeScroll2} />
          )}
          {/* <div className="hmEbAb" onClick={executeScroll} /> */}
          {/* <div className="rightArrow" onClick={executeRightScroll} /> */}
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Regenerative Economy</div>
          <div className="hmEbBb">
            Making the world a better place for future generations not only
            gives our lives meaning, purpose and ethical value but also provides
            economic, health and social benefits.
          </div>
        </div>
      </div>
      <div className="hmEb c12">
        <div className="hmEbA">
          <div className="hmEbAa">03</div>
          {right3 ? (
            <div className="rightArrow" onClick={executeRightScroll3} />
          ) : (
            <div className="hmEbAb" onClick={executeScroll3} />
          )}
          {/* <div className="hmEbAb" onClick={executeScroll} /> */}
          {/* <div className="rightArrow" onClick={executeRightScroll} /> */}
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Preserve Biodiversity</div>
          <div className="hmEbBb">
            Nature isn't just nice to look at, it is essential for food
            production, a thriving economy and human survival
          </div>
        </div>
      </div>
      <div className="hmEb c13">
        <div className="hmEbA">
          <div className="hmEbAa">04</div>
          {/* {right4 ? (
            <div className="rightArrow" onClick={executeRightScroll4} />
          ) : (
            <div className="hmEbAb" onClick={executeScroll4} />
          )} */}
          {/* <div className="hmEbAb" onClick={executeScroll} /> */}
          <div className="rightArrow" onClick={executeRightScroll4} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Empower Communities</div>
          <div className="hmEbBb">
            {/* Human have been the most ingenious and social species on the planet.
            While we are far from perfect, our ability to share, cooperate,
            learn from and help each other are the keys for us to prospor in the
            short loang run. */}
            Humans, as an ingenious and social species, thrive through sharing,
            cooperating, and helping each other, leading to prosperity in the
            long run.
          </div>
        </div>
      </div>
    </div>
  );
}

// function Container4() {
//   return (
//     <div className="hmG">
//       <div className="hmGa">The Philanthropic Currency</div>
//       <div className="hmGb">
//         powered by Impact Investments, Natural Capital & Team Humanity
//       </div>
//     </div>
//   );
// }

function Container4() {
  return (
    <div className="main-container" >
    <div className="main-box">
    <div className="column-container">
        <div className="column-box blue">The Philanthropic<br/> Currency</div>
        <div className="column-box orange">
          <div  className="learn_more">LEARN MORE AND RECIEVE $5000<br/> WORTH DONATIONS</div>
       <a href="explore">
       <div style={{color:'white',width:'250px',border:'2px solid #6E8833',borderRadius:'30px',textAlign:'center',padding:'10px',marginTop:'20px'}}>EXPLORE</div>
       </a>
        </div>
      </div>
      <video autoPlay loop muted  className="women_vid">
                <source src={Woman} type="video/mp4" />
              </video> 
    </div>
  </div>
  );
}

function Container5({ state }) {
  const cardData = [
    {
      id: 1,
      backgroundImage: ethos1,
      heading: "Compassion",
      summary: "Our first core value is compassion, which is the ability to empathize with those who are less fortunate and marginalised than us. It involves recognizing the suffering and struggles of others and feeling motivated to help them in any way possible.",
      image: etho_icon1,
    },
    {
      id: 2,
      backgroundImage:ethos2,
      heading: "Integrity",
      summary: "The second core value of charity donation projects is integrity, which refers to the adherence to a set of moral and ethical principles. This includes being honest, transparent, and accountable for the funds raised and how they are used to make our planet and people better.",
      image: etho_icon2,
    },
    {
      id: 3,
      backgroundImage:ethos3,
      heading: "Collaboration",
      summary: "Collaboration refers to working together with other organizations, community members, and stakeholders to achieve shared goals. This involves building strong relationships and partnerships, leveraging resources, and coordinating efforts to maximize the impact of the charity's work.",
      image: etho_icon3,
    },
    {
      id: 4,
      backgroundImage:ethos4,
      heading: "Impact",
      summary: "As our organization's name suggests, Impact involves creating tangible, measurable outcomes that positively affect the lives of those in need. This requires careful planning, implementation, and evaluation of the programs and projects supported by the charity.",
      image: etho_icon4,
    },
    // Add more card data as needed
  ];
  const { navScreen } = state;
  return (
    <div className="hmH">
      {/* HOw it works */}
      <div className="hmHa"></div>

       <div className="hmHc">
        
        <div className="hmHab">
        Impact-driven individuals, businesses, and organizations
       make a positive difference around the world. Diverse yet unified by a commitment
        to social, environmental, and economic progress, we foster collaborations among 
        visionary entrepreneurs, sustainability experts, and grassroots initiatives. 
        Together, we ignite ideas, craft solutions, and navigate global challenges,
         driven by a shared passion for positive change. From innovative pioneers to
          community champions, each brings unique strengths, fuelling a vibrant community
           where creativity sparks innovation. We are weaving a collective fabric of resilience,
            innovation, and compassion. Together we strive
       for a future where impactful change resonates across all layers of society.
        </div>
      </div>

      <div className="hmHaba">Our Ethos</div>
      <div className="card-container">
       {cardData.map((item)=> {
        return(
        <div className="card">
        <div className="card-background" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
          <img src={item.image} alt="Card Image" className="card-image rotate-image" />
          <div >
            <h3 className="card-content">{item.heading}</h3>
            <p className="card-summary-text">{item.summary}</p>
          </div>
        </div>
      </div>)
       })}
       </div>

{/* 
      <div className="hmHc">
        <div className="hmHcA">2.</div>
        <div className="hmHcB">
          There are numerous ways your community currency can be distributed to
          residents and other stakeholders.
        </div>
      </div>

      <div className="hmHc">
        <div className="hmHcA">3.</div>
        <div className="hmHcB">
          Like gift cards, loyalty points and government currency, value can be:
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
          Merchants & Ecosystem Partners who accept your community currency as
          payment can redeem it for government fiat currency like $USD OR
          spend/transfer/gift/donate within your community.
        </div>
      </div> */}

      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* <div className="hmHa">OUR NETWORK</div> */}
      <div className="hmHd">
        {/* <div className="hmHdA c20" onClick={() => navScreen("/networks")}> */}
        <a href="/individuals-networks" className="hmHdA c20">
          {/* <div className="hmHdA c20"> */}
          <div className="hmHdAa">INDIVIDUALS</div>
          {/* </div> */}
        </a>

        {/* <div className="hmHdA c21" onClick={() => navScreen("/networks")}> */}
        <a href="/ngos-networks" className="hmHdA c21">
          {/* <div className="hmHdA c21"> */}
          <div className="hmHdAa">NGOs AND NON PROFIT ORGANIZATION</div>
          {/* </div> */}
        </a>

        {/* <div className="hmHdA c22" onClick={() => navScreen("/networks")}> */}
        <a href="/land-owners-networks" className="hmHdA c22">
          {/* <div className="hmHdA c22"> */}
          <div className="hmHdAa">
            LANDOWNERS-ENVIRONMENTAL SERVICE PROVIDERS
          </div>
          {/* </div> */}
        </a>

        <a href="/impact-investors-networks" className="hmHdA c23">
          {/* <div className="hmHdA c23"> */}
          <div className="hmHdAa">IMPACT INVESTORS</div>
          {/* </div> */}
        </a>

        <a href="/business-networks" className="hmHdA c24">
          {/* <div className="hmHdA c24"> */}
          <div className="hmHdAa">BUSINESSES</div>
          {/* </div> */}
        </a>

        <a href="/environmental-accountants-networks" className="hmHdA c25">
          {/* <div className="hmHdA c25"> */}
          <div className="hmHdAa">ENVIRONMENTAL ACCOUNTANTS</div>
          {/* </div> */}
        </a>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* <div className="hmHa">BLOGS</div>
      <div className="hmHe">
        <div className="hmHeA">
          <div className="hmHeAa">
            <div className="hmHeAaA" />
            <div className="hmHeAaB">Paul Sheparo</div>
            <div className="hmHeAaC">29 Aug 2022</div>
          </div>
          <div className="hmHeAb"></div>
          <div className="hmHeAc">Forestation in Nepal</div>
          <div className="hmHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
        <div className="hmHeA">
          <div className="hmHeAa">
            <div className="hmHeAaA" />
            <div className="hmHeAaB">Paul Sheparo</div>
            <div className="hmHeAaC">29 Aug 2022</div>
          </div>
          <div className="hmHeAb"></div>
          <div className="hmHeAc">Forestation in Nepal</div>
          <div className="hmHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
        <div className="hmHeA">
          <div className="hmHeAa">
            <div className="hmHeAaA" />
            <div className="hmHeAaB">Paul Sheparo</div>
            <div className="hmHeAaC">29 Aug 2022</div>
          </div>
          <div className="hmHeAb"></div>
          <div className="hmHeAc">Forestation in Nepal</div>
          <div className="hmHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
      </div> */}
      <div className="hmHf">WHERE DO YOU FIT INTO THIS POWERFUL NETWORK?</div>
    </div>
  );
}

function Container6() {
  const myRef = useRef(null);
  const executeScroll = () => {
    const left = myRef.current.scrollLeft + 880;
    myRef.current.scrollTo({ left, behavior: "smooth" });
  };
  return (
    <div className="hmE hmeab" ref={myRef} >
      <div style={{ gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 3, backgroundColor: '#C9E6C7', borderRadius: '10px', width: '100%' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20%', paddingLeft: '10px' }}>
          <span style={{
            textAlign: 'left',
            font: 'normal normal 600 56px/68px Montserrat',
            letterSpacing: '-1.12px',
            color: '#262626',
            opacity: 1,
            marginTop:'110px'
          }}>
            <img src={star_icon} className="rotate-image" style={{height:'60px',width:'60px'}}/>
          </span>
          <p style={{fontSize:'26px',fontWeight:'bold'}}>What inspires us?</p>
          <p style={{fontSize:'16px',}}>Lorem ipsum dolor sit amet, consectetuer<br />
            adipiscing elit,sed diam nonummy nibh <br />
            euismod tincidunt ut laoreet dolore magna<br />
            aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
        </div>
      </div>
      <a href="blogs" style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}>
      <div style={{ gridColumnStart: 3, gridColumnEnd: 5, backgroundColor: '#C9C9C9', borderRadius: '10px', display: "flex", flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
        {/* <div style={{}}> */}
        <p style={{
          textAlign: 'left',
          font: 'normal normal 600 22px/34px Montserrat',
          letterSpacing: ' -0.64px',
          color: '#262626',
          opacity: 1
        }}>What’s going on in our Ecosystem</p>

        <p style={{
          textAlign: 'left',
          font: 'normal normal 600 36px/68px Montserrat',
          letterSpacing: '-1.12px',
          color: '#262626',
        }}>View our blog</p>
        {/* </div> */}


      </div>
      </a>
      <a href="/whyImpactEcosystem" style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}></a>
      <div style={{ gridRowStart: 2, gridRowEnd: 2, backgroundColor: '#2F84F1', borderRadius: '10px', display: "flex", flexDirection: 'column', justifyContent: 'space-between', padding: '10px' }}>
        <p style={{
          textAlign: 'left',
          font: 'normal normal 600 32px/34px',
          letterSpacing: '-1.12px',
          color: '#262626',
        }}>Discover about us</p>
        <p style={{
         textAlign: 'left',
         font: 'normal normal 600 36px/68px Montserrat',
         letterSpacing: '-1.12px',
         color: '#262626',
         opacity: 1
        }}>About Us</p>
        {/* Your content for the third grid cell */}
      </div>
      <a href="contactUs" style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}>
      <div style={{ gridRowStart: 2, gridRowEnd: 2, backgroundColor: '#6E8833', borderRadius: '10px', display: "flex", flexDirection: 'column', justifyContent: 'space-between', padding: '10px' }}>
      
        <p style={{
          textAlign: 'left',
          font: 'normal normal 600 56px/68px',
          letterSpacing: '-1.12px',
          color: '#262626',
        }}>Have some question?</p>
        <p style={{
         textAlign: 'left',
         font: 'normal normal 600 36px/68px Montserrat',
         letterSpacing: '-1.12px',
         color: '#262626',
         opacity: 1
        }}>Contact Us</p>
      </div>
    </a>
    </div>
  );
}