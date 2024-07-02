import React, { useState, useRef, useEffect } from 'react';
import Peer from 'peerjs';

const Proctor = () => {
  const [peerId, setPeerId] = useState('');
  const [remotePeerId, setRemotePeerId] = useState('');
  const [remotePeers, setRemotePeers] = useState([]);
  const localVideoRef = useRef(null);
  const peerRef = useRef(null);
  const callsRef = useRef({});

  useEffect(() => {
    const peer = new Peer();
    peer.on('open', (id) => {
      setPeerId(id);
    });

    peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
        localVideoRef.current.srcObject = stream;
        localVideoRef.current.play();
        call.answer(stream);
        call.on('stream', (remoteStream) => {
          callsRef.current[call.peer] = { call, remoteStream };
          setRemotePeers((prevPeers) => {
            if (!prevPeers.includes(call.peer)) {
              return [...prevPeers, call.peer];
            }
            return prevPeers;
          });
        });
      }).catch((error) => {
        console.error('Error accessing media devices:', error);
      });
    });

    peerRef.current = peer;
  }, []);

  const callPeer = (remoteId) => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideoRef.current.srcObject = stream;
      localVideoRef.current.play();
      const call = peerRef.current.call(remoteId, stream);
      call.on('stream', (remoteStream) => {
        callsRef.current[remoteId] = { call, remoteStream };
        setRemotePeers((prevPeers) => {
          if (!prevPeers.includes(remoteId)) {
            return [...prevPeers, remoteId];
          }
          return prevPeers;
        });
      });
    }).catch((error) => {
      console.error('Error accessing media devices:', error);
    });
  };

  return (
    <div className="p-5">
      <div>
        <h2 className="text-lg font-bold mb-2">Your ID: {peerId}</h2>
      </div>
      <div className="mb-5">
        <input
          type="text"
          value={remotePeerId}
          onChange={(e) => setRemotePeerId(e.target.value)}
          placeholder="Enter candidate peer ID"
          className="border p-2 mr-2"
        />
        <button onClick={() => callPeer(remotePeerId)} className="bg-blue-500 text-white p-2 rounded">Connect</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-5">
          <h3 className="text-lg font-bold mb-2">Local Video</h3>
          <video ref={localVideoRef} className="w-full h-auto border" />
        </div>
        {remotePeers.map((peerId) => (
          <div key={peerId} className="mb-5">
            <h4 className="text-md font-bold mb-2">Remote Peer ID: {peerId}</h4>
            <video
              ref={(ref) => {
                if (ref && callsRef.current[peerId]) {
                  ref.srcObject = callsRef.current[peerId].remoteStream;
                  ref.play().catch((error) => console.error('Error playing video:', error));
                }
              }}
              className="w-full h-auto border"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proctor;