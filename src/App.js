import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { CreateGame, RoomCode, PlaceBets, JoinRoom, StartGame, SkipRules, PlayAgain, Answer } from "./components"
import Store from "./store"


class App extends Component{
    render() {
        return(
            <Provider store = {Store}>
            <Container>
            <BrowserRouter>
            <Switch>
                <Route path="/CreateGame" component = {CreateGame} />
                <Route path="/RoomCode" component = {RoomCode} />
                <Route path="/PlaceBets" component = {PlaceBets} />
                <Route path="/JoinRoom" component = {JoinRoom} />
                <Route path="/StartGame" component = {StartGame} />
                <Route path="/SkipRules" component = {SkipRules} />
                <Route path="/PlayAgain" component = {PlayAgain} />
                <Route path="/Answer" component = {Answer} />
            </Switch>
            </BrowserRouter>
            </Container>
            </Provider>
    );
    }
}

export default App;