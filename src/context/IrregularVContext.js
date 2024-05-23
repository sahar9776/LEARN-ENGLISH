import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const IrregularVContext=createContext();

function IrregularVProvider({children}) {
    // const alphabet = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz']
    const alphabet = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Kk', 'Ll', 'Mm', 'Oo', 'Pp', 'Rr', 'Ss', 'Tt', 'Uu', 'Ww']
    const [specialVerb, setSpecialVerb] = useState([]);
    const [flag, setFlag] = useState(false);
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/IrregularVerbs").then(result=>{
            setInfo(result.data);
        })
    },[])
    return(
        <IrregularVContext.Provider value={{info,alphabet,specialVerb, setSpecialVerb,flag, setFlag}}>
            {children}
        </IrregularVContext.Provider>
    )
}
export default IrregularVProvider