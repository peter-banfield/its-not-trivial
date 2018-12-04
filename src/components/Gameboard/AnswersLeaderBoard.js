import React from 'react';
import { Jumbotron, Col, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextQuestion } from '../../actions/index'
import { screens } from '../screens'

class AnswersLeaderBoard extends React.Component {


    renderUsers(){        
        return this.props.users.map((u, index) =>{
            return (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{u.username}</td>
                    <td>{u.numCorrect}</td>
                </tr>
            );
        });
    }

    componentDidMount(){
        setTimeout(function(){ 
            this.props.nextQuestion(this.props.room)
        }.bind(this), 3000);
    }

    componentWillReceiveProps(nextProps){ 
        if(nextProps.screen === screens.AnswersLeaderBoard){   
            this.props.history.push('/QuestionNumber');
        }
    }
    
    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="w-100 h-75 text-center">
                    <Row className="text-center">
                        <div className="w-100">
                            <h1>Correct Answers Leaderboard</h1>
                        </div>
                    </Row>
                    <Row>
                        <Table bordered>
                        <thead>
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Name</th>
                                <th scope="col">Answers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUsers()}
                        </tbody>
                        </Table>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}

var sortUsers = function(usersObj){
    var userIds = Object.keys(usersObj)
    var usersArr = []
    userIds.forEach((id)=>{
        usersArr.push({ username: usersObj[id].username, numCorrect: usersObj[id].numCorrect })
    })
    usersArr.sort((a,b)=>{
        if (a.numCorrect > b.numCorrect)
            return -1;
        if (a.numCorrect < b.numCorrect)
            return 1;
        return 0;
    })
    return usersArr
}

function mapStateToProps(state){
    return {
        users: sortUsers(state.gameplay.users),      
        screen: state.gameplay.screen,
        room: state.session.code
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        nextQuestion: nextQuestion
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersLeaderBoard);