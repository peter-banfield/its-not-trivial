import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { createGame, getQuestions } from '../../actions/index';


class CreateGame extends React.Component {
        
    gameCreate = event =>{
        this.props.createGame();
        this.props.getQuestions();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.code.code){
            this.props.history.push("/RoomCode")
        }
    }
    
    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Button size="lg" onClick={this.gameCreate}>Create Game</Button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        code: state.session
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({createGame: createGame, getQuestions: getQuestions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)