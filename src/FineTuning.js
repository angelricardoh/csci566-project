import React from "react";
import "./MainContainer.css";

export default function FineTuning() {
    return (
        <div>
            <h2>Fine Tuning</h2>
            <p><i><b>Seq2Seq GAN and Seq2Seq GAN variant models</b></i><br></br>
            Based on the two Seq2Seq GAN models, we tried parameter-tuning by changing learning rates(1e-3, 5e-3, 1e-4), loss functions(BCE, MSE), and the layers on the discriminators. So far, the best Seq2Seq GAN Model among these is the Seq2Seq GAN-v1 with a learning rate of 0.001, batch size of 32, MSE loss function on the generator, and epochs of 2 and the test loss of this model is 1.9143. More detailed information is on the Seq2Seq tab.</p>
            <p><i><b>Social-LSTM and social-LSTM variant Models</b></i><br></br>
            For social-LSTM and its variants, there exist multiple parameters that we can tune.  For both models, we tried six different learning rates(1e-3, 3e-3, 5e-3, 8e-3, 1e-2, 2e-2) and found that 1e-03 is the best one. For social-LSTM’s neighborhood grid, we tried the grid’s size from (1,1) to (10, 10), it seems that (7,7) gives the minimum loss for the training part. For the variant method, we tried one direction from 1 to 5 and another one is from 7 to 15. Among all these trials, (13, 3) returns the best loss for the training datasets. In addition, for the convolutional layer in the variant method, we tried 3 by 3, 4 by 4 and 5 by 5. At the end, 3 by 3 wins.</p>
        </div>
    )
}