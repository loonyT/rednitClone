import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name = "Sarah"
            message = "how is it shaking dude ?"
            timestamp = "35 min ago"
            profilePic = "https://laguildedupixel.fr/wp-content/uploads/sarah.jpeg"
            />
            <Chat 
            name = "Ellen"
            message = "ready for a crazy night ?"
            timestamp = "55 min ago"
            profilePic = "https://static.wikia.nocookie.net/pixar/images/c/cf/ELLENDEGENERES.jpeg/revision/latest/scale-to-width-down/340?cb=20170408022803"
            />
            <Chat 
            name = "Sandra"
            message = "up for coffee ?"
            timestamp = "3 days  ago"
            profilePic = "https://www.crossfitlerouge.com/wp-content/uploads/2019/12/Sandra.jpeg"
            />
            <Chat 
            name = "Natasha"
            message = "are you still sleeping ?"
            timestamp = "1week ago"
            profilePic = "https://images.squarespace-cdn.com/content/v1/5a81bd02dc2b4a563d0dde49/1538430223707-2V4MWH5THWCIMYS2QIS7/ke17ZwdGBToddI8pDm48kG-BinFb9j1BZ5PKpdJXUZZZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVE93f_S5l3ko2xudrp-S6Gk6_dDHX3N54RJpPHYbt3bj42YSneHSHQ4pWbLtUOrr7s/Short+Hair.jpeg"
            />

        </div>
    );
}

export default Chats;
