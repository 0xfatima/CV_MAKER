import React from "react";


const ExperienceSet= ({handleInputChange,data})=>{
    return(
        <>
        <div className="experience">
        <h3>
            Experience
        </h3>
        
        <textarea name="experience" value={data.experience} onChange={handleInputChange} id="" cols="30" rows="10"></textarea>
        </div>
        
        </>
    )
}
const ExperienceGet= ({data})=>{
    return(
        <>
           <h3>
            Experience
        </h3>
        <p>{data.experience}</p>
        </>
    )
}

export {ExperienceSet, ExperienceGet};