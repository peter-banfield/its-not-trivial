import React from 'react';
import { Button } from 'reactstrap';
import io from 'socket.io-client';
var randomstring = require("randomstring");

const socket = io('http://localhost:8080')

export default class CreateGame extends React.Component {
        constructor(props){
            super(props);
            // This binding is necessary to make `this` work in the callback
            this.gameCreate = this.gameCreate.bind(this);
        }

        gameCreate = event => {
            var roomcode = randomstring.generate({length: 4, charset: 'alphabetic'}).toUpperCase();
            socket.emit("createroom", )
        }

        render() {
            return (
                <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                    <Button size="lg" onClick={this.gameCreate}>Create Game</Button>
                </div>
            )
        }
}