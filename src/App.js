import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { CreateGame } from "./components"
import Store from "./store"


class App extends Component{
    render() {
        return(
            <Provider store = {Store}>
            <Container>
            <BrowserRouter>
            <Switch>
                <Route path="/CreateGame" component = {CreateGame} />
            </Switch>
            </BrowserRouter>
            </Container>
            </Provider>
    );
    }
}

export default App;