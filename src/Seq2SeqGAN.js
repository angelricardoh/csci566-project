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
                    <h2>Seq2Seq GAN and its variant model</h2>
                        <p>
                            To the baseline LSTM model, we applied GAN architecture and created a new model. We call this
                            model as SeqtoSeq GAN here. With the GAN’s generator and discriminator, we expected that our 
                            model generates more plausible future positions, avoiding the blurry predictions with the help of 
                            discriminator. Figure1 and Figure2 two shows the architecture of the generator and the 
                            discriminator of our Seq2Seq model. 
                        </p>
            
                        <div style={{textAlign: 'center'}}>
                            <img src={GAN1}/>
                            <span>
                                <strong> 
                                    Figure 1. Generator of Seq2Seq GAN1 
                                </strong> 
                            </span>
                        </div>
            
                        <div style={{textAlign: 'center'}}>
                            <img src={GAN2}/>
                            <span>
                                <strong> 
                                    Figure 2. Discriminator of Seq2Seq GAN1 
                                </strong> 
                            </span>
                        </div>
            
                        <p>
                            As you see the generator’s architecture in Figure1, we firstly extracted  latent temporal features from history positions with encoder and decoder. After that, we added noise vectors for the generator and used LSTM and fully connected layers to generate the next 50 trajectories. 
                            For the discriminator, we gave the generated trajectories and the target trajectories which is the ground truth to it as input. And we used an LSTM layer to extract latent features and used fully connected layers to distinguish whether our input to a discriminator is forgery or not.            
                        </p>
                
                        <div style={{textAlign: 'center'}}>
                            <img src={GAN3}/>
                            <span>
                                <strong> 
                                    Figure 3. Generator of Seq2Seq GAN2 (with yaw)
                                </strong> 
                            </span>
                        </div>
        
                        <p>
                            Other than the generator model we have discussed above, we have implemented a new generator that contains yaw information taking the direction information into our model. As in Figure3, the encoder takes history positions and yaw information as input. We believed that this would improve our model and found out that the Seq2Seq GAN2 has lower MSE test loss than the Seq2Seq GAN1.             
                        </p>
               <div>
                    <table style={{width: '300pt', tableLayout: 'fixed'}}>
                        <caption>Table 1. Test Losses of different Seq2Seq GAN Models </caption>
                        <tr>
                            <th><b>Models</b></th>
                            <th><b>Epochs</b></th>
                            <th><b>Test Loss(MSE)</b></th>
                        </tr>
                        <tr>
                            <td>Seq2Seq GANl1-v2</td>
                            <td>1</td>
                            <td>2.6551</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GANl2-v2</td>
                            <td>2</td>
                            <td>2576</td>
                        </tr>
                    </table>
                </div>
              </div>
           </div>
        )
    }
}
