import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { createGame, getQuestions} from '../../actions/index';


class CreateGame extends React.Component {
        
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
                <Button size="lg" onClick={this.gameCreate}>Create Game</Button>
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
