import React from "react";
import { Link } from "react-router-dom";
import SLSTM0 from './images/main/SLSTM0.png'
import SLSTM1 from './images/main/SLSTM1.png'
import SLSTM2 from './images/main/SLSTM2.png'
import SLSTM3 from './images/main/SLSTM3.png'
import GAN1 from './images/main/GAN1.png'
import GAN2 from './images/main/GAN2.png'
import GAN3 from './images/main/GAN3.png'
import GAN5 from './images/main/GAN5.png'
import "./MainContainer.css";

export default function Methods() {
    return (
        <div>
            <h2>Methods</h2>
            <p>To resolve this issue, we have implemented various methods and compared their performance by test loss in the Result section below. 
Firstly, we explored <Link to='/resnet-gru'><b>Resnet-Gru</b></Link> and <Link to='/lstm-seq2seq'><b>LSTM/Seq2Seq LSTM</b></Link> models. Based on the LSTM model, we added VAE and GAN structure and created <Link to='/vae-lstm'><b>VAE+LSTM</b></Link> and <Link to='/seq2seqGAN'><b>Seq2Seq GAN</b></Link>. And finally, we implemented <Link to='/s-lstm'><b>Social LSTM</b></Link> which incorporates the neighbors' effect into the model</p>
            <p>In this page, we mainly talk about the two most interesting models among these. For the detailed information about each model we created, please check the other tabs.</p>
            <p><i><b><Link to='/seq2seqGAN' className="link">Seq2Seq GAN</Link> and its variant</b></i></p>
            <figure style={{textAlign: 'center'}}><img src={GAN1} class='ganmodel'></img><figcaption>Figure 1. Generator of Seq2Seq GAN1</figcaption></figure>
            <figure style={{textAlign: 'center'}}><img src={GAN2} class='ganmodel'/><figcaption>Figure 2. Discriminator of Seq2Seq GAN Model</figcaption></figure>
            <p>To the baseline LSTM model, we added the GAN and created a new model. We call this architecture <b>Seq2Seq GAN.</b> In this model, the generator generates the next 50 moves based on the past 11 positions. The discriminator determines whether it’s real or fake. We expected that this structure can avoid blurry predictions and make more accurate predictions.</p>                 
            <p>To improve Seq2Seq GAN1, we incorporated the past yaw information as well and made a Seq2Seq GAN2.</p>
            <figure style={{textAlign: 'center'}}><img src={GAN3} class='ganmodel'/><figcaption>Figure 3. Generator of Seq2Seq GAN2 (with yaw information)</figcaption></figure>
            <p>As you see the Table 1, compared to the Seq2Seq GAN1, the Seq2Seq GAN2 was improved in the sense of test loss under the same conditions.</p>
            <table style={{width: '500pt', tableLayout: 'fixed'}}>
                <caption>Table 1. Test Losses of different Seq2Seq GAN Models</caption>
                <tr>
                    <td>Models</td>
                    <td>Epochs</td>
                    <td>Test Loss(MSE)</td>
                </tr>
                <tr>
                    <td>Seq2Seq GAN1</td>
                    <td>1</td>
                    <td>2.6551</td>
                </tr>
                <tr>
                    <td>Seq2Seq GAN2</td>
                    <td>1</td>
                    <td>2.2576</td>
                </tr>
            </table>
            <p>After training, we tested our Seq2Seq model to check if it doesn’t fall into the mode failure and it can generate diverse predictions for the inputs. We generated one hundred sample predictions for the same batch(32) input and plotted all these generated future trajectories for the randomly-picked four inputs. </p>                
            <figure style={{textAlign: 'center'}}><img src={GAN5}/><figcaption>Figure 4. Predicted Trajectories from the Seq2Seq GAN Model</figcaption></figure>
            <p>As you see in Figure 4, the Seq2Seq GAN model does not suffer from mode collapse and successfully generates diverse trajectories. More detailed explanation about this Seq2Seq GAN model is available on the other tab above.</p>
            <br></br>

            <p><i><b><Link to='/seq2seqGAN' className="link">Social LSTM</Link> and its variant</b></i></p>
            <figure style={{textAlign: 'center'}}>
                <img src={SLSTM1} class='model'/>
                <figcaption>Fig 5. Social LSTM method</figcaption>
            </figure>

            <p>-Based on Alexandre etc’s research, we tried to take the neighbor’s effect into consideration combining with the LSTM model. For this, we added a max-pooling layer between each time stamp, its formulation is:</p>
            <div style={{textAlign: 'center'}}><img src={SLSTM0}/></div>
            <br></br>
            <p>However, this method has the following limitation:
                <ul>
                    <li>Simply adding all the neighbor’s information does not make sense. People care more about the neighborhood closer to them than those people who are far away from them.</li>
                    <li>This social LSTM architecture is a generalization method. However, if we can give a more specific classification, it is highly likely that we can improve the prediction’s accuracy. </li>
                    <li>For the social LSTM architecture, when the agent falls into a grid, it will be considered as a neighborhood. For the architecture, the grid we considered is a square. It seems unreasonable because agents move faster in the speed’s direction than the other. </li>
                </ul>
                Based on these two observations, we modified the current social-LSTM architecture as below:
                <ul>
                    <li>Introducing the spatial information max-pooling part, which can be realized by using the convolutional layer.</li>
                    <li>In the real world, when a car moves, it only has two classes: longitude and latitude. For the longitude classes, we split into 3 situations: speed up, normal and slow down; turning left, staying the same and turning right are these 3 situations for the latitude classes. More details are available on the Social LSTM tab.</li>
                    <li>For the grid, instead of considering the square, tried to consider rectangular.</li>
                </ul>
                As a result of the modifications, we created a Social LSTM variant model as Figure 6. 
            </p>
            <figure style={{textAlign: 'center'}}><img src={SLSTM2} class='model'/><figcaption>Fig 6. Social-LSTM variant</figcaption></figure>
            <p>For this model, we slightly changed our goal from directly predicting the future trajectory to maximizing the probability of prediction and returning the one with the highest probability. The objective function is:</p>
            <div style={{textAlign: 'center'}}>
                <img src={SLSTM3} class='formula'/>
            </div>
            <p>More detailed explanation about this Seq2Seq GAN model is available on the other tab above.</p>
        </div>
    )
}