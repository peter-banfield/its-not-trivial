import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Jumbotron } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { createGame, getQuestions } from '../../actions/index';


class CreateGame extends React.Component {

    options = event =>{
        this.props.history.push("/options")
    }
        
    gameCreate = event =>{
        var roundsQuestions = this.props.qPerRound;
        var roundsGame = this.props.rPerGame;
        this.props.createGame(this.props.code, roundsQuestions, roundsGame);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.code.code){
            this.props.getQuestions(this.props.qPerRound * this.props.rPerGame, nextProps.code.code);
            this.props.history.push("/RoomCode")
        }
    }
 
    
    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>               
                <Jumbotron className="w-100 h-75 text-center">
                    <Col className="h-100 w-100">
                        <Row className="text-center h-50">
                            <div className="w-100">
                                <h1>Welcome to It's Not Trivial</h1>A trivia game for 4-7 players<br></br>
                            </div>
                        </Row>
                        <Row className="w-100 h-50">
                            <Col >
                                <Button size="lg" onClick={this.gameCreate}>Create Game</Button> 
                            </Col>    
                        </Row>
                        <Row className="d-flex align-items-end w-100">
                            <Button onClick={this.options}>Options</Button>
                        </Row>
                    </Col>
                </Jumbotron>               
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        code: state.session, 
        qPerRound: state.gameplay.room.qPerRound,
        rPerGame: state.gameplay.room.rPerGame
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        createGame: createGame,
        getQuestions: getQuestions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)
