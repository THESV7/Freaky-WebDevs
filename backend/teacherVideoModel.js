var mongoose = require('mongoose') ;

var videoSchema = mongoose.Schema(
    {
        courseTitle : {
            type:String ,
            required :true 
        } ,

        courseDescription : {
            type:String ,
            required: true 
        } ,
        courseUrl : {
            type:String ,
            required:true 
        }
    }
)

if(mongoose.models['videosData']){
     return mongoose.model('videosData') ;
}

var videosData = mongoose.model('videosData',videoSchema) ;
module.exports = videosData ; 
