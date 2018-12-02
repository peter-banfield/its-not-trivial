import React from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Submitted extends React.Component {

    componentWillReceiveProps(nextProps){ 
        // if(conditon){   
        //     this.props.history.push(endpoint);
        // }
    }
    
    render() {
        return (            
            <Col>
                <h3>{this.props.answers[this.props.questionNum].length}/7</h3>
            </Col> 
        )
    }
}

function mapStateToProps(state){
    return {
        // variable to use in component: state.refrence to the attribute of interest
        answers: state.gameplay.answers,
        questionNum: state.gameplay.room.questionNum        
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Submitted);