import React from "react";

const Button = ({darkTheme, darkModeFunction}) => {
  return (
    <button onClick={darkModeFunction} className={darkTheme ? "light" : "dark"}>
      Click here!
    </button>
  );
};

export default Button;
