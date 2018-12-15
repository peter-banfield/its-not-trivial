import React from 'react';
import { Jumbotron, Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question from './Question';
var _ = require('lodash');

class AnswerSeeBets extends React.Component {

    renderBets(){        
        return this.props.bets.map(a =>{
            return (
                <tr>
                    <th>{a.answer}</th>
                    <td>{a.count}</td>
                </tr>
            );
        });
    }

    componentDidMount(){
        setTimeout(function(){ 
            this.props.history.push('/CorrectAnswer');
        }.bind(this), 3000);
    }

    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="h-75 w-100 text-center">
                    <Row className="h-100">
                        <Col className="d-flex align-items-center justify-content-center w-100">
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Answers</th>
                                        <th>Bets</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderBets()}
                                </tbody>
                            </Table>
                        </Col>
                        <Col className="d-flex align-items-center flex-column bd-highlight mb-3 w-100">
                            <Row>
                                <Question />
                            </Row>
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}

function sortBets(bets, answers){

    var betsArr = []
    var answersArr = []
    for(var user in bets){
       for(var key in bets[user]){
           var bet = bets[user][key]
           if(key !== "doubleDown"){
                if('Smaller than the Smallest' === bet){
                    bet = -1
                }
                betsArr.push(bet)
           }
       }
    }

    var countedBets = _.countBy(betsArr, Math.floor)
    var answersKeys = Object.keys(answers)
    answersKeys.forEach((id) => {
        answersArr.push(answers[id])
    })
    answersArr.push(-1)
    answersArr.sort(function(a,b){return b-a})
    answersArr.push()

    var newCountBets = []
    answersArr.forEach((id) => {
        if(typeof countedBets[id] === "undefined"){
            if(id === -1){
                newCountBets.push({answer: 'Smaller than the Smallest', count: 0})
            }
            else {
                newCountBets.push({answer: id, count: 0})
            }
        }
        else{
            if(id === -1){
                newCountBets.push({answer: 'Smaller than the Smallest', count: countedBets[id]})
            }
            else {
                newCountBets.push({answer: id, count: countedBets[id]})
            }
        }
    })
    return newCountBets
}

function mapStateToProps(state){
    return {
        bets: sortBets(state.gameplay.questions[state.gameplay.room.questionNum].bets, 
                        state.gameplay.questions[state.gameplay.room.questionNum].answers)
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSeeBets);
