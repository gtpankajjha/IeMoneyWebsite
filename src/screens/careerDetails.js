import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/bl.css";
import { Link, useLocation } from "react-router-dom";
import moment from "moment/moment";
import { careerData } from "../widgets/careerData";

const CareerDetails = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  console.log("id:", id);

  let data = careerData.filter((el) => el.id == id.split("?")[0])[0];

  console.log("data", data);

  return (
    <StrictMode>
      <AppHeader />
      <div className="mt-20 p-10">
        <div className="sm:flex sm:justify-between sm:px-8">
          <h1 className="text-4xl font-semibold">{data.title}</h1>
          <div className="mt-4">
            <a
              href="/career-form"
              className="border border-[#045D00] px-10 py-2 rounded-full text-[#045D00] text-lg font-bold"
            >
              Apply
            </a>
          </div>
        </div>

        <div className="my-8">
          <div className="text-2xl font-semibold">
            About Impact Ecosystem :{" "}
          </div>
          <br />
          <div className="text-lg">{data.about}</div>
        </div>

        <div className="my-8">
          <div className="text-2xl font-semibold">Job description:</div>
          <br />
          <div className="text-lg">{data.aboutRole}</div>
        </div>

        <div className="my-8">
          <div className="text-2xl font-semibold">Key Responsibilities:</div>
          <br />
          <div className="text-lg">
            <ul className="list-disc p-4">
              {data.responsibilities.map((responsibility) => (
                <>
                  <li>{responsibility}</li>
                  <br />
                </>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-8">
          <div className="text-2xl font-semibold">Requirements:</div>
          <br />
          <div className="text-lg">
            <ul className="list-disc p-4">
              {data.requirements.map((requirement) => (
                <>
                  <li>{requirement}</li>
                  <br />
                </>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <br />
          <div className="font-semibold text-lg">
            Role Type: {data.roleType}{" "}
          </div>
          <br />
          <div className="font-semibold text-lg">
            Job Location: {data.location}
          </div>
          <br />
          {/* <div className="font-semibold text-lg">Duration: 2 months</div>
          <br /> */}
          <div className="mt-2">
            <a
              href="/career-form"
              className="border border-[#045D00] px-10 py-2 rounded-full text-[#045D00] text-lg font-bold"
            >
              Apply
            </a>
          </div>
          {/* <div className="font-semibold text-lg">
            To apply mail us at : {data.mail}
          </div> */}
        </div>
      </div>

      {/* <div className="p-8">
        <button className="border border-[#045D00] px-10 py-1 mt-2 rounded-full text-[#045D00] text-lg font-bold">
          Apply
        </button>
      </div> */}
      <AppFooter />
    </StrictMode>
  );
};

export default CareerDetails;
