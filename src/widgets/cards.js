import { render } from "@testing-library/react";
import React from "react";
import "../styles/cd.css";

export function Card1({ reverse, data }) {
  return (
    <div
      className="cdD"
      style={reverse ? { flexDirection: "row-reverse" } : null}
    >
      <div className="cdDa">
        <div className="cdDaA">{data?.name}</div>
        <div className="cdDaB">{data?.desc}</div>
        <div className="cdDaC">{data?.title}</div>
      </div>
      <div className="cdDb" style={{ backgroundImage: `url(${data?.img})` }} />
    </div>
  );
}

export function Card2({ data }) {
  return (
    <div className="cdE">
      <div className="cdEa">
        <div className="cdEaA" />
        <div className="cdEaB" style={{color:'white'}}>{data?.title}</div>
      </div>
      <div className="cdEb" style={{color:'white'}}>{data?.desc}</div>
    </div>
  );
}
