import React from "react";
import Motivation1 from './images/Motivation1.png'
import SDCAR from './images/SDCAR.gif'
import SDCAR2 from './images/SDCAR2.gif'
import SLSTM0 from './images/SLSTM0.png'
import SLSTM1 from './images/SLSTM1.png'
import SLSTM2 from './images/SLSTM2.png'
import SLSTM3 from './images/SLSTM3.png'
import "./MainContainer.css";

function MainContainer(props) {
    return (
        <div id='outer_container'>
            <div id='container'>
                <h2>Problem Statement</h2>
                <p>One of the most primitive tasks of autonomous vehicles is to predict the future positions of other vehicles and the vehicle itself amidst traffic. In this project, we aim to predict the future positions of the other vehicles/agents (cyclists/cars/pedestrians). We are using the dataset provided by Lyft known as the l5kit. This dataset contains over 1000 hours of scenes with labeled positional information of objects in the scene such as vehicles, cyclists, and pedestrians. The scenes in the dataset are from a 6.8 mile route chosen by the Lyft team. The input data will be the sequence of spatial coordination about each vehicle (both for train and test) which can also include road information of the given agents environment.  The output will be the future spatial coordination. Given the uncertainty of live traffic, we have also aimed to predict the future positions for multiple trajectories. 
                </p>
                <img id='motivation_pic' alt="Motivation1" src={Motivation1} class='center'/>
                <div id='more_motivation_pics_div'>
                    <img alt="Picture2" src={SDCAR}/>
                    <img alt="Picture3" src={SDCAR2}/>
                </div>
                <h2>Motivation</h2>
                <p>Autonomous vehicles are the future of on land mobility for mankind. But, we are still far fetched from seamless autonomous transportation and we need to resolve many significant challenges before we can truly travel autonomous. One of the most important aspects of any autonomous system is the prediction of the next move, let it be an automatic game, or even an automatic vehicle, the challenge to predict the next move is significant for its success. It's of utmost importance to correctly predict the next position of the vehicle as it will not only determine the direction in which the vehicle should move but will also impact the safety of the passenger and also others on the road.What makes this challenge even more critical is the fact that the next position of the vehicle should be determined keeping in mind not only the surroundings but also the destination and traffic agents. The impact of this solution is enormous in autonomous vehicles being successful and making transportation seamless and safe which has been a driving force behind us choosing to work on this problem statement. It is an exciting opportunity to work on a problem that will solve some pressing real world use case and make a global impact.
                </p>
                <h2>
                    Methods
                    </h2>
                    <h4>Social LSTM and its variant</h4>
                    <p>-
                Based on Alexandre etc’s research, we tried to take the neighbor’s effect into consideration combined with LSTM model. We added a max-pooling layer between each time stamp, its formulation will be:</p>
                <div style={{textAlign: 'center'}}> 
                    <img src={SLSTM0}/>
                    <img src={SLSTM1}/>
                    <p>Fig 1. Social LSTM method</p>
                </div>
                <p>
                                    However, this method has the following limitation:
                Simply adding all the neighbor’s information does not make sense. People care more about the neighborhood closer to them than those people who are far away from them.
                This social LSTM architecture is a generalization method. However, if we can give a more specific classification, it is highly likely that we can improve the prediction’s accuracy. 
                For the social LSTM architecture, when the agent falls into a grid, it will be considered as a neighborhood. For the architecture, the grid we considered is a square. It seems unreasonable because agents move faster in the speed’s direction than the other. 

                Based on this two observations, we can modify the current social-LSTM architecture as below:
                Introducing the spatial information max-pooling part, which can be realized by using the convolutional layer.
                In the real world, when a car’s move, it only has two classes: longitude and latitude. For the longitude classes, it can be split into 3 situations: speed up, normal and slow down; turning left, staying the same and turning right are these 3 situations for the latitude class. More details are available on the other url.
                For the grid, instead of considering the square, tried to consider rectangular. 

                The variant changed to:
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src={SLSTM2}/>
                    <p>Fig 2. Social-LSTM variant</p>
                </div>
                <p>For this model, we change our goal from directly predicting the position to maximum the probability of prediction and return the ones with the highest probability. The objective function is:
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src={SLSTM3}/>
                </div>
                <h2>Evaluation Generalization</h2>
                <p>
                For social-LSTM and its variant, there exist multiple parameters that we can tune.  For both methods, we tried six different learning rate from 1e-3 to 0.02 (including 0.001, 0.003, 0.005, 0.008, 0.01, 0.02) and found that 1e-03 is the best one. For social-LSTM’s neighborhood grid, we tried the grid’s size from (1,1) to (10, 10), it seems that (7,7) gives the minimum loss for the training part. For the variant method, we tried one direction from 1 to 5 and another one is from 7 to 15. Among all these trials, (13, 3) returns the best loss for the training datasets. In addition, for the convolutional layer in the variant method, we tried 3 by 3, 4 by 4 and 5 by 5. At the end, 3 by 3 wins.
                </p>         
                <h2>
                    Results
                    </h2>
                    <p>
                    After training all of our models and comparing their performance on the test set, it was clear that Seq2Seq GAN had the best performance, though our more advanced models all achieved similar results. We are happy to report that all of our models perform significantly better than the provided Lyft baseline, with all presented models achieving over 3 times better performance. The following chart shows the average MSE test loss from our most interesting models:
                    </p>
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
                    <p>
                        While Social LSTM was not the best performer, we believe in its potential and that our current architecture or even a slightly modified version can achieve a much lower loss, especially with more training. Moreover, due to computational constraints, our social LSTM does not differentiate different types of objects (i.e. Car, Cyclist, Pedestrian) when attempting to compute their trajectories. This loss of information could prevent the model from achieving a better loss.
Our Seq2Seq Gan architecture achieved the best performance, performing more than 6x better than the baseline model. While the Seq2Seq architecture is often used for text translations, we were interested to see its performance in the trajectory prediction domain. To our surprise, Seq2Seq performed extremely well, allowing our Seq2Seq GAN model to achieve the best test loss. 
                    </p>
                    <h2>Future Work</h2>
                    <p>
                    It would be interesting to try some transformer based networks for trajectory prediction and compare its performance with other models. This dataset contains multiple facets of vehicle information like historical availability, various views like semantic, satellite, etc.  which can be utilized to get more precise predictions. Also, for the seq-to-seq gan model, combining it with some CNN-based architecture to incorporate image information to improve the generator would be a good idea to explore. 
                    </p>
            </div>
        </div>
    )
}

export default MainContainer;