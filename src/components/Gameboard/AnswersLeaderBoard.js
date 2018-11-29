import React from 'react';
import { Jumbotron, Col, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AnswersLeaderBoard extends React.Component {

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
                            <tr>
                                <th scope="row">1</th>
                                <td>Chris</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Peter</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Carl</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Brenden</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Noel</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Daniel</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Jake</td>
                                <td>3</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        // variable to use in component: refrence to state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersLeaderBoard);