import React from "react";


const EducationSet= ({handleInputChange,data})=>{
    return(
        <>
        <div className="education">
        <h3>
            Education
        </h3>
        <textarea name="education" value={data.education} onChange={handleInputChange} id="" cols="30" rows="10"></textarea>
        </div>
        
        </>
    )
}
const EducationGet= ({data})=>{
    return(
        <>
        <h3>
            Education
        </h3>
        <p>{data.education}</p>
           
        </>
    )
}

export {EducationSet, EducationGet};