import React from "react";
import "./MainContainer.css";

export default function FutureWork() {
    return (
        <div>
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
                With the above approach, we believe that our Seq2Seq GAN model can generate more plausible and precise predictions on the multiple next moves. 
            </p>

            <p>For our Social LSTM, the current model does not 
                <ul><li>differentiate different types of objects(i.e. Car, Cyclist, Pedestrian) when attempting to compute their trajectories because of computational constraints.</li></ul>
            </p>

            <p>However, we believe that our Social LSTM model can be improved much more from the current model, if we apply the addressed approach and train it with more epochs. Some attributes of social LSTM that make us hopeful that it can improve accuracy with more training are:</p>
            <ul>
                <li>Since we consider the spatial information about the neighbourhood: the closer, the more important. So social LSTM variant models should capture the information more precisely, which will return more accurate results.</li>
                <li>Same as considering the speed influence: not using the square grid, instead using rectangular grid. This change will make us consider more useful neighborhoods.</li>
                <li>Using the classes to give different input to make it more accurate.</li>
            </ul>
            <p>One potential approach we had hoped to try was utilizing a transformer based network to compare its performance with other models. This dataset contains multiple facets of vehicle information like historical availability, various views like semantic, satellite, etc.  which can be utilized to get more precise predictions.</p>
        </div>
    )
}