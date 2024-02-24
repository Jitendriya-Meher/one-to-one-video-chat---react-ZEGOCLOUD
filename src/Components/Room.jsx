import React from 'react'
import { useParams } from 'react-router-dom'
import { appId, serversecret } from './helper';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {

    const {roomId} = useParams();

    const myMeeting = async (element) => {

        const appID = appId;
        const serverSecret = serversecret;
        const roomID = roomId;
        const id1 = Date.now().toString();
        const id2 = "Jitendriya Meher";

        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, id1, id2);

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,           
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            sharedLinks: [
                {
                  name: 'Copy link',
                  url: `http://localhost:3000/room/${roomId}`
                },
            ],
            showScreenSharingButton:false
        });

    }

  return (
    <div>
      <div className="" ref={myMeeting}></div>
    </div>
  )
}

export default Room
