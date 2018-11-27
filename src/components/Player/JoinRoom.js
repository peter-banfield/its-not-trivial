import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { JoinAction } from '../../actions/index'
import io from 'socket.io-client';
const socket = io(window.location.hostname+':8080')

class JoinRoom extends React.Component {

    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target)
        const username = data.get('username');
        const roomCode = data.get('roomCode');
        alert('A name was submitted: ' + username + "\n and roomCode: " + roomCode);
        this.props.JoinAction(username, roomCode);
        socket.emit("joinRoom", username, roomCode)
    }

    componentWillReceiveProps(nextProps){
            if(nextProps.username.username){
                this.props.history.push("/StartGame")
            }
    }

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
            <Form className="flex-fill" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="RoomCode">Room Code</Label>
                    <Input type="text" name="roomCode" id="roomCode"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Name">Name</Label>
                     <Input type="text" name="username" id="username"></Input>
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
    return{
        username: state.user
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({JoinAction: JoinAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoom);