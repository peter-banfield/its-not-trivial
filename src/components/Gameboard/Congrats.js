import React from 'react';
import { Jumbotron, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { screens } from '../screens'

class Congrats extends React.Component {

    componentWillReceiveProps(nextProps){ 
        // if(nextProps.screen === screens.PlayAgain){   
        //     this.props.history.push('/roundnumber');
        // }
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
        screen: state.gameplay.screen
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Congrats);