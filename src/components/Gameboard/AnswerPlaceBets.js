import React from 'react';
import { Jumbotron, Row, Col,  Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Timer from './Timer';
import Submitted from './Submitted';
import Question from './Question';
import { answerSubmitted } from '../../actions/index';

class AnswerPlaceBets extends React.Component {

    componentWillReceiveProps(nextProps){ 
        // if(conditon){   
        //     this.props.history.push(endpoint);
        // }
    }

    render() {
        if(this.props.submitted === this.props.maxPlayers){
            this.props.answerSubmitted(this.props.roomCode)
        }
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
                                <Submitted numSubmit={this.props.submitted} maxPlayers={this.props.maxPlayers} />
                            </Row>
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        submitted: Object.keys(state.gameplay.questions[state.gameplay.room.questionNum].bets).length,
        maxPlayers: state.gameplay.room.usersCount
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        answerSubmitted: answerSubmitted
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPlaceBets);