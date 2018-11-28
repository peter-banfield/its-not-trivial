import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class ErrorScreen extends React.Component {
        render() {
            return (
                <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                    <Jumbotron>
                        <h1>There has been some sort of error. You will need to start</h1>
                    </Jumbotron>
                </div>
            )
        }
}