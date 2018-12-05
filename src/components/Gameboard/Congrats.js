import React from 'react';
import { Jumbotron, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { screens } from '../screens';
import { createGame, getQuestions} from '../../actions/index';

class Congrats extends React.Component {

    componentWillReceiveProps(nextProps){ 
        if(nextProps.screen === screens.PlayAgain){
            this.props.history.push("/roundnumber")
        }
        if(nextProps.screen === screens.NewUsers){
            //this.props.getQuestions(this.props.qPerRound * this.props.rPerGame, nextProps.roomCode);
            this.props.history.push("/roomcode")
        }
    }

    componentWillUnmount(){
        var roundsQuestions = this.props.qPerRound;
        var roundsGame = this.props.rPerGame;        
        this.props.createGame(this.props.code, roundsQuestions, roundsGame);
        if(this.props.code.code != this.props.code.code){            
                this.props.getQuestions(this.props.qPerRound * this.props.rPerGame, this.props.code.code);
                
            }
    }
    
    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="text-center">
                    <h1>Congratulations {this.props.winner}!!</h1>
                    <h1>You Won!!!</h1>
                </Jumbotron>
            </Col>
        )
    }
}

var findWinner = (users) => {
    var usrKeys = Object.keys(users)
    var winner = users[usrKeys[0]]
    usrKeys.forEach((id)=>{
        winner = users[id].score > winner.score ? users[id] : winner
    })
    return winner.username
}

function mapStateToProps(state){
    return {
        winner: findWinner(state.gameplay.users),
        screen: state.gameplay.screen,
        code: state.session, 
        qPerRound: state.gameplay.room.qPerRound,
        rPerGame: state.gameplay.room.rPerGame,
        newUsers: state.gameplay.newUsers
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        createGame: createGame,
        getQuestions: getQuestions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Congrats);
