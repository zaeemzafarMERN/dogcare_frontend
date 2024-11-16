import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
const ChatScreen = ({socket , messages,RecievedId,senderId , messagess}) => {
 
    const [deleteIcon , setdeleteIcon] = useState(null)

  // Function to get message history
  const getMessages = (RecievedId) => {
    if (socket) {
      socket.emit('Group_Getting_Messages', { group_Id: RecievedId });
    }
   
  };

  useEffect(() => {
    if(socket){
        // chatList(_id)
        getMessages(RecievedId)
    }
  },[socket,RecievedId,messages])



  

  // Function to send a new message

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
    let deletedIds = []
    deletedIds.push(deleteIcon)
    if(socket){
        socket.emit('Deleting_Group_Messages' , { group_Id : RecievedId , _id : deletedIds})
        getMessages(RecievedId)
    }
  }


  const mergedMessages = [...messages, ...messagess]; 

  return (
    <div>
     {
                    mergedMessages?.length > 0 ?
                    mergedMessages?.map((msg, index) => (
                        <div
                            key={index}
                            style={{
                                // textAlign: msg.sender_Id === senderId ? 'right' : 'left',
                                // backgroundColor: msg.sender_Id === senderId ? '#DCF8C6' : '#FFF',
                                padding: '10px',
                                borderRadius: '10px',
                                margin: '5px 0',
                                maxWidth: '100%',
                                // alignSelf: msg.sender_Id === senderId ? 'flex-end' : 'flex-start'
                            }}
                        >
                            <div>
                            {deleteIcon === msg._id && (
                                        <RiDeleteBin6Line size={17} onClick={() => deleteMessage()} />
                                    )}
                                  {
                                    msg.groupMessageUser &&(
                                      <div style={{ display:'flex' , }}  onClick={() => handleIcon (msg._id)}>
                                              <img src={msg?.groupMessageUser?.image} width={35} height={35} />
                                              <div style={{ marginLeft:10}}> </div>
                                              <div> {msg?.groupMessageUser?.firstName + " " + msg?.groupMessageUser?.lastName} </div>
                                      </div>
                                    )
                                  }

                                <div style={{ fontSize :17}}>  {msg?.message} </div>
                                {
                                  msg?.createdAt && (
                                    <div style={{ fontSize :10}}>
                                        {new Date(msg?.createdAt).toTimeString().split(' ')[0]}
                                    </div>
                                  )}
                            </div>
                        </div>
                    ))
                    : 
                    "No messages found"
                }
    </div>
  )
}

export default ChatScreen
