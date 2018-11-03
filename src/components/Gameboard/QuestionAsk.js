import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

export default class QuestionAsk extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron style={{height: '75%', textAlign: 'center'}}>
                    <div className="d-flex flex-column" style={{height: '100%'}}>
                        <div>
                            <h1>Question #1</h1>
                            <hr className="my-2" />
                            <p>Placeholder text for a question this is going to be a longer line to see what is going on</p>
                        </div>
                        <div className="d-flex align-items-end" style={{height: '100%'}}>
                            <Row className="flex-fill">
                            <Col>
                                <h3>60 Seconds</h3>
                            </Col>
                            <Col>
                                <h3>5/7 submitted</h3>
                            </Col>
                            </Row>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}