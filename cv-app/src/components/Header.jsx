import React, { useState } from "react";


const Header = ({handleInputChange,data}) => {
  return (
    <>
          <div className="head-one"><h1>CV Maker</h1></div>
          <div className="Header-input">
            <input
              type="tel"
              placeholder="Contact No."
              value={data.contactNo}
              onChange={handleInputChange}
              name="contactNo"
            />
            <input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={handleInputChange}
              name="email"
            />
            <input
              type="text"
              placeholder="LinkedIn"
              value={data.linkedIn}
              onChange={handleInputChange}
              name="linkedIn"
            />
          </div>
          <div className="name">
            <input
              type="text"
              placeholder="Full Name"
              value={data.fullName}
              onChange={handleInputChange}
              name="fullName"
            />
          </div>
    </>
    
  );
};

function HeaderRender({data}){
    return(
        <>
        <div>
        <div className="Header-top">
        <h5>{data.contactNo}</h5>
        <hr />
        <h5>{data.email}</h5>
        <hr />
        <h5>{data.linkedIn}</h5>
      </div>
      <div className="name">
        <h3>{data.fullName}</h3>
      </div>
        </div>
        
      </>
    )
          
          
}

export  {Header,HeaderRender};
