import React from 'react';
import { Jumbotron, Col, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PointsLeaderBoard extends React.Component {

    renderUsers(){        
        return this.props.users.map(u, index =>{
            return (
                <tr>
                    <th scope="row">{index}</th>
                    <td>{u.username}</td>
                    <td>{u.score}</td>
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
                <Jumbotron className="w-100 h-75 text-center">
                    <Row className="text-center">
                        <div className="w-100">
                            <h1>Leaderboard</h1>
                        </div>
                    </Row>
                    <Row>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th scope="col">Rank</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Points</th>
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
        usersArr.push({ username: usersObj[id].username, score: usersObj[id].score })
    })
    usersArr.sort((a,b)=>{
        if (a.score < b.score)
            return -1;
        if (a.score > b.score)
            return 1;
        return 0;
    })
    return usersArr
}

function mapStateToProps(state){
    return {
        users: sortUsers(state.gameplay.users)
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PointsLeaderBoard);