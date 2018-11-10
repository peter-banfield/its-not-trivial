import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {checkJoinedPlayers} from '../../actions/action-startGame';

class StartGame extends React.Component {

    test(){ // for debugging purposes, showing how many users are present in the room
        return this.props.players.map((p) => {
            return (
                <li key={p.id}>{p.name} {p.id}</li>
            );
        });
    }

    handleClick(){ // handle start game click
        this.props.checkJoinedPlayers(this.props.players); // invoke one of the function in action
    }
    
    componentWillReceiveProps(nextProps){ // redirect to pages depending on the gameReady status
        if(nextProps.gameReady.ready === true){   
            console.log(nextProps.gameReady.ready);
            this.props.history.push("/skiprules");
        }
        else{
            console.log(nextProps.gameReady.ready);
            this.props.history.push("/blank");
        }
    }

    render() {        
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Button onClick={this.handleClick.bind(this)} size="lg">Start Game</Button>
                <ul>
                    {this.test()}
                </ul>                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameReady: state.gameReady,
        players: state.players        
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({checkJoinedPlayers: checkJoinedPlayers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);