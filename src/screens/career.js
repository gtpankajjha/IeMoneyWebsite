import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/bl.css";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { careerData } from "../widgets/careerData";

const Career = () => {
  return (
    <StrictMode>
      <AppHeader />

      <div className="blC">
        <div className="font-bold text-3xl sm:text-6xl uppercase">
          Join the team
        </div>
        <div className="sm:text-2xl sm:p-4 sm:mt-8 mt-2">
          Get your career moving, be part of something bigger than you or us, be
          a change maker.
        </div>
      </div>

      <div className="w-full flex gap-2 justify-center items-center p-10 overflow-y-auto " style={{backgroundColor:'black'}}>
        <h4 className="w-full text-2xl sm:text-6xl font-extrabold p-1" style={{color:'white'}}>
          MAKE YOUR <br /> HOURS COUNT
        </h4>

        <div className="h-60 overflow-y-auto">
          <p style={{color:'white'}}>
            We all have 80,000 hours to spend on our careers. That’s 40 hours
            per week, 50 weeks per year, for 40 years.{" "}
            <strong>
              <em>That’s an immense amount of time</em>
            </strong>
            .
            <br />
            <br />
            This means that your career shouldn't just be a major driver of
            happiness and fulfilment — it’s probably also your biggest
            opportunity to positively impact the world around you. So how can
            you best spend these hours?
            <br />
            <br />
            We believe that one of the most impactful choices we can make in our
            lives is dedicating part of our careers to solving some of the most
            pressing challenges of our time. <br />
            <br />
            Impact is not something that you receive, impact is something you
            create. Impact Ecosystem enables you to use your drive and your
            dedication to make a difference.&nbsp;
            <br />
            <br />
            We wish we were clever enough to have made this stuff up, but we
            didn’t. Do you want to learn more about the 80,000 hour theory?
            &nbsp;
            <a
              href="https://80000hours.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-500"
            >
              Click here!
            </a>
          </p>
        </div>
      </div>

      <div className="p-10 sm:p-14 text-center" style={{backgroundColor:'black'}}>
        <div className="text-xl sm:text-2xl font-semibold" style={{color:'white'}}>
          <span className="text-4xl" style={{color:'white'}}>“</span> There's work and there's your
          life's work. The kind of work that has your fingerprints all over it.
          The kind of work that you'd never compromise on. That you'd sacrifice
          a weekend for. You can do that kind of work at Apple. People don't
          come here to play it safe. They come here to swim in the deep end.
          They want their work to add up to something. Something big. Something
          that couldn't happen anywhere else.{" "}
          <span className="text-2xl">”</span>
        </div>
        <br />
        <div className="text-base" style={{color:'white'}}>
          - This was the letter handed to early Apple employees. At Impact
          Ecosystem, we tried finding a better way to express our work culture.
          But the best we could do was copy-paste this.
        </div>
      </div>

      <div className="p-10 text-lg" style={{backgroundColor:'black',color:'white'}}>
        A job at Impact Ecosystem is more like working at a startup than at a
        non-profit. It’s a fast-paced and exciting place to work. Tasks and
        challenges may be demanding, responsibilities may change over time, but
        we guarantee that in return we will fast-forward your personal and
        professional development.
        <br />
        <br />
        Ten years from now, you will be proud of the projects and ideas you have
        developed and acted on together with us, leaving a positive footprint
        and legacy behind. We are a diverse team from varied backgrounds and
        experiences, creating an environment where difference of opinion and
        ideas are deeply rooted in our DNA.
        <br />
        <br />
        Being a part of Impact Ecosystem will make you feel like you are part of
        something bigger than yourself, and that you are in the driver seat for
        positive change.
      </div>

      <div className="px-10 text-lg" style={{backgroundColor:'black'}}>
        <div style={{backgroundColor:'black',color:'white'}}>
          We are hiring new team members to play pivotal roles in the
          organization’s ongoing activities. You will join a dedicated and
          mission-driven team seeking to catalyze impactful work at the
          intersection of Impact investment, sustainability and climate change.
        </div>

        <div className="mt-4 font-semibold text-2xl" style={{backgroundColor:'black',color:'white'}}>
          We are currently seeking applicants for the following positions:
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 py-8 px-10 z-0" style={{backgroundColor:'black'}}>
        {/* {blogs.map((blog) => { */}
        {/* return ( */}
        {careerData.map((career) => (
          <div className="rounded-xl overflow-hidden border border-black/50 drop-shadow-md hover:shadow-lg" style={{backgroundColor:'rgb(112 112 112 / 0.1)'}}>
            {/* <img
              className="h-56 w-full object-fill rounded-md p-1"
              src="https://res.cloudinary.com/dkpj1qyso/image/upload/v1686910360/small_logo_d3e8d72a4f.jpg"
              alt="img"
            /> */}
            <div className="p-8 ">
              <h3 className="font-bold text-xl my-1" style={{color:'white'}}>{career.title}</h3>

              <div className="flex justify-between">
                <div className="font-semibold" style={{color:'white'}}>{career.roleType}</div>
                <div className="font-semibold" style={{color:'white'}}>{career.location}</div>
              </div>

              {/* <p className="text-gray-600 text-sm">Desc</p> */}
              <a href={`/career-details?id=${career.id}?title=${career.title}`}>
                <button className="border border-[#045D00] px-10 py-1 mt-2 rounded-full text-[#045D00] text-lg font-bold">
                  Know more
                </button>
              </a>
            </div>
          </div>
        ))}
        {/* ); */}
        {/* })} */}
      </div>
      <AppFooter />
    </StrictMode>
  );
};

export default Career;
