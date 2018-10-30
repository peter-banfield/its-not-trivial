import React from 'react';
import { Container, Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

export default class RoomCode extends React.Component {
    constructor(props) {
        super(props)
        this.Roomcode = "ABCD";
        this.players = ["Peter", "Ryan", "Brenden", "Carl", "Jake", "Noel"];
    }
    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Container>
                    <Row>
                        <Col>
                        <Jumbotron>
                            <h1>
                                Room Code: {this.Roomcode}
                            </h1>
                        </Jumbotron>
                        </Col>
                        <Col>
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
                </Container>
            </div>
        )
    }
}