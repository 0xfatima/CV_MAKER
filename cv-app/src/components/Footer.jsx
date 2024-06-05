import React from "react";


const Footer= ()=>{
    const year= new Date().getFullYear();
    return(
        <>
        <div className="foot"><h5>copyright {year}</h5></div>
         
        </>
    )
}

export default Footer;