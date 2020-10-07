import React, {useEffect, useRef, useState} from 'react';

const Video = (props) => {
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();
  const socketRef = useRef();
  const otherUser = useRef();
  const userStream = useRef();

  const [videoParams, setVideoParams] = useState(true);
  const [microParams, setMicroParams] = useState(false);

  useEffect(() => {

    navigator.mediaDevices.getUserMedia({audio: true, video: true})
      .then(stream => {
        userVideo.current.srcObject = stream;
        userStream.current = stream;
        userStream.current.getAudioTracks()[0].enabled = microParams
      })

  }, [])

  useEffect(() => {

    if (userStream.current?.getVideoTracks()[0] && userStream.current.getVideoTracks()[0].enabled !== videoParams) {
      userStream.current.getVideoTracks()[0].enabled = videoParams
    }

    if (userStream.current?.getAudioTracks()[0] && userStream.current.getAudioTracks()[0].enabled !== microParams) {
      userStream.current.getAudioTracks()[0].enabled = microParams
    }

  }, [videoParams, microParams])


  return (
    <div>
      <video autoPlay ref={userVideo} />
      <button onClick={() => setMicroParams(prev => !prev)}>Micro</button>
      <button onClick={() => setVideoParams(prev => !prev)}>Video</button>

      <video autoPlay ref={partnerVideo} />
    </div>
  );
};

export default Video