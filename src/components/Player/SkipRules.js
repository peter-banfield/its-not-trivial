import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { screens } from '../screens'
import { skipRules } from '../../actions/index';

class SkipRules extends React.Component {

    handleClick(){ // handle start game click
        this.props.skipRules(this.props.roomCode);

    }

    componentWillReceiveProps(nextProps){ 
        if(nextProps.gameReady === screens.SkipRules){
            console.log(this.props.questions)
            this.props.history.push("/blank");
        }
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Button onClick={this.handleClick.bind(this)} size="lg">Skip Rules</Button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        // variable to use in component: state.refrence to the attribute of interest
        roomCode: state.gameplay.room.roomCode,
        gameReady: state.gameplay.screen,
        questions: state.gameplay.questions
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ skipRules: skipRules }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(SkipRules);