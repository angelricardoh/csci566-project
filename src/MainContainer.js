import React from "react";
import Motivation1 from './images/main/Motivation1.png'
import SDCAR from './images/main/SDCAR.gif'
import SDCAR2 from './images/main/SDCAR2.gif'
import SLSTM0 from './images/main/SLSTM0.png'
import SLSTM1 from './images/main/SLSTM1.png'
import SLSTM2 from './images/main/SLSTM2.png'
import SLSTM3 from './images/main/SLSTM3.png'
import GAN1 from './images/main/GAN1.png'
import GAN2 from './images/main/GAN2.png'
import GAN3 from './images/main/GAN3.png'
import GAN4 from './images/main/GAN4.png'
import GAN5 from './images/main/GAN5.png'
import { Link } from "react-router-dom";
import "./MainContainer.css";

function MainContainer(props) {
    return (
        <div id='outer_container'>
            <div id='container'>
                <h2>Problem Statement</h2>
                <p>One of the most primitive tasks of autonomous vehicles is to predict the future positions of other vehicles and the vehicle itself amidst traffic. In this project, we aim to predict the future positions of the other vehicles/agents (cyclists/cars/pedestrians). 
We are using the dataset provided by Lyft known as the l5kit. This dataset contains over 1000 hours of scenes with labeled positional information of objects in the scene such as vehicles, cyclists, and pedestrians. The scenes in the dataset are from a 6.8 mile route chosen by the Lyft team. The input data will be the sequence of spatial coordination about each vehicle (both for train and test) which can also include road information of the given agents environment.  The output will be the future spatial coordination. Given the uncertainty of live traffic, we have also aimed to predict the future positions for multiple trajectories.</p>
                <img id='motivation_pic' alt="Motivation1" src={Motivation1} class='center'/>
                <div id='more_motivation_pics_div'>
                    <img alt="Picture2" src={SDCAR}/>
                    <img alt="Picture3" src={SDCAR2}/>
                </div>
                <h2>Motivation</h2>
                <p>Autonomous vehicles are the future of on land mobility for mankind. But, we are still far fetched from seamless autonomous transportation and we need to resolve many significant challenges before we can truly travel autonomous. One of the most important aspects of any autonomous system is the prediction of the next move, let it be an automatic game, or even an automatic vehicle, the challenge to predict the next move is significant for its success. It's of utmost importance to correctly predict the next position of the vehicle as it will not only determine the direction in which the vehicle should move but will also impact the safety of the passenger and also others on the road. What makes this challenge even more critical is the fact that the next position of the vehicle should be determined keeping in mind not only the surroundings but also the destination and traffic agents. The impact of this solution is enormous in autonomous vehicles being successful and making transportation seamless and safe which has been a driving force behind us choosing to work on this problem statement. It is an exciting opportunity to work on a problem that will solve some pressing real world use cases and make a global impact.</p>
                <h2>Methods</h2>
                <p>To resolve this issue, we have implemented various methods and compared their performance by test loss in the Result section below. 
Firstly, we explored <Link to='/resnet-gru'><b>Resnet-Gru</b></Link> and <Link to='/lstm'><b>LSTM/Seq2Seq LSTM</b></Link> models. Based on the LSTM model, we added VAE and GAN structure and created <Link to='/vae-lstm'><b>VAE+LSTM</b></Link> and <Link to='/seq2seqGAN'><b>Seq2Seq GAN</b></Link>. And finally, we implemented <Link to='/s-lstm'><b>Social LSTM</b></Link> which incorporates the neighbors' effect into the model</p>
                <p>In this page, we mainly talk about the two most interesting models among these. For the detailed information about each model we created, please check the other tabs.</p>
                <p><i><b><Link to='/seq2seqGAN' className="link">Seq2Seq GAN</Link> and its variant</b></i></p>
                <div style={{textAlign: 'center'}}><img src={GAN1} class='ganmodel'></img><p>Figure 1. Generator of Seq2Seq GAN Model-1</p></div>
                <div style={{textAlign: 'center'}}><img src={GAN2} class='ganmodel'/><p>Figure 2. Discriminator of Seq2Seq GAN Model</p></div>
                <p>To the baseline LSTM model, we added the GAN and created a new model. We call this as <b>Seq2Seq GAN</b> here. In this model, the generator generates the next 50 moves based on the past 11 positions and the discriminator determines whether it’s real or fake. We expected that this structure can avoid the blurry prediction and make more accurate predictions.</p>
                <p>To improve Seq2Seq GAN Model-1, we incorporated the past yaw information as well and made a Seq2Seq GAN Model-2.</p>
                <div style={{textAlign: 'center'}}><img src={GAN3} class='ganmodel'/><p>Figure 3. Generator of Seq2Seq GAN Model-2 (with yaw information)</p></div>
                <p>As you see the Table 1, compared to the Seq2Seq GAN Model-1, the Seq2Seq GAN Model-2 was improved in the sense of test loss under the same conditions.</p>
                <br></br>
                <table style={{width: '30%'}}>
                    <caption>Table 1. Test Losses of different Seq2Seq GAN Models</caption>
                    <tr>
                        <td>Models</td>
                        <td>Epochs</td>
                        <td>Test Loss(MSE)</td>
                    </tr>
                    <tr>
                        <td>Seq2Seq GAN Model-1</td>
                        <td>1</td>
                        <td>2.6551</td>
                    </tr>
                    <tr>
                        <td>Seq2Seq GAN Model-2</td>
                        <td>1</td>
                        <td>2.2576</td>
                    </tr>
                </table>
                <div style={{textAlign: 'center'}}><img src={GAN4}/><p>Figure 4. Loss graphs during training for Seq2Seq GAN</p></div>
                <p>After the training, we tested our Seq2Seq model to check if it doesn’t fall into the mode failure and it can generate diverse predictions for the inputs. We generated one hundred sample predictions for the same batch(32) input and plotted all the generated future trajectories for the randomly-picked four inputs. </p>
                <div style={{textAlign: 'center'}}><img src={GAN5}/><p>Figure 5. Predicted Trajectories from the Seq2Seq GAN Model</p></div>
                <p>As you see in Figure 5, the Seq2Seq GAN model does not suffer from mode collapse and successfully generates diverse trajectories.</p>
                <br></br>

                <p><i><b><Link to='/seq2seqGAN' className="link">Social LSTM</Link> and its variant</b></i></p>
                <div style={{textAlign: 'center'}}>
                    <img src={SLSTM1} class='model'/>
                    <p>Fig 6. Social LSTM method</p>
                </div>
                <p>-Based on Alexandre etc’s research, we tried to take the neighbor’s effect into consideration combining with the LSTM model. For this, we added a max-pooling layer between each time stamp, its formulation is:</p>
                <div style={{textAlign: 'center'}}><img src={SLSTM0}/></div>
                <br></br>
                <p>However, this method has the following limitation:
                    <ul>
                        <li>Simply adding all the neighbor’s information does not make sense. People care more about the neighborhood closer to them than those people who are far away from them.</li>
                        <li>This social LSTM architecture is a generalization method. However, if we can give a more specific classification, it is highly likely that we can improve the prediction’s accuracy. </li>
                        <li>For the social LSTM architecture, when the agent falls into a grid, it will be considered as a neighborhood. For the architecture, the grid we considered is a square. It seems unreasonable because agents move faster in the speed’s direction than the other. </li>
                    </ul>
                    Based on this two observations, we can modify the current social-LSTM architecture as below:
                    <ul>
                        <li>Introducing the spatial information max-pooling part, which can be realized by using the convolutional layer.</li>
                        <li>In the real world, when a car moves, it only has two classes: longitude and latitude. For the longitude classes, we splitted into 3 situations: speed up, normal and slow down; turning left, staying the same and turning right are these 3 situations for the latitude classes. More details are available on the Social LSTM tab.</li>
                        <li>For the grid, instead of considering the square, tried to consider rectangular.</li>
                    </ul>
                    As a result of the modifications, we created a Social LSTM variant model as Figure 6. 
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src={SLSTM2} class='model'/>
                    <p>Fig 7. Social-LSTM variant</p>
                </div>
                <p>For this model, we slightly changed our goal from directly predicting the future trajectory to maximizing the probability of prediction and returning the one with the highest probability. The objective function is:</p>
                <div style={{textAlign: 'center'}}>
                    <img src={SLSTM3} class='formula'/>
                    <p>Figure 8. Training Losses of Social LSTM and its variant model</p>
                </div>
                <h2>Fine Tuning</h2>
                <br></br>
                <p><i><b>Seq2Seq GAN and Seq2Seq GAN variant models</b></i><br></br>
                Based on the two Seq2Seq models, we tried parameter-tuning by changing learning rates(1e-3, 5e-3, 1e-4), loss functions(BCE, MSE), and layers on the discriminators. So far, the best Seq2Seq GAN Model among these is the model-1 with a learning rate of 0.001, batch size of 32, MSE loss function on the generator, and epochs of 2 and the test loss of this model is 1.9143. More detailed information is on the Seq2Seq tab.</p>
                <p><i><b>Social-LSTM and social-LSTM variant Models</b></i><br></br>
                For social-LSTM and its variants, there exist multiple parameters that we can tune.  For both models, we tried six different learning rates(1e-3, 3e-3, 5e-3, 8e-3, 1e-2, 2e-2) and found that 1e-03 is the best one. For social-LSTM’s neighborhood grid, we tried the grid’s size from (1,1) to (10, 10), it seems that (7,7) gives the minimum loss for the training part. For the variant method, we tried one direction from 1 to 5 and another one is from 7 to 15. Among all these trials, (13, 3) returns the best loss for the training datasets. In addition, for the convolutional layer in the variant method, we tried 3 by 3, 4 by 4 and 5 by 5. At the end, 3 by 3 wins.</p>
                <h2>Results</h2>
                <p>After training all of our models and comparing their performance on the test set, it was clear that Seq2Seq GAN had the best performance, though our more advanced models all achieved similar results. We are happy to report that all of our models perform significantly better than the provided Lyft baseline, with all presented models achieving over 3 times better performance. The following chart shows the average MSE test loss from our most interesting models:</p>
                    <table>
                        <tr>
                            <th><b>Method</b></th>
                            <th><b>Test loss</b></th>
                        </tr>
                        <tr>
                            <td>LSTM - Positions</td>
                            <td>2.257230417</td>
                        </tr>
                        <tr>
                            <td>LSTM - Positions + BEV Image</td>
                            <td>2.591220331</td>
                        </tr>
                        <tr>
                            <td>LSTM - Positions + Agent View + Road Images</td>
                            <td>3.11691956</td>
                        </tr>
                        <tr>
                            <td>LSTM - All Available Data</td>
                            <td>2.6480581797</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq LSTM - POS</td>
                            <td>2.998081285</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq LSTM - CNN</td>
                            <td>3.61865188</td>
                        </tr>
                        <tr>
                            <td>VAE-LSTM Configuration A</td>
                            <td>2.3270</td>
                        </tr>
                        <tr>
                            <td>VAE-LSTM Configuration B</td>
                            <td>2.2085</td>
                        </tr>
                        <tr>
                            <td>Seq2Seq LSTM - Positions + Agent View + Road Images</td>
                            <td>2.290573328</td>
                        </tr>
                        <tr>
                            <td>Seq2SeqGAN Configuration V2</td>
                            <td><b>1.9143</b></td>
                        </tr>
                        <tr>
                            <td>Seq2SeqGAN Configuration V4-1</td>
                            <td>2.1783</td>
                        </tr>
                        <tr>
                            <td>Seq2SeqGAN Configuration V4-2</td>
                            <td>2.2576</td>
                        </tr>
                        <tr>
                            <td>Social LSTM-v2</td>
                            <td>3.55784371</td>
                        </tr>
                    </table>
                    <p>While Social LSTM was not the best performer, we believe in its potential and that our current architecture or even a slightly modified version can achieve a much lower loss, especially with more training. Moreover, due to computational constraints, our social LSTM does not differentiate different types of objects (i.e. Car, Cyclist, Pedestrian) when attempting to compute their trajectories. This loss of information could prevent the model from achieving a better loss.
Our Seq2Seq Gan architecture achieved the best performance, performing more than 6x better than the baseline model. While the Seq2Seq architecture is often used for text translations, we were interested to see its performance in the trajectory prediction domain. To our surprise, Seq2Seq performed extremely well, allowing our Seq2Seq GAN model to achieve the best test loss. </p>
                    <h2>Future Work</h2>
                    <p>Although we implemented various models and tried many different approaches with those models, we found some limitations on our models from our experiments and they still give us chances to enhance our models with future works.</p>
                    <p>For Seq2Seq GAN,  it didn’t consider
                        <ul>
                            <li>the road information therefore, the generated predictions can fall off the roads.</li>
                            <li>the interaction with neighbors including other cars, pedestrians, or cyclists.</li>
                        </ul>
                    </p>
             
                    <p>To complement these limitations and improve our Seq2Seq GAN Model, we can introduce the following methods in the future work.
                        <ul>
                            <li>Training the model with optimal parameters and with more epochs.</li>
                            <li>Combining with a CNN model including road information from images.</li>
                            <li>Applying the concept of Social GAN which embraces interactions among neighbors.</li>
                        </ul>
                    </p>
  
                    <p>For our Social LSTM, the current model does not 
                        <ul><li>differentiate different types of objects(i.e. Car, Cyclist, Pedestrian) when attempting to compute their trajectories because of computational constraints.</li></ul>
                    </p>
                    <p>However, we believe that our Social LSTM model can provide more precise predictions with much lower loss if we apply the former approach and train it with more epochs.  </p>
                    <p>One potential approach we had hoped to try was utilizing a transformer based network to compare its performance with other models. This dataset contains multiple facets of vehicle information like historical availability, various views like semantic, satellite, etc.  which can be utilized to get more precise predictions. </p>

                    <h2>Conclusion</h2>
                    <p>All in all, we are excited about our results and our model’s ability to surpass the baseline model. Our approach to this problem was to perform an in-depth analysis of several deep learning approaches, testing many architectures like CNN-GRU, LSTM, and GAN. Through our testing, we were able to iterate on our architectures through both parameter tuning and changes to the structure of each model. With these trials, we were able to get a holistic view of the problem and gain an understanding of how changes to our architectures can impact its performance. Our iterative approach sparked our interest in utilizing the Seq2Seq model on top of our existing architectures or even prompted us to apply advanced techniques like Social GAN and tweak its architecture to best match our dataset. For more information on other architectures we tested, please see the other tabs listed at the top of the page.</p>
            </div>
        </div>
    )
}

export default MainContainer;