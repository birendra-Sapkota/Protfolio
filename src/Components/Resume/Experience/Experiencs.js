import React from 'react'
import "../../Resume/Experience/Experience.css";


const Experiencs =(props)=>{
return(
    <div className='experience'>
        <div className='achievement'>
            <div className='circle'>8+</div>
            <span>Years</span>
            <span>Experiences</span>
        </div>
        <div className='achievement'>
            <div className='circle'>10+</div>
            <span>Completed</span>
            <span>projects</span>
        </div>
        <div className='achievement'>
            <div className='circle'>8+</div>
            <span>companies</span>
            <span>Work</span>
        </div>
        
    </div>
);
};

export default Experiencs;