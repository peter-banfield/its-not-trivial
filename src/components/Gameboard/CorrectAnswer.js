import React from 'react';
import { Jumbotron, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CorrectAnswer extends React.Component {

    componentWillReceiveProps(nextProps){ 
        // if(conditon){   
        //     this.props.history.push(endpoint);
        // }
    }
    
    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="w-100 h-75 text-center">
                <Col className="d-flex align-items-center flex-column bd-highlight mb-3 w-100 h-100">
                    <Row>
                        <div>
                            <h1>Correct Answer: 100</h1>
                            <hr className="my-2" />
                            <h1>Closest Answer: 98</h1>
                        </div>
                    </Row>
                    <Row className="d-flex justify-content-center mt-auto  w-100">
                        <h1>6 points awarded</h1>
                    </Row>
                    </Col>
                </Jumbotron>
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        // variable to use in component: state.refrence to the attribute of interest
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);