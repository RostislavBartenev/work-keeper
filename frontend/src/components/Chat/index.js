import React, {useEffect} from 'react';
import {Button} from "@material-ui/core";

function Chat({ users, messages, userName, roomId, onAddMessage, socketRef, userInfo }) {
    const [messageValue, setMessageValue] = React.useState('');
    const messagesRef = React.useRef(null);

    const onSendMessage = () => {
      if (messageValue.trim()) {
        socketRef.current.emit('ROOM:NEW_MESSAGE', {
          userName,
          roomId,
          text: messageValue,
        });
        onAddMessage({ userName, text: messageValue });
        setMessageValue('');
      }

    };

    useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
    }, [messages]);



    return (
        <div className="chat">
            <div className="chat-users">
                <b>Онлайн ({users.length}):</b>
                <ul>
                    {users.map((name, index) => (
                        <li key={name + index}>{name}</li>
                    ))}
                </ul>
            </div>
            <div className="chat-messages">
                <div ref={messagesRef} className="messages">
                    {messages.map((message, index) => (
                      message.userName === userInfo ?
                        <div key={index} style={{textAlign: "right"}} className="message">
                        <p style={{backgroundColor: '#29648A'}}>{message.text}</p>
                        <div>
                          <span>{message.userName}</span>
                        </div>
                      </div> :
                        <div key={index} className="message">
                          <p>{message.text}</p>
                          <div>
                            <span>{message.userName}</span>
                          </div>
                        </div>
                    ))}
                </div>
                <form>
                  <textarea
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  className="form-control"
                  rows="3"/>
                  <Button onClick={onSendMessage} type="button" className="btn btn-primary">
                      Отправить
                  </Button>
                </form>
            </div>
        </div>
    );
}

export default Chat;
