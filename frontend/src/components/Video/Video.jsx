import React, {useRef, useEffect, useState} from "react";
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
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
      userVideo.current.srcObject = stream;
      userStream.current = stream;

      userStream.current.getAudioTracks()[0].enabled = microParams; // отключить микрофон

      socketRef.current = io.connect("/");
      socketRef.current.emit("join room", props.match.params.roomID);

      socketRef.current.on('other user', userID => {
        callUser(userID);
        otherUser.current = userID;
      });

      socketRef.current.on("user joined", userID => {
        otherUser.current = userID;
      });

      socketRef.current.on("offer", handleRecieveCall);

      socketRef.current.on("answer", handleAnswer);

      socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
    });



  }, []);

  function callUser(userID) {
    peerRef.current = createPeer(userID);
    userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
  }

  function createPeer(userID) {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.stunprotocol.org"
        },
        {
          urls: 'turn:numb.viagenie.ca',
          credential: 'muazkh',
          username: 'webrtc@live.com'
        },
      ]
    });

    peer.onicecandidate = handleICECandidateEvent;
    peer.ontrack = handleTrackEvent;
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

    return peer;
  }

  function handleNegotiationNeededEvent(userID) {
    peerRef.current.createOffer().then(offer => {
      return peerRef.current.setLocalDescription(offer);
    }).then(() => {
      const payload = {
        target: userID,
        caller: socketRef.current.id,
        sdp: peerRef.current.localDescription
      };
      socketRef.current.emit("offer", payload);
    }).catch(e => console.log(e));
  }

  function handleRecieveCall(incoming) {
    peerRef.current = createPeer();
    const desc = new RTCSessionDescription(incoming.sdp);
    peerRef.current.setRemoteDescription(desc).then(() => {
      userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
    }).then(() => {
      return peerRef.current.createAnswer();
    }).then(answer => {
      return peerRef.current.setLocalDescription(answer);
    }).then(() => {
      const payload = {
        target: incoming.caller,
        caller: socketRef.current.id,
        sdp: peerRef.current.localDescription
      }
      socketRef.current.emit("answer", payload);
    })
  }

  function handleAnswer(message) {
    const desc = new RTCSessionDescription(message.sdp);
    peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));
  }

  function handleICECandidateEvent(e) {
    if (e.candidate) {
      const payload = {
        target: otherUser.current,
        candidate: e.candidate,
      }
      socketRef.current.emit("ice-candidate", payload);
    }
  }

  function handleNewICECandidateMsg(incoming) {
    const candidate = new RTCIceCandidate(incoming);

    peerRef.current.addIceCandidate(candidate)
      .catch(e => console.log(e));
  }

  function handleTrackEvent(e) {
    partnerVideo.current.srcObject = e.streams[0];
  };

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

export default Video;