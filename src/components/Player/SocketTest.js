import React from 'react';
import { connect } from 'react-redux';
import { JoinAction } from '../../actions/index'

const io = require('socket.io-client')  
const socket = io('http://localhost:8080')

export class SocketTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '',
                      roomCode: '' };

        // This binding is necessary to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this); 

    }

    userNameChange(name) {
        this.setState({username: name.target.value});
    }

    enterRoomCode(e){
        this.setState({roomCode: e.target.value});
    }


    handleSubmit(username, roomCode) {
        alert('A name was submitted: ' + this.state.username + "\nfor room code: " + this.state.roomCode);
        this.props.JoinAction(this.state.username, this.state.roomCode);
        socket.emit("joinRoom", {username, roomCode})
        this.setState({ input: ""});
    }

    render(){
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
            <form className="flex-fill" >
                    <label form="RoomCode">Room Code</label>
                    <input onChange ={(e) => this.enterRoomCode(e)} value={this.state.roomCode}/>
                    <label form="Name">Name</label>
                    <input onChange ={(e) => this.userNameChange(e)} value={this.state.username}/>
                <button color="primary" onClick={(e) => this.handleSubmit(this.state.username, this.state.roomCode)}>Submit</button>
            </form>
            </div>
        )}
    }
 
export default connect(null, { JoinAction })(SocketTest);