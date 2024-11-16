import React, { useState } from 'react';
import { Badge } from 'antd';

const ChatList = ({ chatlist, setRecievedId, setchatDetail, Image_URL, setSearchUser, senderId }) => {

    let recieverId = (chatl) => {
        // Determine the receiver ID based on whether senderId matches the reciever or sender
        const receiverId = chatl.sender_Id._id === senderId ? chatl.reciever_Id._id : chatl.sender_Id._id;
        setRecievedId(receiverId);
        setchatDetail(chatl);
        setSearchUser(null);
    }

    const [show, setShow] = useState(true);

    return (
        <div>
            {
                chatlist.length > 0 ?
                    chatlist?.map((chatl, index) => {
                        // Determine whether the user is the sender or receiver
                        const isSender = chatl.sender_Id._id === senderId;
                        const userToShow = isSender ? chatl.reciever_Id : chatl.sender_Id;  // Show the opposite user
                        
                        return (
                            <div 
                                onClick={() => recieverId(chatl)} 
                                key={index} 
                                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0 0 25px" }} 
                            >
                                <div>
                                    <img 
                                        src={Image_URL + userToShow?.image} 
                                        width={50} 
                                        height={50} 
                                        style={{ borderRadius: "50%" }} 
                                        alt="user"
                                    />
                                </div>
                                <div>
                                    <div>{userToShow?.firstName + " " + userToShow?.lastName}</div>
                                    <div>{chatl?.lastmessage}</div>
                                </div>
                                <div>
                                    <Badge count={show ? chatl?.totalunread : 0} showZero color="#faad14" />
                                </div>
                            </div>
                        );
                    })
                    :
                    "No Chatlist found"
            }
        </div>
    );
}

export default ChatList;
