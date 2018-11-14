import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class JoinRoom extends React.Component {

    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
            <Form className="flex-fill" >
                <FormGroup>
                    <Label for="RoomCode">Room Code</Label>
                    <Input>type="text" name="text" id="RoomCode"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Name">Name</Label>
                     <Input>type="text" name="text" id="Name"></Input>
                </FormGroup>
                <FormGroup className="d-flex justify-content-end">
                <Button color="primary">Submit</Button>
                </FormGroup>
            </Form>
            </div>
        )
    }
}