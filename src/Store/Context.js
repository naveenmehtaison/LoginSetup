import DataContext from "./auth-context";
import { useState } from "react";
import { useContext } from "react";
import React, { createContext } from "react";




const Context =(props)=>{

    const [token,settoken]=useState([])
    const [curtoken,setcurtoken]=useState(localStorage.getItem('token'))
    const [login,setlogin]=useState(false)

    const HandleToken=(props)=>{
        settoken([...token,props])  
        console.log('handletoken')
        setcurtoken(props)
    }
    const HandleRemove=(tok)=>{
        // const updated_token = token.filter((ele,item)=>{
        //     return ele!==tok
            
        // })
        // settoken(updated_token)
        setcurtoken('')
        
    }
    const handlelogin=()=>{
        setlogin(!login)
    }
    const Context2={
        loginfunc:handlelogin,
        islogin:login,
        funcToken:HandleToken,
        removeToken:HandleRemove,
        Token:curtoken,
        Tokenarr:token
    }
    return(
        <DataContext.Provider value={Context2}>
            {props.children}
        </DataContext.Provider>
    )


}
export default Context



