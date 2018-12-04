import React from 'react';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { screens } from '../screens'

class Blank extends React.Component {

    componentWillReceiveProps(nextProps){ 
        switch(nextProps.screen){
            case screens.QuestionNumber:
                this.props.history.push('/answer');
                break;
            case screens.QuestionAsk:
                this.props.history.push('/placebets');
                break;
            case screens.PointsLeaderBoard:
                this.props.history.push('/PlayAgain');
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron className="text-center">
                    <h1 >Look At The Gameboard</h1>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        screen: state.gameplay.screen
        // variable to use in component: state.refrence to the attribute of interest
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank);