var userProfileModel = require('./userProfileModel') ;
var express = require('express') ;
const handleUserProfile = async(req,res) => {
    const {userName, userEmailAddress, userPassword, userAge, userAreaofInterest} = req.body ;
    try {
        var newUser = await userProfileModel(
            {
                userName,userEmailAddress,userPassword,userAge,userAreaofInterest
            }
        )
        newUser.save() ;
        return res.status(200).send({message:'Successfully added the user',success:true,newUser}) ;
    }
    catch(error)
    {
        return res.status(404).send({message:'Unable to add the user',success:false}) ;
    }
}

const handleUserLogin = async(req,res) => {
    const {userEmailAddress,userPassword} = req.body ;
    try {
        var prevUser = await userProfileModel.findOne({
            userEmailAddress:req.body.userEmailAddress 
        })
        if(!prevUser){
            return res.status(500).send({message:'Invalid email address',success:false}) ;
        }
        else if(prevUser.userPassword !== req.body.userPassword) {
            return res.status(500).send({message:'Invalid password',success:false}) ;
        } 
        else {
            return res.status(201).send({message:'Login successfull',success:true}) ;
        }
    }
    catch(error){
        return res.status(500).send({message:'Bad request',success:false}) ;
    }
}

const handleVideoPosting = async(req,res) => {
    const {courseTitle,courseDescription,courseUrl} = req.body ;
    try {
        var newVideo = await userProfileModel(
            {
                courseTitle,courseDescription,courseUrl
            }
        )
        newVideo.save() ;
        return res.status(200).send({message:'Successfully added the video',success:true,newVideo}) ;
    }
    catch(error)
    {
        return res.status(404).send({message:'Unable to add the video',success:false}) ;
    }
}


var userProfileRouter = express.Router() ;
var userLoginRouter = express.Router() ;
var videoPostingRouter = express.Router() ;

userProfileRouter.post('/postUserProfile',handleUserProfile) ;
userLoginRouter.post('/postUserLogin',handleUserLogin) ;
videoPostingRouter.post('/postNewVideo',handleVideoPosting) ;

module.exports = {userProfileRouter,userLoginRouter,videoPostingRouter} ;
