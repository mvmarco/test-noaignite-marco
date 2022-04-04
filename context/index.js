import React, { useState } from "react";

export const Context = React.createContext({});

export default function ContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  return (
    <Context.Provider value={{ favourites, setFavourites }}>{children}</Context.Provider>
  );
}
