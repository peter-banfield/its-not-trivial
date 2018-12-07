import React from 'react';
import { Jumbotron, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CorrectAnswer extends React.Component {

    componentDidMount(){
        setTimeout(function(){
            if(this.props.questionNum % this.props.questionPerRound === 0 ) {
                this.props.history.push("/PointsLeaderBoard")
            }
            else {
                this.props.history.push("/AnswersLeaderBoard")
            }
        }.bind(this), 5000);
    }
    
    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="w-100 h-75 text-center">
                <Col className="d-flex align-items-center flex-column bd-highlight mb-3 w-100 h-100">
                    <Row>
                        <div>
                            <h1>Correct Answer: {this.props.correctAnswr}</h1>
                            <hr className="my-2" />
                            <h1>Closest Answer: {this.props.closestAnswr}</h1>
                        </div>
                    </Row>
                    <Row className="d-flex justify-content-center mt-auto  w-100">
                        <h1>{this.props.points} points awarded</h1>
                    </Row>
                    </Col>
                </Jumbotron>
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        numRounds: state.gameplay.room.rPerGame,
        questionPerRound: state.gameplay.room.qPerRound,
        correctAnswr: state.gameplay.questions[state.gameplay.room.questionNum].correctAnswr,
        closestAnswr: state.gameplay.questions[state.gameplay.room.questionNum].closestAnswr,
        points: state.gameplay.questions[state.gameplay.room.questionNum].points,
        roundNum: state.gameplay.room.round,
        questionNum: state.gameplay.room.questionNum + 1
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);