import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AnswerSubmitAction } from '../../actions/index';
import { screens } from '../screens'


class Answer extends React.Component {
    
    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target)
        const answer = data.get('answer');
        console.log(answer);
        if(answer > 0){
            this.props.AnswerSubmitAction(this.props.roomCode, answer);
            this.props.history.push("/blank")
        }        
    }

    componentWillReceiveProps(nextProps){ 
        if(nextProps.screen === screens.QuestionAsk){   
            this.props.history.push('/placebets');
        }
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
            <Form className="flex-fill" onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <Label for="Answer">Answer</Label>
                    <Input type="number" name="answer" id="answer"></Input>
                </FormGroup>
                <FormGroup className="d-flex justify-content-end">
                <Button color="primary">Submit</Button>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        roomError: state.gameplay.roomError,
        roomCode: state.gameplay.room.roomCode,
        screen: state.gameplay.screen
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        AnswerSubmitAction: AnswerSubmitAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);