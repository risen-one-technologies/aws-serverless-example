'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.deleteJob = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    };
    let statusCode = 200;
    console.log("about to parse event: ",event);
    //const data = JSON.parse(event.body);
    //console.log("EVENT:::", data);

    const id = event.pathParameters.id;

    const params = {
        TableName: process.env.JOBS_TABLE,
        Key: { 
            id: id
        }
    }

    console.log("Deleting Job");

    try{
        await dynamoDb.delete(params).promise()
            .then(res => {
                callback(null, {
                    statusCode,
                    headers,
                    body: JSON.stringify({message: 'Deleted Job Successfully!'})
                });
            }).catch(err => {
                console.log(err);
                callback(null, {
                    statusCode: 501,
                    headers,
                    body: JSON.stringify({message: 'Unable to Delete Job'})
                });
            });
    } catch (err) {
        return { error: err }
    }
};