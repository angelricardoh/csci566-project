import React from "react";
import "./MainContainer.css";

export default function ResultsTable() {
    return (
        <div>
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
        </div>
    )
}