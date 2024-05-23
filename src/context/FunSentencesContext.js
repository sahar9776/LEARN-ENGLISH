import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FunSentencesContext = createContext();

function FunSentencesProvider({ children }) {
    const [sentences,setSentences]=useState([]);
    const fly=sentences.filter((item) => {
      return item.category == "fly";
    });
    const restaurant=sentences.filter((item) => {
      return item.category == "restaurant";
    });
    const hotel=sentences.filter((item) => {
      return item.category == "hotel";
    });
    const newSentences = [
      {
        id: 1,
        sentencesArray: restaurant,
        title: "رستوران",
        category:"restaurant"
      },
      {
        id: 2,
        sentencesArray: hotel,
        title: "هتل",
        category:"hotel"
      },
      {
        id: 3,
        sentencesArray: fly,
        title: "پرواز",
        category:"fly"
      },
    ];
    useEffect(()=>{
        axios.get("http://localhost:8000/FunctionalSentences").then(result=>{
        setSentences(result.data);
        })
    },[])
  return (
    <FunSentencesContext.Provider value={{newSentences}}>{children}</FunSentencesContext.Provider>
  );
}
export default FunSentencesProvider;
