import React from 'react';
import { Button, Jumbotron, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlayWithNew, getQuestions, sameUsers } from '../../actions/index';
import { screens } from '../screens'

class PlayAgain extends React.Component {
    
    newUsers = event =>{
        this.props.PlayWithNew(this.props.roomCode);        
    }

    sameUsers = event =>{
        console.log(this.props.roomCode);
        this.props.sameUsers(this.props.roomCode);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.screen === screens.JoinRoom){
            this.props.history.push("/");
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
                            <Button onClick={this.newUsers} size="sm">With New Players</Button> 
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
        screen: state.gameplay.screen
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        PlayWithNew: PlayWithNew,        
        sameUsers: sameUsers
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgain);