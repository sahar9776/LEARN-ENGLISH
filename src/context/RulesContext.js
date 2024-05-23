import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RulesContext = createContext();

const RulesProvider = ({ children }) => {
  const [rules, setRules] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/Rules").then((result) => {
      setRules(result.data);
    });
  }, []);
  return (
    <RulesContext.Provider value={{ rules }}>{children}</RulesContext.Provider>
  );
};
export default RulesProvider;
