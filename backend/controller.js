var userProfileModel = require('./userProfileModel') ;
var teacherVideoModel = require('./teacherVideoModel') ;
var eventModel = require('./eventModel') ; 
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
        var newVideo = await teacherVideoModel(
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

const handleEventPosting = async(req,res) => {
    const {eventTitle,eventDescription,eventVenue,eventTimings} = req.body ;
    try {
        var newVideo = await eventModel (
            {
                eventTitle,eventDescription,eventVenue,eventTimings
            }
        )
        newVideo.save() ;
        return res.status(200).send({message:'Successfully scheduled the event',success:true,newVideo}) ;
    }
    catch(error)
    {
        return res.status(404).send({message:'Unable to do schedule the event',success:false}) ;
    }
}


var userProfileRouter = express.Router() ;
var userLoginRouter = express.Router() ;
var videoPostingRouter = express.Router() ;
var eventPostingRouter = express.Router() ;

userProfileRouter.post('/postUserProfile',handleUserProfile) ;
userLoginRouter.post('/postUserLogin',handleUserLogin) ;
videoPostingRouter.post('/postNewVideo',handleVideoPosting) ;
eventPostingRouter.post('/postNewEvent',handleEventPosting) ;

module.exports = {userProfileRouter,userLoginRouter,videoPostingRouter,eventPostingRouter} ;
