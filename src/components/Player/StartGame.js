import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {checkJoinedPlayers} from '../../actions';
import { screens } from '../screens'

class StartGame extends React.Component {

    handleClick(){ // handle start game click
        this.props.checkJoinedPlayers(this.props.roomCode);

    }
    
    componentWillReceiveProps(nextProps){ // redirect to pages depending on the gameReady status
        if(nextProps.gameReady === screens.StartGame){   
            this.props.history.push("/skiprules");
        }
    }

    render() {        
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Button onClick={this.handleClick.bind(this)} size="lg">Start Game</Button>              
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        roomCode: state.gameplay.room.roomCode,
        gameReady: state.gameplay.screen,
        players: state.gameplay.users     
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({checkJoinedPlayers: checkJoinedPlayers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);