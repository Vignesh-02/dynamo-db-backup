const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

module.exports.handler = async () =>{
    try{
        const date = new Date();
        //javascript months are 0 based. Hence you need to add + 1
        const params ={
            BackupName: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`,
            TableName: process.env.DYNAMODB_TABLE_NAME
        };
        const backupsRes = await dynamodb.createBackup(params).promise();
        console.log({backupsRes});
    }catch(e){
        console.log(e);
    }
    return;
};