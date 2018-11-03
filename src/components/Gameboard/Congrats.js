import React from 'react';
import { Jumbotron, Col } from 'reactstrap';

export default class Congrats extends React.Component {
    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="text-center">
                    <h1>Congratulations Carl!!</h1>
                    <h1>You Won!!!</h1>
                </Jumbotron>
            </Col>
        )
    }
}