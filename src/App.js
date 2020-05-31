import React from "react";
import location from "./location";

import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";
const App = () => {
  const [lat, error] = location();
  let content;
  if (error) {
    content = <div>Error:{error}</div>;
  } else if (lat) {
    content = <SeasonsDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please Fuck!" />;
  }
  return content;
};

export default App;
