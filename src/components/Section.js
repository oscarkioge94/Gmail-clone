import React from 'react'
import './Section.css'

function Section({title, icon, color, selected}) {
    return (
        <div className={`section ${selected && 'section--selected'}`}
        style={{
            borderBottom: `3px solid ${color}`,
            color:`${selected && color}`,
        }}
        >
         <icon/>
         <h4>{title}</h4>   
        </div>
    )
}

export default Section
