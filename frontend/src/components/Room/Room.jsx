import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    display: flex;
    height: 100vh;
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
`;

const StyledVideo = styled.video`
    height: 40%;
    width: 50%;
`;

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {

    props.peer.on("stream", stream => {
      ref.current.srcObject = stream;
    })
  }, []);

  return (
    <StyledVideo playsInline autoPlay ref={ref} />
  );
}


const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2
};

const Room = (props) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = props.match.params.roomID;
  const userStream = useRef();
  const peerRef = useRef();

  const [videoParams, setVideoParams] = useState(true); // Для включения/выключения видео
  const [microParams, setMicroParams] = useState(false); // Для включения/выключения звука

  useEffect(() => {
    socketRef.current = io.connect("/");
    navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true })
      .then(stream => {
        userVideo.current.srcObject = stream;
        userStream.current = stream;

        userStream.current.getAudioTracks()[0].enabled = microParams; // отключить микрофон

        socketRef.current.emit("join room", roomID);
        socketRef.current.on("all users", users => {

          const peers = [];
          users.forEach(userID => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            })
            peers.push(peer);
          })
          setPeers(peers);
        })

        socketRef.current.on("user joined", payload => {
          console.log('user join')
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          })

          setPeers(users => [...users, peer]);
        });

        socketRef.current.on("receiving returned signal", payload => {
          const item = peersRef.current.find(p => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });


      })


    socketRef.current.on("user left", () => {
      console.log('left')
      setPeers([])
      peerRef.current.destroy()
    })

  }, []);

  useEffect(() => {
    if (userStream.current?.getVideoTracks()[0] && userStream.current.getVideoTracks()[0].enabled !== videoParams) {
      userStream.current.getVideoTracks()[0].enabled = videoParams
    }
    if (userStream.current?.getAudioTracks()[0] && userStream.current.getAudioTracks()[0].enabled !== microParams) {
      userStream.current.getAudioTracks()[0].enabled = microParams
    }

  }, [videoParams, microParams])

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", signal => {
      socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
    })

    peerRef.current = peer;

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    console.log('add user')
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    })

    peer.on("signal", signal => {
      socketRef.current.emit("returning signal", { signal, callerID })
    })

    peer.signal(incomingSignal);

    peerRef.current = peer;

    return peer;
  }


  return (
    <Container>
      {console.log('Render comp')}
      <StyledVideo muted ref={userVideo} autoPlay playsInline />
      <button onClick={() => setMicroParams(prev => !prev)}>Micro</button>
      <button onClick={() => setVideoParams(prev => !prev)}>Video</button>
      {peers.map((peer, index) => {
        return (
          <Video key={index} peer={peer} />
        );
      })}
    </Container>
  );
};

export default Room;