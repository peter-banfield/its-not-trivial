import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Question extends React.Component {

    componentWillReceiveProps(nextProps){ 
        // if(conditon){   
        //     this.props.history.push(endpoint);
        // }
    }
    
    render() {
        return (
            <div>
                <h1>Question #1</h1>
                <hr className="my-2" />
                <p>Placeholder text for a question this is going to be a longer line to see what is going on</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Question);