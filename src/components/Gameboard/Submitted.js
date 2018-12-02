import React from 'react';
import { Col } from 'reactstrap';

export default class Submitted extends React.Component {
    
    render() {
        return (            
            <Col>
                <h3>{(this.props.numSubmit)}/{this.props.maxPlayers}</h3>
            </Col> 
        )
    }
}

