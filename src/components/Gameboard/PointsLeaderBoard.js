import React from 'react';
import { Jumbotron, Col, Row, Table } from 'reactstrap';

export default class PointsLeaderBoard extends React.Component {
    render() {
        return (
            <Col className="d-flex align-items-center justify-content-center w-100 h-100">
                <Jumbotron className="w-100 h-75 text-center">
                    <Row className="text-center">
                        <div className="w-100">
                            <h1>Leaderboard</h1>
                        </div>
                    </Row>
                    <Row>
                        <Table bordered>
                        <thead>
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Name</th>
                                <th scope="col">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Chris</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Peter</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Carl</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Brenden</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Noel</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Daniel</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Jake</td>
                                <td>3</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Jumbotron>
            </Col>
        )
    }
}