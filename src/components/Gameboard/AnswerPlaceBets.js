import React from 'react';
import { Jumbotron, Row, Col,  Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Timer from './Timer';
import Submitted from './Submitted';
import Question from './Question';
import { answerSubmitted } from '../../actions/index';
import { screens } from '../screens'

class AnswerPlaceBets extends React.Component {

    renderAnswer(){        
        return this.props.answers.map(a =>{
            return (
                <tr><th>{a}</th></tr>
            );
        });
    }

    componentWillReceiveProps(nextProps){ 
        if(nextProps.screen === screens.AnswerPlaceBets){
            this.props.history.push("/AnswerSeeBets");
        }
    }

    render() {
        if(this.props.submitted === this.props.maxPlayers){
            this.props.answerSubmitted(this.props.room)
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
                                    {this.renderAnswer()}                                    
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

function sortAnswers(answers){
        var answersArr = []
        for(var key in answers){
            var answer = answers[key]
            answersArr.push(answer)
        }
        answersArr.sort(function(a, b){return b-a})
        answersArr.push('Smaller than the Smallest')
        return answersArr
    }

function mapStateToProps(state){
    return {
        answers: sortAnswers(state.gameplay.questions[state.gameplay.room.questionNum].answers), //[state.gameplay.]
        submitted: Object.keys(state.gameplay.questions[state.gameplay.room.questionNum].bets).length,
        maxPlayers: state.gameplay.room.usersCount,
        screen: state.gameplay.screen,
        room: state.gameplay.room.roomCode,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        answerSubmitted: answerSubmitted
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPlaceBets);