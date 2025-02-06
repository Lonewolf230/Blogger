const cognito=require('../config/awsConfig')
require('dotenv').config()

exports.signup=async (req,res)=>{
    const {email,password}=req.body

    const params={
        ClientId:process.env.CLIENT_ID,
        Username:email.split('@')[0],
        Password:password,
        UserAttributes:[
            {
                Name:"email",
                Value:email
            }
        ]
    }
    try{
        await cognito.signUp(params).promise();
        res.status(200).json({message:"User created successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"User creation failed"})
    }
}

exports.login=async (req,res)=>{
    const {email,password}=req.body

    const params={
        AuthFlow:"USER_PASSWORD_AUTH",
        ClientId:process.env.CLIENT_ID,
        AuthParameters:{
            USERNAME:email,
            PASSWORD:password
        }
    }
    try{
        const data=await cognito.initiateAuth(params).promise();
        res.status(200).json({token:data.AuthenticationResult})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Login failed"})
    }
}

exports.verifyUser=async (req,res)=>{
    const {email,code}=req.body
    const params={
        ClientId:process.env.CLIENT_ID,
        Username:email.split('@')[0],
        ConfirmationCode:code
    }
    try{
        await cognito.confirmSignUp(params).promise()
        res.status(200).json({message:"User verified Successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"User unverified"})
    }
}

exports.logout=async (req,res)=>{
    const {accessToken}=req.body
    const params={
        AccessToken:accessToken
    }
    try{
        await cognito.globalSignOut(params).promise()
        res.status(200).json({message:"Logged Out successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Logout Failed",error:err.message})
    }
}

exports.deleteUser=async (req,res)=>{
    const {accessToken}=req.body
    const params={
        AccessToken:accessToken
    }
    try{
        await cognito.deleteUser(params).promise()
        res.status(200).json({message:"User deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"USer deletion failed",error:err.message})
    }
}