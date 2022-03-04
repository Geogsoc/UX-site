import React from "react";
import "./brand.css";
import { google, slack, shopify, atlassian, dropbox } from "./imports";

export default function Brand() {
  return (
    <div className="gpt3__brand section-padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
}
