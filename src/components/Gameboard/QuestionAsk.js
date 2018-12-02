import React from 'react';
import { Jumbotron, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Submitted from './Submitted';
import Timer from './Timer';
import Question from './Question';
import { questionSubmitted } from '../../actions/index';
import { screens } from '../screens'

class QuestionAsk extends React.Component {

    componentWillReceiveProps(nextProps){ 
        if(nextProps.screen === screens.QuestionAsk){
            this.props.history.push("/AnswerPlaceBets");
        }
    }

    render() {
        if(this.props.submitted === this.props.maxPlayers){
            this.props.questionSubmitted(this.props.roomCode)
        }
        return (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron style={{height: '75%', textAlign: 'center'}}>
                    <div className="d-flex flex-column" style={{height: '100%'}}>
                        <Question question={this.props.question}/>
                        <div className="d-flex align-items-end" style={{height: '100%'}}>
                            <Row className="flex-fill">
                            <Timer />
                            <Submitted numSubmit={this.props.submitted} maxPlayers={this.props.maxPlayers} />
                            </Row>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        submitted: Object.keys(state.gameplay.questions[state.gameplay.room.questionNum].answers).length,
        question: state.gameplay.questions[state.gameplay.room.questionNum].question,
        maxPlayers: state.gameplay.room.usersCount,
        roomCode: state.gameplay.room.roomCode,
        screen: state.gameplay.screen

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        questionSubmitted: questionSubmitted
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAsk);