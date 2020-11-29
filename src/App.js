import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import MainContainer from "./MainContainer";
import ResnetGNU from './ResnetGNU';
import Seq2Seq from './Seq2Seq';
import LSTM from './LSTM';
import VAELSTM from './VAELSTM';

function App() {
    return (
        <section key='app'>
            <Header/>
            <Switch>
            <Route exact
                    path="/home"
                    component={() => <MainContainer key='home' page='home'/>}
            />
            <Route exact
                    path="/resnet-gru"
                    component={() => <ResnetGNU key='resnet-gru' page='resnet-gru'/>}
            />
            <Route exact
                    path="/lstm"
                    component={() => <Seq2Seq key='lstm' page='lstm'/>}
            />
            <Route exact
                    path="/seq2seq"
                    component={() => <LSTM key='seq2seq' page='seq2seq'/>}
            />
            <Route exact
                    path="/vae-lstm"
                    component={() => <VAELSTM key='vae-lstm' page='vae-lstm'/>}
            />
            <Redirect from="/" to="/home" />
            </Switch>
        </section>
    );
  
};

export default App;