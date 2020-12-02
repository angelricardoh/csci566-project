import React from "react";
import "./MainContainer.css";

export default function Conclusion() {
    return (
        <div>
            <h2>Conclusion</h2>
            <p>All in all, we are excited about our results and our models’ ability to surpass the baseline model. Our approach to this problem was to perform an in-depth analysis of several deep learning approaches, testing many architectures like CNN-GRU, LSTM, and GAN.<br></br>
            Through our testing, we were able to iterate on our architectures through both parameter tuning and changes to the structure of each model. With these trials, we were able to get a holistic view of the problem and gain an understanding of how changes to our architectures can impact its performance. Our iterative approach sparked our interest in utilizing the Seq2Seq model on top of our existing architectures or even prompted us to apply advanced techniques like Social GAN and tweak its architecture to best match our dataset. For more information on other architectures we tested, please see the other tabs listed at the top of the page.</p>
            <p>You can find our code <a href='https://github.com/deepnewworld/csci566-project/tree/master/Models' >here.</a></p>
        </div>
    )
}

