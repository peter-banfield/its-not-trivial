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

    componentWillReceiveProps(nextProps){ 
        // if(conditon){   
        //     this.props.history.push(endpoint);
        // }
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
    console.log(bets)


    var betsArr = []
    var answersArr = []
    for(var user in bets){
       for(var key in bets[user]){
           var bet = bets[user][key]
           if(key !== "doubleDown"){
                betsArr.push(bet)
           }
       }
    }
    betsArr.sort(function(a, b){return b-a})
    console.log(betsArr)
    var countedBets = _.countBy(betsArr, Math.floor)
    var countBetsArr = Object.keys(countedBets)
    var answersKeys = Object.keys(answers)

    answersKeys.forEach((id) => {
        answersArr.push(answers[id])
    })
    answersArr.sort(function(a,b){return b-a})
    answersArr.push('Smaller than the Smallest')

    var newCountBets = []
    answersArr.forEach((id) => {
        if(typeof countedBets[id] === "undefined"){
            newCountBets.push({answer: id, count: 0})
        }
        else{
            newCountBets.push({answer: id, count: countedBets[id]})
        }
        
    })

    console.log(newCountBets)

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
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSeeBets);
