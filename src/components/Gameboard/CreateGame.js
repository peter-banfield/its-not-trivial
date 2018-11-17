import React from 'react';
import { Button } from 'reactstrap';
import io from 'socket.io-client';
var AWS = require("aws-sdk");
var randomstring = require("randomstring");
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:80d57a52-edb2-44de-acb8-e6759c55991d',
});
var dynamodb = new AWS.DynamoDB();


const socket = io('http://localhost:8080')

export default class CreateGame extends React.Component {
        constructor(props){
            super(props);
            // This binding is necessary to make `this` work in the callback
            this.gameCreate = this.gameCreate.bind(this);
        }
        
        gameCreate = event => {           
            var generateuniquecode = function(){
                var roomcode = randomstring.generate({length: 4, charset: 'alphabetic'}).toUpperCase();                
                dynamodb.putItem({Item: {"id": {S: roomcode}, "CanJoin": {BOOL: true}},TableName: "Rooms",ConditionExpression:"attribute_not_exists(id)"}, function(err, res){
                    if(err) generateuniquecode();
                    else{
                        // DO what is needed after a unique roomcode is generated and put in the database
                    };
                });
            } 
            generateuniquecode()
            
        }

        render() {
            return (
                <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100%'}}>
                    <Button size="lg" onClick={this.gameCreate}>Create Game</Button>
                </div>
            )
        }
}