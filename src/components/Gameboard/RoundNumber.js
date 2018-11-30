import React from 'react';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RoundNumber extends React.Component {

    componentDidMount(){
        setTimeout(function(){ this.props.history.push('/QuestionNumber'); }.bind(this), 3000);
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron>
                    <h1>Round #{this.props.rNum}</h1>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        rNum: state.gameplay.room.round,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // variable to use in component: refrence to action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundNumber);