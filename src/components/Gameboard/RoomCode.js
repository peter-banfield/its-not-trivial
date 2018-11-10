import React from 'react';
import { Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';


class RoomCode extends React.Component {
    
    renderPlayers(){        
        return this.props.players.map(p =>{
            return (
                <ListGroupItem key={p.id}>{p.name}</ListGroupItem>
            );
        });
    }

    componentWillReceiveProps(nextProps){ // redirect to pages depending on the gameReady status
        if(nextProps.gameReady.ready === true){   
            console.log(nextProps.gameReady.ready);
            this.props.history.push("/rules");
        }
        else{
            console.log(nextProps.gameReady.ready);
            this.props.history.push("/blank");
        }
    }

    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="h-75 w-100 text-center">
                    <Row className="h-100">
                        <Col className="d-flex align-items-center justify-content-center w-100">
                            <h1>
                                Room Code: {this.props.room.code}
                            </h1>
                        </Col>
                       
                        <Col className="d-flex justify-content-center flex-column bd-highlight mb-3 w-100">
                            <ListGroup>                            
                                {this.renderPlayers()}
                            </ListGroup>  
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        players: state.players,
        room: state.room,
        gameReady: state.gameReady
    }
}

export default connect(mapStateToProps)(RoomCode);