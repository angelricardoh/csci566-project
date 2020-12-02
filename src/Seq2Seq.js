import React from "react";
import BaseComponent from './BaseComponent'
import GAN1 from './images/main/GAN1.png'
import GAN2 from './images/main/GAN2.png'
import GAN3 from './images/main/GAN3.png'
import GAN4 from './images/main/GAN4.png'
import GAN5 from './images/main/GAN5.png'

import "./Seq2Seq.css";

export default class Seq2Seq extends BaseComponent {
    render() {
        return (
            <div id='outer_container'>
                <div id='container'>
                    Detailed information of Seq2Seq
                </div>
            </div>
        )
    }
}
