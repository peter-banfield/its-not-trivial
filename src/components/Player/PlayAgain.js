import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PlayAgain extends React.Component {
    
    componentWillReceiveProps(nextProps){ 
        // if(conditon){   
        //     this.props.history.push(endpoint);
        // }
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Button size="lg">Play Again</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgain);