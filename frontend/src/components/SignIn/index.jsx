import React, {useEffect, useReducer, useRef} from 'react';
import axios from 'axios';

import reducer from './reducer';
import Chat from '../Chat';
import io from "socket.io-client";

function App() {

    const socketRef = useRef();

    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: [],
    });

    let obj = {roomId: '123', userName: 'Rostislav'}

    useEffect(  () => {

        socketRef.current = io.connect("/");

        (async () => {
            await axios.post('/rooms', obj);

            dispatch({
                type: 'JOINED',
                payload: obj,
            });

            console.log('room join')
            socketRef.current.emit('ROOM:JOIN', obj);
            const { data } = await axios.get(`/rooms/${obj.roomId}`);
            dispatch({
                type: 'SET_DATA',
                payload: data,
            });
        })()


        return () => {
            console.log('disc')
            socketRef.current.disconnect()
        }

    }, [])


    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users,
        });
    };

    const addMessage = (message) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message,
        });
    };

    useEffect(() => {
        socketRef.current.on('ROOM:SET_USERS', setUsers);
        socketRef.current.on('ROOM:NEW_MESSAGE', addMessage);
    }, []);

    return (
      <Chat {...state} socketRef={socketRef} onAddMessage={addMessage} />
    );
}

export default App;
