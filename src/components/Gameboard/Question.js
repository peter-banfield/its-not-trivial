import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Question extends React.Component {
   
    render() {
        return (
            <div>
                <h1>Question #{this.props.questionNum + 1}</h1>
                <hr className="my-2" />
                <p style={{fontSize:30}}>{this.props.question}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        questionNum: state.gameplay.room.questionNum,
        question: state.gameplay.questions[state.gameplay.room.questionNum].question
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);