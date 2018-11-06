import React from 'react';
import { Button } from 'reactstrap';

export default class CreateGame extends React.Component {
        render() {
            return (
                <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                    <Button size="lg">Create Game</Button>
                </div>
            )
        }
}