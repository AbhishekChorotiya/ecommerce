import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Get = ()=>{
    var [info,updateInfo] = useState(null)
    
    useEffect(()=>{
        axios('/get').then((data)=>updateInfo(data.data.filter((u)=>{
            return u.price == '600'
        })))
        
    },[])
    
    console.log(info);
    
    return <p></p>

}

export default Get;