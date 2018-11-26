import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {checkJoinedPlayers} from '../../actions';

class StartGame extends React.Component {

    handleClick(){ // handle start game click
        this.props.checkJoinedPlayers(this.props.players); // invoke one of the function in action
    }
    
    componentWillReceiveProps(nextProps){ // redirect to pages depending on the gameReady status
        if(nextProps.gameReady.ready === true){   
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
        gameReady: state.gameplay.ready,
        players: state.gameplay.users     
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({checkJoinedPlayers: checkJoinedPlayers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);