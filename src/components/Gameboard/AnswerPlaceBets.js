import React from 'react';
import { Jumbotron, Row, Col,  Table } from 'reactstrap';

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
                                <div>
                                    <h1>Question #1</h1>
                                    <hr className="my-2" />
                                    <p>Placeholder text for a question this is going to be a longer line to see what is going on</p>
                                </div>
                            </Row>
                            <Row className="mt-auto w-100">
                                <Col>
                                    <h3>60 Seconds</h3>
                                </Col>
                                <Col>
                                    <h3>5/7 submitted</h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}