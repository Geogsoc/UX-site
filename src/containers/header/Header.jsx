import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="gpt3__header dection__padding" id="home">
      <div className="gpt3__deader-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing with GPT-3 OpenAI{" "}
        </h1>
        <div className="gtp3__header-content__input">
          <input type="email" placeholder="Your email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
}
