import React from 'react';
import { Button, Jumbotron, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOptions } from '../../actions/index';

class options extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target)
        const QuestionsPerRound = data.get('QuestionsPerRound');
        const RoundsPerGame = data.get('RoundsPerGame');
        this.props.setOptions(parseInt(QuestionsPerRound), parseInt(RoundsPerGame));
        this.props.history.push("/Gameboard")       
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>               
                <Jumbotron className="w-100 h-75 text-center">
                <Form className="flex-fill" onSubmit={this.handleSubmit.bind(this)} >
                <FormGroup>
                    <Label for="QuestionsPerRound">Number of Questions Per Round (default 7)</Label>
                    <Input type="select" name="QuestionsPerRound" id="QuestionsPerRound">
                    <option>5</option>
                    <option>6</option>
                    <option selected>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="RoundsPerGame">Number of Rounds Per Game (default 1)</Label>
                    <Input type="select" name="RoundsPerGame" id="RoundsPerGame">
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup className="d-flex justify-content-end">
                <Button color="primary">Select Options</Button>
                </FormGroup>
            </Form>
                </Jumbotron>               
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        setOptions: setOptions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(options);
