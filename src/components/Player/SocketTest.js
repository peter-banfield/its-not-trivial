import React from 'react';
import { connect } from 'react-redux';
import { JoinAction } from '../../actions/index'
import io from 'socket.io-client';

const socket = io('http://localhost:8080')

/*Emits an event to the socket identified by the string name. 
Any other parameters can be included. 
All serializable datastructures are supported, including Buffer.*/

class SocketTest extends React.Component{
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

    render(){
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
            <form className="flex-fill" onSubmit={this.handleSubmit}>
                    <label htmlFor="RoomCode">Room Code</label>
                    <input type="text" name="roomCode" id="roomCode" />
                    <label htmlFor="Name">Name</label>
                    <input type = "text" name = "username" id="username"/>
                    <button color="primary">Submit</button>
            </form>
            </div>
        )}
    }
 
export default connect(null, { JoinAction })(SocketTest);