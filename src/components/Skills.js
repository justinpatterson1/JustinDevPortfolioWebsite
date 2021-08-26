import React,{useContext} from 'react'
import SkillsChart from './SkillsChart'
import SkillContext from '../context/SkillsContext'

const Skills = () => {
    const {skills,setSkills} = useContext(SkillContext)

    return (
        <div id="skills">
            <div className="container section ">

                <div className="columns">
                    
                            <div className="column">

                                    <span className=" is-size-3">Toolkit <hr/></span>
                                
                            </div>
                    </div>

                    <div id="skills-box" className="box is-fluid m-6">
                        <div className="grid col-5 m-6 p-4">
                            {
                                skills.map((skill)=>(<SkillsChart name={skill.name} rate={skill.rate} />))
                            }
                        </div>
                    </div>

                </div>

        </div>
    )
}

export default Skills
