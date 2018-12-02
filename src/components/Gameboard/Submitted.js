import React from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Submitted extends React.Component {   
    render() {
        return (            
            <Col>
                <h3>{this.props.numSubmit}/7</h3>
            </Col> 
        )
    }
}