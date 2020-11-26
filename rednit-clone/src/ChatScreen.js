import React, {useState} from 'react';
import './ChatScreen.css';
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {

    const [messages, setMessages] = useState ([

    {

      name: 'Ellen',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Clara_Morgane_1.jpg/683px-Clara_Morgane_1.jpg',
      message: 'Whats up yo'

    },
    {

        name: 'Ellen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Clara_Morgane_1.jpg/683px-Clara_Morgane_1.jpg',
        message: 'whats going on ?'
  
      },
      {

        message: 'how is it going ?'
  
      },



    ]);



    return (
        <div className="chatScreen">
            
            <p className="chatScreen__timestamp"> you matched with Ellen on 10/08/20</p>
            {messages.map(message => (
                <div className="chatScreen__message">
                    <Avatar   

                       className="chatScreen__image"
                       alt={message.name}
                       src={message.image}
                        />
                    <p className="chatScreen__text">{message.message} </p>
                     </div>
                ))}
        </div>
    );
}

export default ChatScreen;
