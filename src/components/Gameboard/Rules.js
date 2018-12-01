import React from 'react';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { screens } from '../screens'

class Rules extends React.Component {

    componentWillReceiveProps(nextProps){ 
        if(nextProps.gameReady === screens.SkipRules){   
            this.props.history.push("/roundnumber");
        }
    }
    
    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron>
                    <h1>Rules</h1>
                    <hr className="my-2" />
                    <ul>
                        <li>4-7 Players</li>
                        <li>Once a question has been asked players will have 60 seconds to respond with a numerical answer</li> 
                        <li>The players will then have 60 seconds to place two bets on the answer or answers they believe closest to the correct answer without going over</li>        
                        <li>Points are awarded in the following fashion</li>        
                        <ul>
                            <li>One bet will be worth 2 points</li>
                            <li>The other bet will be worth 1 point</li>
                            <li>Correct bets placed on Smaller than the Smallest will give 1 bonus point</li>
                            <li>Providing an answer that is exactly correct will give 2 bonus points.</li>
                            <li>Once per round you can double down and double the points from one of your two bets if successful</li>
                        </ul>
                    </ul>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        // variable to use in component: state.refrence to the attribute of interest
        gameReady: state.gameplay.screen,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rules);