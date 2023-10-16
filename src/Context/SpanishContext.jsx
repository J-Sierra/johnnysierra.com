import React, { createContext, useContext, useState } from "react";

// Create the context
const SpanishContext = createContext();

// Create a provider component
export const SpanishProvider = ({ children }) => {
  const [spanish, setSpanish] = useState(false);

  return (
    <SpanishContext.Provider value={{ spanish, setSpanish }}>
      {children}
    </SpanishContext.Provider>
  );
};

// Custom hook to consume the context
export const useSpanish = () => {
  const context = useContext(SpanishContext);
  if (!context) {
    throw new Error("useSpanish must be used within a SpanishProvider");
  }
  return context;
};
