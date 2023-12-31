import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const VideoConference = () => {
    const { roomId } = useParams()

    const mymeeting = async(element)=>{
       const appId=1462398268
       const serverSecret = '95fc868813a7f58fb8f9b69baec0f3dc'
       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId , serverSecret , roomId , Date.now().toString() , "Sahil wagh")
       const zc = ZegoUIKitPrebuilt.create(kitToken)
       zc.joinRoom({
           container:element,
           scenario:{
               mode:ZegoUIKitPrebuilt.OneONoneCall
           },
           showScreenSharingButton:false
       })
    };

    return (
        <div className='videoConference_container'>
            <div ref={mymeeting}/>
        </div>
    )
}

export default VideoConference