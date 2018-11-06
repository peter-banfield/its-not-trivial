import React from 'react';
import { Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

export default class RoomCode extends React.Component {
    constructor(props) {
        super(props)
        this.Roomcode = "ABCD";
        this.players = ["Peter", "Ryan", "Brenden", "Carl", "Jake", "Noel"];
    }
    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="h-75 w-100 text-center">
                    <Row className="h-100">
                        <Col className="d-flex align-items-center justify-content-center w-100">
                            <h1>
                                Room Code: {this.Roomcode}
                            </h1>
                        </Col>
                        <Col className="d-flex justify-content-center flex-column bd-highlight mb-3 w-100">
                        <ListGroup>
                                <ListGroupItem>{this.players[0]}</ListGroupItem>
                                <ListGroupItem>{this.players[1]}</ListGroupItem>
                                <ListGroupItem>{this.players[2]}</ListGroupItem>
                                <ListGroupItem>{this.players[3]}</ListGroupItem>
                                <ListGroupItem>{this.players[4]}</ListGroupItem>
                                <ListGroupItem>{this.players[5]}</ListGroupItem>
                                <ListGroupItem>{this.players[6]}</ListGroupItem>
                            </ListGroup>  
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}

