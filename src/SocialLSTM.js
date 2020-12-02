import React from "react";
import BaseComponent from './BaseComponent'
import "./SocialLSTM.css";

import slstm1 from './images/main/SLSTM1.png'
import slstmequ from './images/main/SLSTM0.png'
import slstmcode from './images/main/slstmcode.png'
import slstm2 from './images/main/SLSTM2.png'
import slstmequ2 from './images/main/SLSTM3.png'
import result1 from './images/main/slstmtrainloss.png'
import result2 from './images/main/slstmtestloss.png'


export default class SocialLSTM extends BaseComponent {
    render() {
        return (
            <div id='outer_container'>
                <div id='container'>
                    <h2> Social LSTM and its variant models</h2>
                        <p>
                            Alexandre, Kratarth, et. al. pointed out that humans have the innate ability to  “read” one another. Any autonomous vehicle navigating such a scene should be able to foresee the future positions of people (including vehicles driven by other people or pedestrians) and accordingly adjust its path to avoid collisions. Inspired by this paper, we want to take the “neighbor's” influence into consideration. For this project, we have one LSTM for each vehicle. This LSTM learns the spatial coordination and predicts their future positions as shown in the Figure 1.
                        </p>
                        <div style= {{textAlign: 'center'}}>
                            <img scr={slstm1}/>
                            <span>
                                <strong>
                                    Figure 1. Social LSTM Model Architecture
                                </strong>
                            </span>
                        </div>
                        
                        <p>
                                        The LSTM weights are shared across all the sequences. Different from the vanilla LSTM, it has an additional layer: social pooling, which combines the information from all neighboring states. Their calculation follows the following equations:

                        </p>
        
                        <div style= {{textAlign: 'center'}}>
                            <img scr={slstmequ}/>
                            <span>
                                <strong>
                                    Equation 1. Social Pooling Layer equation  
                                </strong>
                            </span>
                        </div>
        
                        <p>
                                            The pseudo code is shown in Algorithm 1:
                        </p>
        
                        <div style= {{textAlign: 'center'}}>
                            <img scr={slstmcode}/>
                        </div>
        
                        <p>
                                However, this model has some inherent limitations:
                                    <ul>
                                        <li>Simply adding all the neighbor’s information does not make sense. People care more about the neighborhood closer to them than those people who are far away from them. </li>
                                        <li>This social LSTM architecture is a generalization method. However, if we can give a more specific classification, it is highly likely that we can improve the prediction’s accuracy. </li>
                                        <li>For the social LSTM architecture, when the agent falls into a grid, it will be considered as a neighborhood. For the architecture, the grid we considered is a square. It seems unreasonable because agents move faster in the speed’s direction than the other. </li>
                                    </ul>
                                In order to solve these, we need to modify current model to:
                                    <ul>
                                        <li>Introducing the spatial information to the max-pooling part, which can be realized by using the convolutional layer.</li>
                                        <li>In the real world, when a car’s move, it only has two classes: longitude and latitude. For the longitude classes, it can be split into 3 situations: speed up, normal and slow down; turning left, staying the same and turning right are these 3 situations for the latitude class. For the dataset we used for this project, it does not have classes, so we preprocess the dataset, giving them corresponding classes. </li>
                                        <ul>
                                            <li>For the speed class, we define that if the average speed over the next 5 time stamps is over than 1.2 speed at the current time, it will be classified as speed up. If the average speed over the next 5 time stamps is less than 0.8 speed at the current time, it will be classified as slow down. Between 0.8 and 1.2, it is normal.</li>
                                            <li>For the direction class, using the next 5 time stamps its move over 5 feet or not to decide whether this agent turn left or right. If its move within 5 feet. It will be thought as stay same. This 5 feet is the half-width of the US urban lane. We assume that if the agent/car moves half of the urban lane, it is highly likely that it will turn its direction.</li>
                                        </ul>
                                        <li>For the grid, instead of considering the square, tried to consider rectangular. </li>
                                    </ul>
     
                                Based on this changes, the architecture changes as the follows:
                        </p>
        
                        <div style= {{textAlign: 'center'}}>
                            <img scr={slstm2}/>
                            <span>
                                <strong>
                                    Figure 2. Social LSTM variant Model Architecture
                                </strong>
                            </span>
                        </div>
        
        
                        <p>
                                        For this model, the goal changes to maximize the probability of the prediction based on the observation (here the observation is the sequence of each agent’s position). The the objective function is:
                        </p>
        
        
                        <div style= {{textAlign: 'center'}}>
                            <img scr={slstmequ2}/>
                        </div>
        
                        <p>For this model, since we predict the probability, we want to minimize the negative log likelihood. But in order to be comparable with other models, here we calculated the MSE loss.
                        
                        The training result is shown as follows:
                        </p>
        
                        <div style= {{textAlign: 'center'}}>
                            <img scr={result1}/>
                            <span>
                                <strong>
                                    Figure 3. Training Loss for social LSTM and its variant
                                </strong>
                            </span>
                        </div>
        
                        
                        <p>
                                        As we can see that social LSTM variant is slightly better than the social LSTM model. This comes from the following reasons:
                                        <ul>
                                            <li>Since we consider the spatial information about the neighbourhood: the closer, the more important. So social LSTM variant models should capture the information more precisely, which will return more accurate results.</li>
                                            <li>Same as considering the speed influence: not using the square grid, instead using rectangular grid. This change will make us consider more useful neighborhoods.</li>
                                            <li>Using the classes to give different input to make it more accurate.</li>
                                        </ul>
        
                                        However, this slight advantage may comes from:
                                        <ul>
                                            <li>Since the dataset does not have any classes. We  define the classes by ourselves. Maybe this is not accurate, in the future, perhaps we should try some other criterion to classify the dataset.</li>
                                        </ul>
                                        Since we found that the social-LSTM variant  model is better than social-LSTM, we should use the social-LSTM variant model for testing data. The result about the testing loss w.r.t prediction length is as follows:

                        </p>
        
                        
                        <div style= {{textAlign: 'center'}}>
                            <img scr={result2}/>
                            <span>
                                <strong>
                                    Figure 4. Testing Loss for social LSTM variant
                                </strong>
                            </span>
                        </div>
        
                        <p>
                                        We changed the predicting length from 1 to 50.  The longer prediction length, the larger test loss. The loss is like a linear regression. Their loss is similar to the training loss, which confirm that we do not have the overfitting issue. 
                        </p>
        
                            
            
                </div>
            </div>
        )
    }
}
