import React from 'react';
import { Jumbotron, Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question from './Question';

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
                        <Col className="d-flex align-items-end flex-column bd-highlight mb-3 w-100">
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSeeBets);