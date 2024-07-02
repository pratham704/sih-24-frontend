import React, { useState, useRef, useEffect } from 'react';
import Peer from 'peerjs';

const Candidate = () => {
    const [peerId, setPeerId] = useState('');
    const [remotePeerId, setRemotePeerId] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerRef = useRef(null);
    const currentCallRef = useRef(null);

    useEffect(() => {
        const peer = new Peer();
        peer.on('open', (id) => {
            setPeerId(id);
        });

        peer.on('call', (call) => {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
                localVideoRef.current.srcObject = stream;
                localVideoRef.current.onloadedmetadata = () => {
                    localVideoRef.current.play();
                };
                call.answer(stream);
                call.on('stream', (remoteStream) => {
                    remoteVideoRef.current.srcObject = remoteStream;
                    remoteVideoRef.current.onloadedmetadata = () => {
                        remoteVideoRef.current.play();
                    };
                });
                currentCallRef.current = call;
                setIsConnected(true);
            });
        });

        peerRef.current = peer;
    }, []);

    const callPeer = (remoteId) => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            localVideoRef.current.srcObject = stream;
            localVideoRef.current.onloadedmetadata = () => {
                localVideoRef.current.play();
            };
            const call = peerRef.current.call(remoteId, stream);
            call.on('stream', (remoteStream) => {
                remoteVideoRef.current.srcObject = remoteStream;
                remoteVideoRef.current.onloadedmetadata = () => {
                    remoteVideoRef.current.play();
                };
            });
            currentCallRef.current = call;
            setIsConnected(true);
        });
    };

    const shareScreen = () => {
        navigator.mediaDevices.getDisplayMedia({ video: true }).then((screenStream) => {
            const videoTrack = screenStream.getVideoTracks()[0];
            const sender = currentCallRef.current.peerConnection.getSenders().find((s) => s.track.kind === 'video');
            sender.replaceTrack(videoTrack);

            videoTrack.onended = () => {
                navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
                    const localVideoTrack = stream.getVideoTracks()[0];
                    sender.replaceTrack(localVideoTrack);
                    localVideoRef.current.srcObject = stream;
                    localVideoRef.current.onloadedmetadata = () => {
                        localVideoRef.current.play();
                    };
                });
            };

            localVideoRef.current.srcObject = screenStream;
            localVideoRef.current.onloadedmetadata = () => {
                localVideoRef.current.play();
            };
        });
    };

    return (
        <div className="p-6 bg-grey rounded-lg shadow-md">
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Your ID: {peerId}</h2>
            </div>
            <div className="mb-4 flex space-x-4 items-center">
                <div className="flex-1">
                    <input
                        type="text"
                        value={remotePeerId}
                        onChange={(e) => setRemotePeerId(e.target.value)}
                        placeholder="Enter proctor peer ID"
                        className="text-black border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => callPeer(remotePeerId)}>
                        Connect
                    </button>
                </div>
            </div>
            {isConnected && (
                <div className="mb-4">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={shareScreen}>
                        Share Screen
                    </button>
                </div>
            )}
            <div className="flex mb-4 space-x-4">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">Local Video</h3>
                    <video ref={localVideoRef} className="w-full h-auto border border-gray-300 rounded-md" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">Proctor's Video</h3>
                    <video ref={remoteVideoRef} className="w-full h-auto border border-gray-300 rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Candidate;
