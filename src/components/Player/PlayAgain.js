import React from 'react';
import { Button, Jumbotron, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlayWithNew, sameUsers, getQuestions } from '../../actions/index';
import { screens } from '../screens'

class PlayAgain extends React.Component {
    
    gameCreate = event =>{
        this.props.PlayWithNew(this.props.roomCode);
    }

    sameUsers = event =>{
        this.props.sameUsers(this.props.roomCode);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.screen === screens.PlayAgain){
            this.props.history.push("/Blank")
        }
        if(nextProps.screen === screens.NewUsers){
            this.props.history.push("/")
        }

    }

    componentWillUnmount(){
        this.props.getQuestions(this.props.qPerRound * this.props.rPerGame, this.props.roomCode);
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Button size="lg" onClick={this.sameUsers}>Play Again</Button>
            </div>
        )
    //     return (
    //         <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>               
    //             <Jumbotron className="w-100 h-55 text-center">
    //                 <Row className="text-center">
    //                     <div className="w-100">
    //                         <h1>Play Again?</h1><br></br>
    //                     </div>
    //                 </Row>
    //                 <Row>
    //                     <div className="col">
    //                         <Button onClick={this.sameUsers} size="sm">Same Players</Button> 
    //                     </div>
    //                     <div className="col">
    //                         <Button onClick={this.gameCreate} size="sm">New Players</Button> 
    //                     </div>                   
    //                 </Row>
    //             </Jumbotron>               
    //         </div>
    //     )
    }
}

function mapStateToProps(state){
    return {
        roomCode: state.gameplay.room.roomCode, 
        qPerRound: state.gameplay.room.qPerRound,
        rPerGame: state.gameplay.room.rPerGame,
        screen: state.gameplay.screen
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
	    PlayWithNew: PlayWithNew,        
        sameUsers: sameUsers,
        getQuestions: getQuestions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgain);
