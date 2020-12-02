import React from "react";
import BaseComponent from './BaseComponent'
import "./Seq2SeqGAN.css";
import GAN1 from './images/main/GAN1.png'
import GAN2 from './images/main/GAN2.png'
import GAN3 from './images/main/GAN3.png'
import GAN4 from './images/main/GAN4.png'
import GAN5 from './images/main/GAN5.png'
import GAN6 from './images/main/GAN6.png'
import GAN7 from './images/main/GAN7.png'

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
                <div style={{textAlign: 'center'}}>
                    <img src={GAN4}/>
                    <span>
                        <strong> 
                            Figure 4.  Training loss graphs( lr = 1e-3 )
                        </strong> 
                    </span>
                </div>
                <p>
                    These are the loss graphs from a Seq2Seq GAN model. In this model, we have used MSE loss for the generator loss and BCE loss for the discriminator. MSE loss function allows a model to learn directly from the target value. As you see from Figure 4, generator loss converges to 0. This is desirable since we use a generator to generate future trajectory. Moreover, validation loss follows similar behavior as training loss, and it shows that our model is not overfitted.                                
                </p>
                <h2>Fine Tuning</h2>
                <p>
                    We have tested many different hyperparameters for fine tuning  to improve  two Seq2Seq GAN models above.
                    Firstly, we tested the Seq2Seq GAN1 with different epochs and we got the following result.
                </p>

               <div>
                    <table style={{width: '300pt', tableLayout: 'fixed'}}>
                        <caption>Table 2. Test Losses on Seq2Seq GAN1 with different epochs </caption>
                        <tr>
                            <th><b>Configuration</b></th>
                            <th><b>Epochs</b></th>
                            <th><b>Test Loss(MSE)</b></th>
                        </tr>
                        <tr>
                            <td>Seq2Seq GANl1-v2</td>
                            <td>1</td>
                            <td>2.6551</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GANl1-v2</td>
                            <td>2</td>
                            <td>1.9143</td>
                        </tr>
                    </table>
               </div>
                <p>
                    As the result in Table2, the MSE test loss becomes much lower when we trained the model with more epochs.                                
                </p>
                <p>
                    Next, we have tried training our models with different loss functions in the generator - BCE and MSE, remaining other conditions the same. With BCE loss, the generator loss indicates how well generated trajectories resemble the target trajectories. On the contrary, applying MSE loss function on the generator directly calculated the loss between the predicted future positions and the ground truth positions.                 
                </p>
               <div>
                    <table style={{width: '300pt', tableLayout: 'fixed'}}>
                        <caption>Table 3. Test Losses on Seq2Seq GAN models with different Loss functions in the generator </caption>
                        <tr>
                            <th><b>Configuration</b></th>
                            <th><b>Epochs</b></th>
                            <th><b>Generator’s Loss function</b></th>                                
                            <th><b>Test Loss(MSE)</b></th>
                        </tr>
                        <tr>
                            <td>Seq2Seq GANl1-v1</td>
                            <td>1</td>
                            <td>BCE</td>
                            <td>78.5733</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GANl1-v2</td>
                            <td>1</td>
                            <td>MSE</td>
                            <td>2.5441</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN2-v1</td>
                            <td>1</td>
                            <td>BCE</td>
                            <td>78.55</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN2-v2</td>
                            <td>1</td>
                            <td>MSE</td>
                            <td>2.2576</td>
                        </tr>   
                    </table>
               </div>
                <p>
                    As in the Table3, on both models, the MSE test loss becomes much lower when we trained the model with more epochs because the model directly learns from the target trajectories with MSE loss functions and it might be difficult for BCE loss to give meaningful feedback when we predicted 50 future moves.                                
                </p>
                <p>
                    We modified the layers in the discriminator and compared the test losses because we believe that the discriminator loss converges to 0 too quickly, which prevents the generator from learning effectively. Instead of the Relu activation function layer, we used LeakyRelu and also applied dropout and the batch normalization. Table 4 shows the result from this trial. For all the models in Table 4, we applied MSE loss function to the generators and trained with 1 epoch.                        
                </p>
               <div>
                    <table style={{width: '300pt', tableLayout: 'fixed'}}>
                        <caption>Table 4. Test Loss on Seq2Seq GAN models with different layers in the discriminators. </caption>
                        <tr>
                            <td width="25%"><b>Configuration</b></td>
                            <td colspan="2"><b>Layers in discriminator</b></td>
                            <td width="25%"><b>Test Loss(MSE)</b></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th><b>Activation Function</b></th>
                            <th><b>Dropout, Batch Normalization</b></th>
                            <th></th>                                
                        </tr>

                        <tr>
                            <td>Seq2Seq GANl1-v2-1</td>
                            <td>Relu</td>
                            <td>Not Applied</td>
                            <td>72.6551</td>
                        </tr>

                        <tr>
                            <td><b>Seq2Seq GANl1-v2-2</b></td>
                            <td><b>Leaky Relu</b></td>
                            <td><b>Applied</b></td>
                            <td><b>2.5579</b></td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN2-v2-1</td>
                            <td>Relu</td>
                            <td>Not Applied</td>
                            <td>2.2576</td>
                        </tr>
                        <tr>
                            <td><b>Seq2Seq GAN2-v2-2</b></td>
                            <td><b>Leaky Relu</b></td>
                            <td><b>Applied</b></td>
                            <td><b>2.1783</b></td>
                        </tr>
                    </table>
               </div>
                <p>
                    As in the Table4, applying LeakyRelu, dropout and batch normalization could reduce the MSE test loss on our models.                                
                </p>
                <p>
                    With this success, we applied another change on the optimizer to see that the generator can learn better with this change. We’re currently using Adam in the generator and the discriminator as optimizers. To prevent the discriminator from learning too fast which might affect the generator’s performance, we applied different values of learning rate on the optimizer in the discriminator and saw the result. The other conditions for all the models in the Table 5 are the same - epoch of 1, MSE loss function for the generators. 
                </p>
               <div>
                    <table style={{width: '300pt', tableLayout: 'fixed'}}>
                        <caption>Table 5. Test Loss on Seq2Seq GAN models with different learning rate </caption>
                        <tr>
                            <th><b>Configuration</b></th>
                            <th><b>Learning rate in the discriminator</b></th>
                            <th><b>Test Loss(MSE)</b></th>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN1-v2-2-1</td>
                            <td>5e-3</td>
                            <td>2.5574</td>
                        </tr>

                        <tr>
                            <td>Seq2Seq GAN1-v2-2-1</td>
                            <td>1e-3</td>
                            <td>2.5579</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN1-v2-2-1</td>
                            <td>1e-4</td>
                            <td>2.1463</td>
                        </tr>
                    </table>
               </div>
                <p>
                    As in Table 5, we could get the lowest test MSE loss when we trained the discriminator with learning rate, 1e-4. 
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src={GAN6}/>
                    <span>
                        <strong> 
                            Figure 5. Training loss graphs with learning rate 1e-4. 
                        </strong> 
                    </span>
                </div>
                <p>
                    From the graph above, we can observe that  the discriminator loss in Figure 5 converges to 0 slower than Figure 4. It shows that when the learning rate is smaller, the optimizer has more gradient to update weights, which helps the model to enhance its performance.                                
                </p>
                <h4>Evaluation on Seq2Seq models</h4>
                <p>
                    After training, we tested our Seq2Seq models to check if it doesn’t fall into the mode failure and it can generate diverse predictions for the inputs. We generated one hundred sample predictions for the same batch(32) input and plotted all these generated future trajectories(100) for the randomly-picked four inputs. 
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src={GAN5}/>
                    <span>
                        <strong> 
                            Figure 6. Predicted Trajectories from the Seq2Seq GAN Model1
                        </strong> 
                    </span>
                </div>
                <div style={{textAlign: 'center'}}>
                    <img src={GAN7}/>
                    <span>
                        <strong> 
                            Figure 7. Predicted Trajectories from the Seq2Seq GAN Model2 (with yaw information)
                        </strong> 
                    </span>
                </div>
                <p>
                    As you see in Figure 6 and 7, both Seq2Seq GAN1 and Seq2Seq GAN1 do not suffer from mode collapse and successfully generates diverse trajectories.                
                </p>                 
                <p>
                    You can find all the variants of Seq2Seq GAN with detailed hyper parameters and the structures in Table 6. 
                </p>

                <div>
                    <table style={{maxWidth: '100%', tableLayout: 'fixed'}}>
                        <caption>Table 6. All the models with tuning </caption>
                        <tr>
                            <td width="10%" rowSpan='2'><b>Configuration</b></td>
                            <td width="10%" rowSpan='2'><b>Optimizer</b></td>
                            <td width="10%" rowSpan='2'><b>Batch Size</b></td>
                            <td colspan="2"><b>Loss function</b></td>
                            <td colspan="2"><b>Layers in the Discriminator</b></td>
                            <td width="10%" rowSpan='2'><b>Epoch</b></td>
                            <td width="10%" rowSpan='2'><b>Learning rate</b></td>
                            <td width="10%" rowSpan='2'><b>Test Loss(MSE)</b></td>        
                        </tr>
                        <tr>
                            <td>Generator</td>
                            <td>Discriminator</td>
                            <td>Activation Function</td>
                            <td>Dropout, Batch Norm</td>

                        </tr>
                        <tr>
                            <td>Seq2Seq GAN1-v1-1</td>
                            <td>Adam</td>
                            <td>32</td>
                            <td>BCE</td>
                            <td>BCE</td>
                            <td>Relu</td>
                            <td>X</td>
                            <td>1</td>
                            <td>1e-3</td>
                            <td>78.5733</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN2-v1-1</td>
                            <td>Adam</td>
                            <td>32</td>
                            <td>BCE</td>
                            <td>BCE</td>
                            <td>Relu</td>
                            <td>X</td>
                            <td>1</td>
                            <td>1e-3</td>
                            <td>78.5536</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN1-v2-1-1</td>
                            <td>Adam</td>
                            <td>32</td>
                            <td>MSE</td>
                            <td>BCE</td>
                            <td>Relu</td>
                            <td>X</td>
                            <td>1</td>
                            <td>1e-3</td>
                            <td>2.6551</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN1-v2-2-1</td>
                            <td>Adam</td>
                            <td>32</td>
                            <td>MSE</td>
                            <td>BCE</td>
                            <td>Leaky Relu</td>
                            <td>O</td>
                            <td>1</td>
                            <td>1e-3</td>
                            <td>2.5579</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN1-v2-2-2</td>
                            <td>Adam</td>
                            <td>32</td>
                            <td>MSE</td>
                            <td>BCE</td>
                            <td>Leaky Relu</td>
                            <td>O</td>
                            <td>1</td>
                            <td>1e-3</td>
                            <td>2.5574</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq GAN2-v2-1-1</td>
                            <td>Adam</td>
                            <td>32</td>
                            <td>MSE</td>
                            <td>BCE</td>
                            <td>Relu</td>
                            <td>X</td>
                            <td>1</td>
                            <td>1e-3</td>
                            <td>2.2576</td>
                        </tr>       
                        <tr>
                            <td>Seq2Seq GAN2-v2-2-1</td>
                            <td>Adam</td>
                            <td>32</td>
                            <td>MSE</td>
                            <td>BCE</td>
                            <td>Leaky Relu</td>
                            <td>O</td>
                            <td>1</td>
                            <td>1e-3</td>
                            <td>2.1781</td>
                        </tr>     
                        <tr>
                            <td>Seq2Seq GAN1-v2-2-3</td>
                            <td>Adam</td>
                            <td>32</td>
                            <td>MSE</td>
                            <td>BCE</td>
                            <td>Leaky Relu</td>
                            <td>O</td>
                            <td>1</td>
                            <td>1e-4</td>
                            <td>2.1463</td>
                        </tr>    
                        <tr>
                            <td><b>Seq2Seq GAN1-v2-1-1</b></td>
                            <td><b>Adam</b></td>
                            <td><b>32</b></td>
                            <td><b>MSE</b></td>
                            <td><b>BCE</b></td>
                            <td><b>Relu</b></td>
                            <td><b>X</b></td>
                            <td><b>2</b></td>
                            <td><b>1e-3</b></td>
                            <td><b>1.9143</b></td>
                        </tr>                                                   
                    </table>
               </div>
                <p>
                    1 : Train with only history positions<br/>
                    2 : Train with history positions and history yaw <br/>
                    V1 : BCE loss function in the generator<br/>
                    V2 : MSE loss function in the generator<br/>
                    Vx - 1 : Relu, without Dropout and Batch Norm in the discriminator<br/>
                    Vx - 2 : LeakyRelu, with Dropout and Batch Norm in the discriminator<br/>
                    Vx - x - 1 : With learning rate 1e-3<br/>
                    Vx - x - 2 : With learning rate 5e-3<br/>
                    Vx - x - 3 : With learning rate 1e-4<br/>
                </p>
                <p>
                    For now, the best Seq2Seq GAN model is the one with epoch2. While this model achieved the lowest test loss with 1.9143, we believe that we can achieve much lower MSE test loss if we apply Relu, dropout, and the batch norm in the layers and apply the learning rate of 1e-4 to the optimizer in the discriminator.                     
                </p>
                <h4>Future Work </h4>
                <p>Although we have implemented many variant models of Seq2Seq GAN, we found some following limitations and these still give us chances to enhance our models with future works.</p>
                <p>It didn’t</p>
                <p>
                    <li>consider the road information therefore, the generated predictions can fall off the roads.</li>
                    <li>consider the interaction with neighbors including other cars, pedestrians, or cyclists.</li>
                    <li>have a chance to learn enough with more epochs because of time and computational limit </li>
                </p>                    
                <p>To complement these limitations and improve our Seq2Seq GAN Model, we can introduce the following methods in the future work.</p>
                <p>
                    <li>Training the model with optimal parameters and with more epochs. </li>    
                    <li>Combining with a CNN model including road information from images.</li>    
                    <li>Applying the concept of Social GAN which embraces interactions among neighbors.</li>    
                </p>                    
                <p>With the above approaches, we believe that our Seq2Seq GAN model can generate more plausible and precise predictions on the multiple next moves. </p>

              </div>
           </div>
        )
    }
    }
