import React from "react";
import "./App.css";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";

function App() {
  const [darkTheme, setDarkTheme] = React.useState(false);

  const darkModeFunction = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <div className="container">
        <Text darkTheme={darkTheme} />
        <Button darkModeFunction={darkModeFunction} darkTheme={darkTheme} />
      </div>
    </div>
  );
}

export default App;
