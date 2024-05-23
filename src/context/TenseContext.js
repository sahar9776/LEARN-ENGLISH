import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TenseContext = createContext();

function TenseProvider({ children }) {
  const [tense, setTense] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/TenseVerbs").then((result) => {
      setTense(result.data);
    });
  }, []);
  const Past = tense.filter((item) => {
    return item.category == "Past";
  });
  const Future = tense.filter((item) => {
    return item.category == "Future";
  });
  const Present = tense.filter((item) => {
    return item.category == "Present";
  });
  const newTense = [
    {
      id: 1,
      time: Future,
      persianTitle: "آینده",
    },
    {
      id: 2,
      time: Present,
      persianTitle: "حال",
    },
    {
      id: 3,
      time: Past,
      persianTitle: "گذشته",
    },
  ];
  return (
    <TenseContext.Provider value={{ tense, Past, Present, Future, newTense }}>
      {children}
    </TenseContext.Provider>
  );
}
export default TenseProvider;
