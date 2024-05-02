import React, { createContext } from "react";

const DataContext = createContext({
    loginfunc:()=>{},
    islogin:false,
    funcToken:()=>{},
    removeToken:()=>{},
    Token:[],
    Tokenarr:''
});

export default DataContext;
