import React from 'react';
import { FormGroup, Button } from 'reactstrap';
import { reduxForm } from 'redux-form';
import { JoinRoomAction } from '../../actions/index'

const io = require('socket.io-client')  
const socket = io('http://localhost:8080')



export class SocketTest extends React.Component{
    constructor(props){
        super(props);
    }

    handleFormSubmit(formProps){
        this.props.JoinRoomAction(formProps);
    }
    

    render(){
        const { handleSubmit, fields: { linkcode }} = this.props;
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
             <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="flex-fill">
                <div>
                <input type="text" id="linkEntry" placeholder="Enter Link Code Here" {...linkcode}/>
                </div>
                <FormGroup className="d-flex justify-content-end">
                <Button type="submit" id="submit" color="primary">Submit</Button>
                </FormGroup>
            </form>
            </div>
        )}
    }
 
export default reduxForm({form: 'LinkForm', fields: [ 'linkcode' ]}, null, { JoinRoomAction })(SocketTest);