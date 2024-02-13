import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import BlogsScreen from "./screens/blogs";
import ContactUsScreen from "./screens/contactUs";
import HomeScreen from "./screens/home";
import IeMoneyWorksScreen from "./screens/ieMoneyWorks";
import NetworksScreen from "./screens/networks-individuals";
import OurTeamScreen from "./screens/ourTeam";
import WhyImpactEcosystem from "./screens/whyImpactEcosystem";
import ContestPage from "./screens/contest";
import useFetch from "./hooks/useFetch";
import BlogContent from "./screens/blogContent";
import Networks from "./screens/networks-individuals";
import NGONetworks from "./screens/networks-ngo";
import LandownersNetworks from "./screens/networks-landowners";
import ImpactInvestorsNetworks from "./screens/networks-impact";
import BusinessNetworks from "./screens/networks-business";
import AccountantsNetworks from "./screens/networks-accountants";
import Forms from "./screens/forms";
import Career from "./screens/career";
import CareerDetails from "./screens/careerDetails";
import CareerForm from "./screens/careerForm";
import Explore from "./screens/explore";
import popup from "./assets/Modal_img.png"
import cancel_icon from "./assets/cancel_icon.png"

export default function App() {
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    // ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: window.location.pathname,
    });
  }, []);

  const closeModalAndNavigate = () => {
    setShowModal(false);
    // Navigate to the Explore component
    window.location.href = "/explore";
  };

  const closeOnOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false)
    }
  };

  const closeOnClick = (e) => {
    
      setShowModal(false)
    
  };

  // const currentPath = window.location.pathname.split("?")[0].split("/")[1];
  const currentPath = window.location.pathname.split("/")[1];
  const [path, setPath] = useState(currentPath);
  const navScreen = (v) => {
    setPath(v.split("?")[0].split("/")[1]);
    window.history.replaceState("HOME", "HOME", v);
    window.scrollTo(0, 0);
  };

  // -------------CMS---------------
  // let { loading, data, error } = useFetch(
  //   "https://strapi-cms-1707.onrender.com/api/ie-blogs?populate=*"
  // );

  // console.log("cms data:", data);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center mx-auto h-screen">
  //       <div
  //         class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  //         role="status"
  //       >
  //         <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) return console.log("cms error:", error);

  if (path === "home") return <HomeScreen navScreen={navScreen} />;
  if (path === "whyImpactEcosystem")
    return <WhyImpactEcosystem navScreen={navScreen} />;
  if (path === "ourTeam") return <OurTeamScreen navScreen={navScreen} />;
  if (path === "contactUs") return <ContactUsScreen navScreen={navScreen} />;
  if (path === "ieMoneyWorks")
    return <IeMoneyWorksScreen navScreen={navScreen} />;
  if (path === "blogs") return <BlogsScreen navScreen={navScreen} />;
  if (path === "blog-content") return <BlogContent navScreen={navScreen} />;
  if (path === "individuals-networks")
    return <Networks navScreen={navScreen} />;
  if (path === "ngos-networks") return <NGONetworks navScreen={navScreen} />;
  if (path === "land-owners-networks")
    return <LandownersNetworks navScreen={navScreen} />;
  if (path === "impact-investors-networks")
    return <ImpactInvestorsNetworks navScreen={navScreen} />;
  if (path === "business-networks")
    return <BusinessNetworks navScreen={navScreen} />;
  if (path === "environmental-accountants-networks")
    return <AccountantsNetworks navScreen={navScreen} />;
  if (path === "contest") return <ContestPage navScreen={navScreen} />;
  if (path === "thanksgiving-survey") return <Forms navScreen={navScreen} />;
  if (path === "career") return <Career navScreen={navScreen} />;
  if (path === "career-details") return <CareerDetails navScreen={navScreen} />;
  if (path === "career-form") return <CareerForm navScreen={navScreen} />;
  if (path === "explore") return <Explore navScreen={navScreen} />;

  // by default screen
  return<>{showModal && (
    
      <div className="modal-overlay launch_popup " onClick={closeOnOverlayClick}>
<div className="modal popup">
      <div className="modal-content popup-content" onClick={closeModalAndNavigate}>
      {/* <img src={cancel_icon} style={{height:'30px',width:'30px'}} onClick={closeOnClick}/> */}
       <img src={popup}/>
      </div>
      </div>
      </div>
    
  )} <HomeScreen navScreen={navScreen} />
  </> ;
}
