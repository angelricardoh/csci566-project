import React from "react";
import "./MainContainer.css";

export default function ResultsTable() {
    return (
        <div>
            <table style={{width: '300pt', tableLayout: 'fixed'}}>
                <caption>Table 2. Comparison on the test loss of our models</caption>
                <tr>
                    <th><b>Method</b></th>
                    <th><b>Test loss</b></th>
                </tr>
                <tr>
                    <td>Seq2Seq LSTM - v2</td>
                    <td>3.6188</td>
                </tr>
                <tr>
                    <td><b>Social LSTM-v2</b></td>
                    <td><b>3.5578</b></td>
                </tr>
                <tr>
                    <td>LSTM - v2</td>
                    <td>3.1169</td>
                </tr>
                <tr>
                    <td>Seq2Seq LSTM - v1</td>
                    <td>2.9981</td>
                </tr>
                <tr>
                    <td>Seq2Seq LSTM - v3</td>
                    <td>2.2907</td>
                </tr>
                <tr>
                    <td>Seq2Seq GAN2-v2-1-1</td>
                    <td>2.2576</td>
                </tr>
                <tr>
                    <td>LSTM - v1</td>
                    <td>2.2572</td>
                </tr>
                <tr>
                    <td>Seq2Seq GAN2-v2-2-1</td>
                    <td>2.1781</td>
                </tr>
                <tr>
                    <td>VAE+LSTM A</td>
                    <td>2.1587</td>
                </tr>
                <tr>
                    <td>Seq2Seq GAN1-v2-2-3</td>
                    <td>2.1463</td>
                </tr>
                <tr>
                    <td>VAE+LSTM B</td>
                    <td>1.9585</td>
                </tr>
                <tr>
                    <td><b>Seq2Seq GAN1-v2-1-1</b></td>
                    <td><b>1.9143</b></td>
                </tr>
            </table>
        </div>
    )
}