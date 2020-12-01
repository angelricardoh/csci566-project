import React from "react";
import Motivation1 from './images/main/Motivation1.png'
import SDCAR from './images/main/SDCAR.gif'
import SDCAR2 from './images/main/SDCAR2.gif'
import "./MainContainer.css";

export default function ProblemStatement() {
    return (
        <div>
            <h2>Problem Statement</h2>
            <p>One of the most primitive tasks of autonomous vehicles is to predict the future positions of other vehicles amidst traffic. In this project, we aim to predict the future positions of the other vehicles/agents in a given scene such as cyclists, cars, and pedestrians. 
    We are using Lyft’s l5kit dataset. This dataset contains over 1000 hours of scenes, including labeled positional information of objects such as vehicles, cyclists, and pedestrians. The scenes in the dataset are from a 6.8 mile route chosen by the Lyft team. The input data will be the sequence of spatial coordination about each vehicle (both for train and test) which can also include road information of the given agents environment.  
    The output will be the future spatial coordination. Given the uncertainty of live traffic, we have also aimed to predict the future positions for multiple trajectories with a level of certainty for each trajectory. </p>
            <img id='motivation_pic' alt="Motivation1" src={Motivation1} class='center'/>
            <div id='more_motivation_pics_div'>
                <img alt="Picture2" src={SDCAR}/>
                <img alt="Picture3" src={SDCAR2}/>
            </div>
        </div>
    )
}