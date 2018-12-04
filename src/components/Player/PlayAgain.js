import React from 'react';
import { Button, Jumbotron, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createGame, getQuestions, sameUsers } from '../../actions/index';

class PlayAgain extends React.Component {
    
    gameCreate = event =>{
        this.props.createGame();
    }

    sameUsers = event =>{
        console.log(this.props.roomCode);
        this.props.sameUsers(this.props.roomCode);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.roomCode){
            this.props.getQuestions(this.props.qPerRound * this.props.rPerGame, nextProps.roomCode);
            this.props.history.push("/RoomCode")
        }
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>               
                <Jumbotron className="w-100 h-55 text-center">
                    <Row className="text-center">
                        <div className="w-100">
                            <h1>Play Again?</h1><br></br>
                        </div>
                    </Row>
                    <Row>
                        <div className="col">
                            <Button onClick={this.sameUsers} size="sm">With Same Players</Button> 
                        </div>
                        <div className="col">
                            <Button onClick={this.gameCreate} size="sm">With New Players</Button> 
                        </div>                   
                    </Row>
                </Jumbotron>               
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        roomCode: state.gameplay.room.roomCode, 
        qPerRound: state.gameplay.room.qPerRound,
        rPerGame: state.gameplay.room.rPerGame
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        createGame: createGame,
        getQuestions: getQuestions,
        sameUsers: sameUsers
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgain);