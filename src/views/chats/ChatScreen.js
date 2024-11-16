import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
const ChatScreen = ({socket , messages,RecievedId,senderId}) => {

  console.log({socket , messages,RecievedId,senderId});
  
   
    const [deleteIcon , setdeleteIcon] = useState(null)

    useEffect(() => {
        if(socket){
            // chatList(_id)
            getMessages(senderId, RecievedId)
        }
      },[socket,RecievedId])

      // Function to send a new message


  // Function to get message history
  const getMessages = (senderId, RecievedId) => {
    if (socket) {
      socket.emit('Getting_Messages', { sender_Id: senderId, reciever_Id: RecievedId });
    }
  };

//   const chatList = (senderId) => {
//     console.log("fff" , senderId);
    
//     if(socket){
//         socket.emit('Chatlist' , { sender_Id : senderId})
//     }
//   }

  const handleIcon = (msg) => {
    console.log("lll" , msg);
    
    setdeleteIcon(msg)
    
  }

  const deleteMessage = () => {
    console.log("gggxxx");
    let deletedIds = []
    deletedIds.push(deleteIcon)
    if(socket){
        socket.emit('Deleting_Messages' , { sender_Id : senderId , _id : deletedIds})
        getMessages(senderId, RecievedId)
    }
  }

  console.log("messages",messages)

  return (
    <div>
     {
                    messages.length > 0 ?
                    messages?.map((msg, index) => {
                      if(msg.reciever_Id && msg.sender_Id){
                        return(
                          <div
                          
                                key={index}
                                style={{
                                    textAlign: msg.sender_Id === senderId ? 'right' : 'left',
                                    backgroundColor: msg.sender_Id === senderId ? '#DCF8C6' : '#FFF',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    margin: '5px 0',
                                    maxWidth: '100%',
                                    alignSelf: msg.sender_Id === senderId ? 'flex-end' : 'flex-start'
                                }}
                            >
                                <div>
                                {deleteIcon === msg._id && (
                                            <RiDeleteBin6Line onClick={() => deleteMessage()} />
                                        )}
                                    <div style={{ fontSize :17}} onClick={() => handleIcon (msg._id)}>  {msg?.message} </div>
                                        <div style={{ fontSize :10}}>
                                            {new Date(msg?.createdAt).toTimeString().split(' ')[0]}
                                        </div>
                                </div>
                            </div>
                        )}})
                    : "No messages found"
                }
    </div>
  )
}

export default ChatScreen
