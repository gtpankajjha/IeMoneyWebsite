import React from "react";
import { AppFooter, AppHeader } from "../widgets/headerFooter";

const CareerForm = () => {
  return (
    <div style={{backgroundColor:'black'}}>
      <AppHeader />

      <iframe
        title="Career Form"
        src="https://tally.so/r/wd92Yq" // Replace with the actual URL of your Tally form
        // width="100%"
        // height="100%"
        frameBorder="0"
        className="w-full h-screen mt-10"
      ></iframe>

      {/* <iframe
    data-tally-src="https://tally.so/r/wo2yLO?transparentBackground=1"
    width="100%"
    height="100%"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="Consideration & Familiarity"
  ></iframe> */}

      <AppFooter />
    </div>
  );
};

export default CareerForm;
