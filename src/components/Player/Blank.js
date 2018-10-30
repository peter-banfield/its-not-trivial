import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class Blank extends React.Component {
        render() {
            return (
                <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                    <Jumbotron>
                        <h1>Look At The Gameboard</h1>
                    </Jumbotron>
                </div>
            )
        }
}