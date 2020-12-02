import React from "react";
import BaseComponent from './BaseComponent'
import "./Seq2SeqGAN.css";

export default class Seq2SeqGAN extends BaseComponent {
    render() {
        return (
            <div id='outer_container'>
                <div id='container'>
                    <h2>Seq2Seq GAN and its variant model</h2>
                        <p>
                            To the baseline LSTM model, we applied GAN architecture and created a new model. We call this
                            model as SeqtoSeq GAN here. With the GAN’s generator and discriminator, we expected that our 
                            model generates more plausible future positions, avoiding the blurry predictions with the help of 
                            discriminator. Figure1 and Figure2 two shows the architecture of the generator and the 
                            discriminator of our Seq2Seq model. 
                        </p>
                </div>
            </div>
        )
    }
}
