import React, {useEffect, useRef, useState} from 'react';
import io from "socket.io-client";

const Video = (props) => {
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();
  const socketRef = useRef();
  const otherUser = useRef();
  const userStream = useRef();

  const [videoParams, setVideoParams] = useState(true); // Для включения/выключения видео
  const [microParams, setMicroParams] = useState(false); // Для включения/выключения звука

  useEffect(() => {

    navigator.mediaDevices.getUserMedia({audio: true, video: true}) // подключенные устройства
      .then(stream => {

        userVideo.current.srcObject = stream; // вывод видео
        userStream.current = stream; // для обращения к прототипам
        userStream.current.getAudioTracks()[0].enabled = microParams; // отключить микрофон

        // socketRef.current = io.connect('/');
        // socketRef.current.emit('join room', props.match.params.roomID);
        //
        // socketRef.current.on('other user', userID => {
        //   otherUser.current = userID;
        // })


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