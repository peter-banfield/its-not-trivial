import React from 'react';
import { Jumbotron, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Submitted from './Submitted';
import Timer from './Timer';
import Question from './Question';

class QuestionAsk extends React.Component {

    componentWillReceiveProps(nextProps){ 
        // if(conditon){   
        //     this.props.history.push(endpoint);
        // }
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron style={{height: '75%', textAlign: 'center'}}>
                    <div className="d-flex flex-column" style={{height: '100%'}}>
                        <Question />
                        <div className="d-flex align-items-end" style={{height: '100%'}}>
                            <Row className="flex-fill">
                            <Timer />
                            <Submitted />
                            </Row>
                        </div>
                    </div>
                </Jumbotron>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAsk);