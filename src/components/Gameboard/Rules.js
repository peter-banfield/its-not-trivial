import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class Rules extends React.Component {
    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                <Jumbotron>
                    <h1>Rules</h1>
                    <hr className="my-2" />
                    <ul>
                        <li>4-7 Players</li>
                        <li>Once a question has been asked players will have 60 seconds to respond with a numerical answer</li> 
                        <li>The players will then have 60 seconds to place two bets on the answer or answers they believe closest to the correct answer without going over</li>        
                        <li>Points are awarded in the following fashion</li>        
                        <ul>
                            <li>One bet will be worth 2 points</li>
                            <li>The other bet will be worth 1 point</li>
                            <li>Correct bets placed on Smaller than the Smallest will give 1 bonus point</li>
                            <li>Providing an answer that is exactly correct will give 2 bonus points.</li>
                            <li>Once per round you can double down and double the points from one of your two bets if successful</li>
                        </ul>
                    </ul>
                </Jumbotron>
            </div>
        )
    }
}