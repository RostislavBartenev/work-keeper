import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";

import MicNoneIcon from '@material-ui/icons/MicNone';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';

import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';

import './room.sass'
import {useSelector} from "react-redux";

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {

    props.peer.on("stream", stream => {
      ref.current.srcObject = stream;
    })
  }, []);

  return (
    <video autoPlay ref={ref} />
  );
}


const Room = () => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = useSelector(state => state.department.videoConf);
  const userStream = useRef();

  const [videoParams, setVideoParams] = useState(true); // Для включения/выключения видео
  const [microParams, setMicroParams] = useState(false); // Для включения/выключения звука

  useEffect(() => {
    socketRef.current = io.connect(process.env.REACT_APP_SERVER_URL);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        userVideo.current.srcObject = stream;
        userStream.current = stream;

        userStream.current.getAudioTracks()[0].enabled = microParams;

        socketRef.current.emit("join room", roomID);
        socketRef.current.on("all users", users => {
          const peers = [];
          for (let userID of users) {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            })
            peers.push({
              peerID: userID,
              peer
            });
          }

          setPeers(peers);
        })

        socketRef.current.on("user joined", payload => {

          const peer = addPeer(payload.signal, payload.callerID, stream);

          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          })

          const peerObj = {
            peerID: payload.callerID,
            peer,
          }


          setPeers(users => {
            let newUsers = users.filter(el => el.peerID !== peerObj.peerID)
            return [...newUsers, peerObj]
          });


        });

        socketRef.current.on("receiving returned signal", payload => {
          const item = peersRef.current.find(p => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });

        socketRef.current.on('user left', id => {
          const peerObj = peersRef.current.find(p => p.peerID === id)
          if (peerObj) {
            peerObj.peer.destroy()
            const peers = peersRef.current.filter(p => p.peerID !== id)
            peersRef.current = peers
            setPeers(peers)
          }
        })

      })

    return () => {
      userStream.current.getTracks().forEach(el => el.stop())
      socketRef.current.destroy()
    }
  }, []);


  useEffect(() => {
    if (userStream.current && userStream.current.getVideoTracks()[0] && userStream.current.getVideoTracks()[0].enabled !== videoParams) {
      userStream.current.getVideoTracks()[0].enabled = videoParams
    }
    if (userStream.current && userStream.current.getAudioTracks()[0] && userStream.current.getAudioTracks()[0].enabled !== microParams) {
      userStream.current.getAudioTracks()[0].enabled = microParams
    }

  }, [videoParams, microParams])

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    let count = 0

    peer.on("signal", signal => {
      if (!count) {
        count++
        socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
      }
    })

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    })

    peer.on("signal", signal => {
      socketRef.current.emit("returning signal", { signal, callerID })
    })

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <div className="videochat-container">
      <div className="videochat-user">
        <video muted ref={userVideo} autoPlay />
        <div className="videochat-user-buttons">
          {microParams ? <button onClick={() => setMicroParams(prev => !prev)}><MicNoneIcon /> </button> :
            <button className='red' onClick={() => setMicroParams(prev => !prev)}><MicOffOutlinedIcon /> </button>
          }

          {videoParams ? <button onClick={() => setVideoParams(prev => !prev)}><VideocamOutlinedIcon /> </button> :
            <button className='red' onClick={() => setVideoParams(prev => !prev)}><VideocamOffOutlinedIcon /> </button>
          }
        </div>
      </div>
      <div className="videochat-companions">
          {peers.map(peer =>  {
            return (
              <Video key={peer.peerID} peer={peer.peer}/>
            )
          })}
      </div>
    </div>
  );
};

export default Room;
