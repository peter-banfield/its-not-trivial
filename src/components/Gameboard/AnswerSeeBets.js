import React from 'react';
import { Jumbotron, Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question from './Question';

var _ = require('lodash');

class AnswerSeeBets extends React.Component {

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
                                    <tr>
                                        <th>7</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th>Smaller Than The Smallest</th>
                                        <td>3</td>
                                    </tr>
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

function sortBets(bets){
    console.log(bets)


    var betsArr = []
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
    countBetsArr.sort(function(a,b){return b-a})

    var newCountBets = []
    countBetsArr.forEach((id) => {
        newCountBets.push({answer: id, count: countedBets[id]})
    })

    console.log(newCountBets)
    return betsArr

}

function mapStateToProps(state){
    return {
        bets: sortBets(state.gameplay.questions[state.gameplay.room.questionNum].bets)
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSeeBets);