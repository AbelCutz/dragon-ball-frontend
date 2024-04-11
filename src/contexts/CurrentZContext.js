import React from "react";

const CurrentZContext = React.createContext({
  characters: {},
  setCharacters: () => {},
});

export { CurrentZContext };
