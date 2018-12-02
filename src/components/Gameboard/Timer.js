import React from 'react';
import { Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextScreen } from "../../actions/socket_actions.js";
import { screens } from '../screens'

export class Timer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 60,
            
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if(this.state.count !== 0){
                this.setState(prevState => ({
                    count: prevState.count - 1
                }))
            }
            if(this.state.count === 0){
                switch(this.props.screen){
                    case screens.QuestionNumber:
                        nextScreen(this.props.roomCode, screens.QuestionAsk)
                        break;
                    case screens.QuestionAsk:
                        nextScreen(this.props.roomCode, screens.AnswerPlaceBets)
                        break;
                    default:
                        break;
                } 
        }
        }, 100)
    }


    componentWillUnmount () {
        clearInterval(this.myInterval)
    }



    render() {
        return (
            <Col>
                <h3>{this.state.count} Seconds</h3>
            </Col>
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
        nextScreen: nextScreen,
        //nextQuestion: nextQuestion
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
