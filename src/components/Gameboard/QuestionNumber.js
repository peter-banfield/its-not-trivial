import React from 'react';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextScreen } from '../../actions/socket_actions'
//import { nextQuestion } from '../../actions/index'
import { screens } from '../screens'

class QuestionNumber extends React.Component {

    componentWillReceiveProps(nextProps){         
        if(nextProps.screen === screens.QuestionNumber){   
            this.props.history.push('/questionask');
        }
    }

    componentDidMount(){
        setTimeout(function(){ nextScreen(this.props.roomCode, screens.QuestionNumber) }.bind(this), 3000);
    }
    
    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron>
                    <h1>Question #{this.props.qNum + 1}</h1>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        qNum: state.gameplay.room.questionNum,
        roomCode: state.gameplay.room.roomCode,
        screen: state.gameplay.screen
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        nextScreen: nextScreen,
        //nextQuestion: nextQuestion
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNumber);