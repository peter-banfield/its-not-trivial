import React from 'react';
import { Col } from 'reactstrap';
import { Redirect } from 'react-router';

export default class Timer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 60,
            
        }
        // this.state = {
        //     timeO: false,
        //   }
    }
    render() {
        
        return (
            <Col>
                <h3>{this.state.count} Seconds</h3>
            </Col>
        )
    }

    
    componentDidMount() {
        this.myInterval = setInterval(() => {
            if(this.state.count != 0){
                this.setState(prevState => (
                    {
                    count: prevState.count - 1
    
                }))
            }
            
        }, 1000)
    }
    componentWillUnmount () {
        clearInterval(this.myIngterval)
    }
}
