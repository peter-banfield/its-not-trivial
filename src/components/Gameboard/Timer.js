import React from 'react';
import { Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
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

    switchScreen(){
        if(this.state.count === 0){
            console.log("TRIGGERRRRRRRRDDDDD")
            switch(this.props.screen){
                case screens.QuestionNumber:
                    nextScreen(this.props.roomCode, screens.QuestionAsk)
                case screens.QuestionAsk:
                    nextScreen(this.props.roomCode, screens.AnswerPlaceBets)
            } 
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if(this.state.count != 0){
                this.setState(prevState => ({
                    count: prevState.count - 1
                }))
            }
        }, 1000)
    }


    componentWillUnmount () {
        clearInterval(this.myIngterval)
        this.switchScreen()
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
