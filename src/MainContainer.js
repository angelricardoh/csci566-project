import React from "react";
import ProblemStatement from './ProblemStatement'
import Motivation from './Motivation'
import Methods from './Methods'
import FineTuning from './FineTuning'
import Results from './Results'
import Conclusion from './Conclusion'
import "./MainContainer.css";

export default function MainContainer() {
    return (
        <div id='outer_container'>
            <div id='container'>
                <ProblemStatement/>
                <Motivation/>
                <Methods/>
                <FineTuning/>
                <Results/>
                <Conclusion/>
            </div>
        </div>
    )
}