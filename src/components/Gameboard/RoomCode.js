import React from 'react';
import { Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';



class RoomCode extends React.Component {
    
    renderPlayers(){        
        return Object.keys(this.props.players).map(p =>{
            return (
                <ListGroupItem >{p}</ListGroupItem>
            );
        });
    }

    componentWillReceiveProps(nextProps){ // redirect to pages depending on the gameReady status
        if(nextProps.gameReady === 1){   
            this.props.history.push("/rules");
        }
    }

    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="h-75 w-100 text-center">
                    <Row className="h-100">
                        <Col className="d-flex align-items-center justify-content-center w-100">
                            <h1>
                                Room Code: {this.props.room}
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
        players: state.gameplay.users,
        room: state.session.code,
        gameReady: state.gameplay.screen
    }
}

export default connect(mapStateToProps)(RoomCode);