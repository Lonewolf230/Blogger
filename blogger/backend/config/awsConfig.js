require('dotenv').config()
const AWS=require('aws-sdk')

AWS.config.update({region:process.env.REGION})

const cognito=new AWS.CognitoIdentityServiceProvider();
module.exports=cognito