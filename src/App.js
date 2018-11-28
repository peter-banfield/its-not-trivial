import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import { PlaceBets, JoinRoom, StartGame, SkipRules, PlayAgain, Answer, Blank,
    CreateGame, RoomCode, Rules, RoundNumber, QuestionNumber, QuestionAsk, 
    AnswerPlaceBets, AnswerSeeBets, CorrectAnswer, PointsLeaderBoard, AnswersLeaderBoard, Congrats } from "./components";

import { Provider } from 'react-redux';
import configureStore from './store';
import { socketActions } from "./actions/socket_actions.js";

export const store = configureStore();

socketActions(store);

class App extends Component{
    
    render() {
        return(
            <Provider store = {store}>
                <Container>
                <BrowserRouter>
                <Switch>
                <Route exact path = "/" component = {JoinRoom} />
                <Route path="/PlaceBets" component = {PlaceBets} />
                <Route path="/StartGame" component = {StartGame} />
                <Route path="/SkipRules" component = {SkipRules} />
                <Route path="/PlayAgain" component = {PlayAgain} />
                <Route path="/Answer" component = {Answer} />
                <Route path="/Blank" component = {Blank} />
                <Route path="/gameboard" component = {CreateGame} />
                <Route path="/RoomCode" component = {RoomCode} />
                <Route path="/Rules" component = {Rules} />
                <Route path="/Round" component = {RoundNumber} />
                <Route path="/QuestionNumber" component = {QuestionNumber} />
                <Route path="/QuestionAsk" component = {QuestionAsk} />
                <Route path="/AnswerPlaceBets" component = {AnswerPlaceBets} />
                <Route path="/AnswerSeeBets" component = {AnswerSeeBets} />
                <Route path="/CorrectAnswer" component = {CorrectAnswer} />
                <Route path="/PointsLeaderBoard" component = {PointsLeaderBoard} />
                <Route path="/AnswersLeaderBoard" component = {AnswersLeaderBoard} />
                <Route path="/Congrats" component = {Congrats} />
                </Switch>
                </BrowserRouter>
                </Container>
            </Provider>
    );
    }
}

export default App;