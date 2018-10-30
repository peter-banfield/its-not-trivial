import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class PlaceBets extends React.Component {
    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
            <Form className="flex-fill" >
                <FormGroup>
                    <Label for="SelectBigBet">Select Your Big Bet</Label>
                    <Input type="select" name="select" id="SelectBigBet">
                        
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="SelectSmallBet">Select Your Small Bet</Label>
                    <Input type="select" name="select" id="SelectSmallBet">

                    </Input>
                </FormGroup>
                <FormGroup className="d-flex justify-content-end">
                <Button color="primary">Submit</Button>
                </FormGroup>
            </Form>
            </div>
        )
    }
}