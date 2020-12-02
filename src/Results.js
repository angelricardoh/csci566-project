import React from "react";
import ResultsTable from './ResultsTable'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'
import results1 from './images/main/results1.png'
import results2 from './images/main/results2.png'
import results3 from './images/main/results3.png'
import results4 from './images/main/results4.png'
import results5 from './images/main/results5.png'
import results6 from './images/main/results6.png'
import "./MainContainer.css";

export default function Results() {
    return (
        <div>
            <h2>Results</h2>
            <p>After training all of our models, we examined our models performance on the testset and generated the next fifty positions for each agent. Figure 7 and Figure 8 shows the future trajectories predicted by one of our models on top of the maps.</p>
            <Container style={{textAlign:'center'}}>
                <Figure>
                    <Row style={{textAlign:'center'}}>
                        <Figure><Figure.Image src={results1}/><Figure.Caption>Model after cycle 1</Figure.Caption></Figure>
                        <Figure><Figure.Image src={results2}/><Figure.Caption>Model after cycle 2</Figure.Caption></Figure>
                        <Figure><Figure.Image src={results3}/><Figure.Caption>Model after cycle 3</Figure.Caption></Figure>
                    </Row>
                    <Figure.Caption>Figure 7. Semantic view of predicted trajectories</Figure.Caption>
                </Figure>
                <Figure>
                    <Row>
                        <Figure><Figure.Image src={results4}/><Figure.Caption>Model after cycle 1</Figure.Caption></Figure>
                        <Figure><Figure.Image src={results5}/><Figure.Caption>Model after cycle 2</Figure.Caption></Figure>
                        <Figure><Figure.Image src={results6}/><Figure.Caption>Model after cycle 3</Figure.Caption></Figure>
                    </Row>
                    <Figure.Caption>Figure 8.  Satellite view of predicted trajectories</Figure.Caption>
                </Figure>
            </Container>
            <br></br>
            <p>We computed MSE test loss against the ground truth trajectories to compare our model’s performances. The following chart shows the average MSE test loss from our the most representative models:</p>
            <ResultsTable/>

            <p>It is clear that our Seq2Seq Gan architecture achieved the best performance, performing more than 6x better than the baseline model. While the Seq2Seq architecture is often used for text translations, we were interested to see its performance in the trajectory prediction domain. To our surprise, Seq2Seq performed very well, allowing our Seq2Seq GAN model to achieve the best test loss. </p>
            <p>Here are some more analysis on the compared result:
                <ul>
                    <li>While the LSTM and Seq2Seq based LSTM performed well, they were still outperformed by other models like Seq2Seq GAN</li>
                    <li>VAE+LSTM average losses seem to be slightly better than other LSTM models, but not as good as other models like Seq2Seq GAN </li>
                </ul>
            </p>
  
            <p>From these observations, we can infer the followings:
                <ul>
                    <li>While testing with a basic recurrent model like LSTM was definitely a step in the right direction, it is clear that a more powerful recurrent model would be necessary to improve the loss.</li>
                    <li>About the result of LSTM+VAE, we assume that this is because the model is creating in some cases more sharp trajectories since the model is not tuned or trained enough to output smooth trajectories for such scenarios. </li>
                    <li>With the LSTM+VAE, while most trajectories are good approximations when compared to ground truth trajectories in general seem to be a little bit unnatural where Seq2SeqGAN model with the help of the discriminator seems to output more natural (real) future predictions. </li>
                    <li>While Social LSTM was not the best performer, we believe in its potential and that our current architecture or even a slightly modified version can achieve a much lower loss,  especially with more training. Moreover, due to computational constraints, our social LSTM does not differentiate different types of objects (i.e. Car, Cyclist, Pedestrian) when attempting to compute their trajectories. This loss of information could prevent the model from achieving a better loss.</li>
                </ul>
            </p>

            <p>Overall, we are happy to report that all of our models perform significantly better than the provided Lyft baseline, with all presented models achieving over 3 times better performance.</p>
        </div>
    )
}