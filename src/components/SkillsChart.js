import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillsChart = (props) => {
    const image = require(`../assets/Images/${props.rate}`).default;

    return (
        <div className='pt-2'>
               
               <img src={image} style={{width:'100px',height:'100px'}} id="skill-img" className="pt-4" />
               <p className="has-text-centered">{props.name}</p>

        </div>
    )
}

export default SkillsChart
