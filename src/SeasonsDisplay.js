import React from "react";
import "./SeasonsDisplay.css";
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const seasonConfig = {
  summer: { text: "Lets hit the beach.", iconName: "sun" },
  winter: { text: "It's chilly.", iconName: "snowflake" },
};
const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName: icon } = seasonConfig[season];

  return (
    <div className={"season-display " + season}>
      <i className={`${icon} icon-left icon massive`}></i>
      <h1>{text}</h1>
      <i className={`${icon} icon-right icon massive`}></i>
    </div>
  );
};
export default SeasonsDisplay;
