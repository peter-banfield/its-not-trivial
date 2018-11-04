import React from 'react';
import { Jumbotron, Row } from 'reactstrap';
import Submitted from './Submitted';
import Timer from './Timer';
import Question from './Question';

export default class QuestionAsk extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron style={{height: '75%', textAlign: 'center'}}>
                    <div className="d-flex flex-column" style={{height: '100%'}}>
                        <Question />
                        <div className="d-flex align-items-end" style={{height: '100%'}}>
                            <Row className="flex-fill">
                            <Timer />
                            <Submitted />
                            </Row>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}