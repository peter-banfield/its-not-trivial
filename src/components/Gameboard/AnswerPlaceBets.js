import React from 'react';
import { Jumbotron, Row, Col,  Table } from 'reactstrap';
import Timer from './Timer';
import Submitted from './Submitted';
import Question from './Question';

export default class AnswerPlaceBets extends React.Component {
    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="h-75 w-100 text-center">
                    <Row className="h-100">
                        <Col className="d-flex align-items-center justify-content-center w-100">
                        <Table bordered>
                                <thead>
                                    <tr><th>Answers</th></tr>
                                </thead>
                                <tbody>
                                    <tr><th>7</th></tr>
                                    <tr><th>6</th></tr>
                                    <tr><th>5</th></tr>
                                    <tr><th>4</th></tr>
                                    <tr><th>3</th></tr>
                                    <tr><th>2</th></tr>
                                    <tr><th>1</th></tr>
                                    <tr><th>Smaller Than The Smallest</th></tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col className="d-flex align-items-end flex-column bd-highlight mb-3 w-100">
                            <Row>
                                <Question />
                            </Row>
                            <Row className="mt-auto w-100">
                                <Timer />
                                <Submitted />
                            </Row>
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}