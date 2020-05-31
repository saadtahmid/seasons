import React from "react";
const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};
Spinner.defaultProps = { message: "Loading..." };
// eslint-disable-next-line no-undef

export default Spinner;
