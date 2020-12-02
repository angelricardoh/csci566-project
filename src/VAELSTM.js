import React from "react";
import BaseComponent from './BaseComponent'
import "./VAELSTM.css";
import Figure from 'react-bootstrap/Figure'
import vae1 from './images/vaelstm/vae1.png'
import vae2 from './images/vaelstm/vae2.png'
import vae3 from './images/vaelstm/vae3.png'
import vae4 from './images/vaelstm/vae4.png'
import vae5 from './images/vaelstm/vae5.png'
import vae6 from './images/vaelstm/vae6.png'
import vae7 from './images/vaelstm/vae7.png'
import vae8 from './images/vaelstm/vae8.png'
import vae9 from './images/vaelstm/vae9.png'
import vaea from './images/vaelstm/vaea.png'
import vaeb from './images/vaelstm/vaeb.png'
import vaec from './images/vaelstm/vaec.png'

export default class VAELSTM extends BaseComponent {
    render() {
        return (
            <div id='outer_container'>
                <div id='container'>
                    <h2>VAE+LSTM</h2>
                    <p>This model follows the variational model architecture seen in class using LSTM layers to learn the probability distribution of the trajectories and as a result output similar trajectory within the same distribution.</p> 
                    <p>We present two configurations, Configuration A, uses a hidden layer and splits the hidden layer into two tensors mean and standard deviation. The output of parametrization trick is concatenated with the cell state and feeds the decoder to output next n positions.</p>
                    <p>Configuration B uses both hidden layer and cell state in two parametrization phases and the output is concatenated and is fed to the decoder to output next n positions.</p>
                    <div style={{textAlign: 'center'}}>
                        <Figure><Figure.Image class='vae1' src={vae1}/><Figure.Caption>Figure 1. VAE+LSTM method</Figure.Caption></Figure>
                    </div>

                    <br></br>
                    <p>The following table shows the losses at evaluation time using MSE as criterion achieved after 10000 iterations, number of history positions was 10, predicted positions 50 and beta = 0.2 for VAE.</p>
                    <table style={{width: '90%'}}>
                        <thead>
                            <tr>
                                <th>Configuration</th>
                                <th>Experiment details</th>
                                <th>Loss function</th>
                                <th>Learning rate</th>
                                <th>Iterations</th>
                                <th>Average test loss</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>A</td>
                            <td>Model is trained with batch size = 32, beta = 0.2, AdamW optimizer, weight decay = 0.0005</td>
                            <td>MSE Loss reduction none</td>
                            <td>1e-3</td>
                            <td>10000</td>
                            <td>2.1587</td>
                        </tr>
                        <tr>
                            <td><b>B</b></td>
                            <td><b>Model is trained with batch size = 32, beta = 0.2, AdamW optimizer, weight decay = 0.0005</b></td>
                            <td><b>MSE Loss reduction none</b></td>
                            <td><b>1e-3</b></td>
                            <td><b>10000</b></td>
                            <td><b>1.9585</b></td>
                        </tr>
                    </table>
                    <br></br>

                    <div style={{textAlign: 'center'}}><Figure><Figure.Image class='loss' src={vaec}/><Figure.Caption>Figure 2. Configuration B total training and validation loss</Figure.Caption></Figure></div>
                    <div style={{textAlign: 'center'}}><Figure><Figure.Image class='loss' src={vae2}/><Figure.Caption>Figure 3. Configuration A test loss</Figure.Caption></Figure></div>
                    <div style={{textAlign: 'center'}}><Figure><Figure.Image class='loss' src={vae3}/><Figure.Caption>Figure 4. Configuration B test loss</Figure.Caption></Figure></div>
                    <div style={{textAlign: 'center'}}><Figure><Figure.Image class='loss' src={vae4}/><Figure.Caption>Figure 5. Configuration B Reconstruction and KL test loss</Figure.Caption></Figure></div>
                    <p>Both configurations produce similar results, total loss curve, reconstruction and kl loss are similar as well.</p>
                    <p>As it can be appreciated, VAE+LSTM average losses seem to be slightly better than other LSTM models, but not as good as other models like Seq2Seq GAN. Our assumption is that this is because the model is creating in some cases sharper trajectories since the model is not tuned or trained enough to output smooth trajectories for such scenarios and while most trajectories are good approximations when compared to ground truth trajectories in general seem to be a little bit unnatural where Seq2SeqGAN model with the help of the generator seems to output more natural (real) future predictions.</p>
                    <p>In the following example we can see the predicted positions for an agent. Here we can see that the first 5 positions have sharp changes with respect to the last history positions, but after those positions it seems to project a reasonable trajectory.</p>
                    <div style={{textAlign: 'center'}}><Figure><Figure.Image  src={vae5}/><Figure.Caption>Figure 6. Next 50 calculated positions for random agent</Figure.Caption></Figure></div>
                    <p>Finally, here are some random sampled trajectories generated from the agent's test set during evaluation time, as we can see the model generates different predicted trajectories based on the history positions which shows that while some trajectories behavior seem similar the coordinate positions are not the same and as a result there is some diversity on the trajectories generated by this model.</p>
                    <div style={{textAlign: 'center'}}>
                        <Figure>
                            <img class='grid' src={vae6}/>
                            <img class='grid' src={vae7}/>
                            <img class='grid' src={vae8}/>
                            <br></br>
                            <img class='grid' src={vae9}/>
                            <img class='grid' src={vaea}/>
                            <img class='grid' src={vaeb}/>
                        </Figure>
                        <Figure.Caption>Figure 7. Randomly sampled trajectories</Figure.Caption>
                    </div>
                </div>
            </div>
        )
    }
}