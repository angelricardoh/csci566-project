import React from "react";
import BaseComponent from './BaseComponent'
import "./Seq2SeqGAN.css";
import GAN1 from './images/main/GAN1.png'
import GAN2 from './images/main/GAN2.png'
import GAN3 from './images/main/GAN3.png'
import GAN4 from './images/main/GAN4.png'
import GAN5 from './images/main/GAN5.png'

export default class Seq2SeqGAN extends BaseComponent {
    render() {
        return (
            <div id='outer_container'>
                <div id='container'>
                    <br>Seq2Seq GAN and its variant model<br />
                        <p>
                            To the baseline LSTM model, we applied GAN architecture and created a new model. We call this
                            model as SeqtoSeq GAN here. With the GAN’s generator and discriminator, we expected that our 
                            model generates more plausible future positions, avoiding the blurry predictions with the help of 
                            discriminator. Figure1 and Figure2 two shows the architecture of the generator and the 
                            discriminator of our Seq2Seq model. 
                        <p/>
                </div>
            </div>
        )
    }
}
