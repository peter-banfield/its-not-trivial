import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { screens } from '../screens'
import { betSubmitAction } from '../../actions/index';
import { getId } from '../../actions/socket_actions'

class PlaceBets extends React.Component {

    componentWillReceiveProps(nextProps){ 
        if(nextProps.screen === screens.AnswerPlaceBets){
            this.props.history.push("/blank");
        }
    }

    renderAnswer(){        
        return this.props.answers.map(a =>{
            return (
                <option>{a}</option>
            );
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target)
        const doubleDown = data.get('DoubleDown');
        const bigBet = data.get('SelectBigBet');
        const smallBet = data.get('SelectSmallBet');
        console.log(doubleDown + bigBet + smallBet);
        if(bigBet != "" && smallBet != ""){
            this.props.betSubmitAction(this.props.roomCode, doubleDown, bigBet, smallBet);
            this.props.history.push("/blank")
        }        
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
            <Form className="flex-fill" onSubmit={this.handleSubmit.bind(this)} >
                <FormGroup className="ml-4 mb-0" >
                    <Label for="DoubleDown">
                    <Input type="checkbox" name="DoubleDown" id="DoubleDown" className="" />
                    Double your bets
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label for="SelectBigBet">Select Your Big Bet</Label>
                    <Input type="select" name="select" id="SelectBigBet">
                        {this.renderAnswer()}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="SelectSmallBet">Select Your Small Bet</Label>
                    <Input type="select" name="select" id="SelectSmallBet">
                        {this.renderAnswer()}
                    </Input>
                </FormGroup>
                <FormGroup className="d-flex justify-content-end">
                <Button color="primary">Submit</Button>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

function sortAnswers(answers){
    var answersArr = []
    for(var key in answers){
        var answer = answers[key]
        answersArr.push(answer)
    }
    answersArr.sort(function(a, b){return b-a})
    answersArr.unshift('')
    answersArr.push('Smaller than the Smallest')
    return answersArr
}

function mapStateToProps(state){
    return {
        answers: sortAnswers(state.gameplay.questions[state.gameplay.room.questionNum].answers),
        screen: state.gameplay.screen
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
       betSubmitAction: betSubmitAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceBets);
