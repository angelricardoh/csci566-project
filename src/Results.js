import React from "react";
import ResultsTable from './ResultsTable'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
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
        </div>
    )
}