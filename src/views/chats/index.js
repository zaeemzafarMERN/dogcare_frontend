import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { SOCKET_URL , UPLOADS_URL} from "../../config/constants/api";
import { useSelector , useDispatch} from 'react-redux'
import { Row , Col , Input ,   Form, List, Avatar, Button , Modal , Select} from 'antd'
import { IoSend } from "react-icons/io5";
import { CloseCircleOutlined } from '@ant-design/icons';
import ChatScreen from './ChatScreen';
import ChatList from './ChatList';
import ImageUploading from 'react-images-uploading';
import {  useNavigate  } from 'react-router-dom'
import { searchEmployeeAndUsers,GetAllUsers , createGroup } from '../../redux/thunk/chatSlice';
// Replace with your backend URL

const ChatApp = () => {
  const navigate = useNavigate();
  const onChange32 = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const { _id } = useSelector((state) => state?.user?.data?.user)
  const { token } = useSelector((state) => state?.user?.data)
  const [images, setImages] = useState([]);
  const dispatch = useDispatch()
  const [RecievedId, setRecievedId] = useState(null);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatlist , Setchatlist] = useState([])
  const [chatDetail , setchatDetail] = useState(null)
  const [recommendPostcode , SetrecommendPostcode] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [searchUser , setSearchUser] = useState('')
  const [logoutModal, setLogoutModal] = useState(false);
  const [emp , Setemp] = useState([])

  const Image_URL = "https://react.customdev.solutions:3026/";

  console.log("cccccccccccccccccccccc",SOCKET_URL)

  const AllEmployees = async () => {
    const data = {
      token
    }
    let getallofEmp =  await dispatch(GetAllUsers(data)).unwrap()
  console.log("getallofEmp",getallofEmp);
      

    let Emps = getallofEmp?.data?.allUsers?.map((item) => {
      const {firstName , lastName , _id , image } = item
      return {
        value: _id,
        label: <span><img src={Image_URL+image} width={30} height={30} /> { firstName + " " + lastName} </span> , 
      }
    }) 

    Setemp(Emps)
  }

  useEffect(() => {
    AllEmployees()
  }  , [logoutModal])


  

  useEffect(() => {
    // Connect to the Socket.IO server
    const newSocket = io(SOCKET_URL , { transports: ['websocket']});
    setSocket(newSocket);

    // Handle connection event
    newSocket.on('connect', () => {
      console.log('Connected to server:', newSocket.id);
    });

    // Handle 'connected' event when joining a room
    newSocket.on('connected', (roomId) => {
      console.log(`Joined room: ${roomId}`);
    });

    console.log("RecievedId",RecievedId);
    
    // Handle receiving new messages
    newSocket.on('new_messages', (data) => {
      console.log("New message received:", data);
     if(data?.object_type === "fetching_Messages"){
      if (Array.isArray(data.message)) {
        let trueMessages = data.message.filter((msg) => msg.message !== ".");
        setMessages(trueMessages);
      } else {
        console.error("Expected an array for 'fetching_Messages' but got:", data.message);
      }
    }else{
        setMessages((prevMessages) => {
          // Check if prevMessages is an array, otherwise return an empty array
          return Array.isArray(prevMessages) 
            ? [...prevMessages, data.message] 
            : [data.message];
        });
      }


      if(data?.object_type === "conversation_chatlist"){
        Setchatlist(data.message)
      }
    });

    // Cleanup on unmount
    return () => newSocket.disconnect();
  }, []);

  //console.log("id",_id , "socket",socket);
  


  // Function to join a room
  const joinRoom = (_id) => { 
    if (socket) {
      socket.emit('Join', { _id });
      socket.emit('Chatlist' , { sender_Id : _id})
    }
  };

  
  useEffect(() => {
    if(socket && _id) {
        joinRoom(_id)
       
    }
  },[socket , _id])




  // Function to send a new message
  const sendMessage = () => {
    if (socket && newMessage.trim()) {
      const messageObject = {
        sender_Id: _id, // Replace with actual sender id
        reciever_Id: RecievedId, // Replace with actual receiver id
        message: newMessage
      };
      socket.emit('Sending_Messages', messageObject);
      socket.emit('Chatlist' , { sender_Id : _id})
      setNewMessage('');
      getMessages(_id, RecievedId)
    
    }
  };

  // Function to get message history
  const getMessages = (senderId, receiverId) => {
    if (socket) {
      socket.emit('Getting_Messages', { sender_Id: senderId, reciever_Id: receiverId });
    }
  };


  const autoComplete_Address = async (e) => {
    const { value } = e.target
    if(value.trim() === '' || value == null){
      setInputValue('')
      return 
    }
    setInputValue(value)

    const data = {
      token,
      text : value
    }

    const searchUsers = await dispatch(searchEmployeeAndUsers(data)).unwrap()
    if(searchUsers?.status){
        if(searchUsers?.data?.allSearch == []){
              return 
            }
      SetrecommendPostcode(searchUsers?.data?.allSearch)
    }else if(!searchUsers?.status) {
      SetrecommendPostcode([])
    }
  }

  const handleSelect = async (item) => {
    
  console.log("item",item);
  
    setInputValue(item?.name)
    SetrecommendPostcode([])
    setRecievedId(item?._id)
    setSearchUser(item)
    setchatDetail(null)

    const messageObject = {
      sender_Id: _id, 
      reciever_Id: item?._id,
      message: "."
    };
    socket.emit('Sending_Messages', messageObject);
    socket.emit('Chatlist' , { sender_Id : _id})
    return(
      <ChatScreen 
          messages={messages}
          socket={socket}
          senderId={_id}
          RecievedId={RecievedId}
      />
    )
    
  }

  const clearInput = () => {
    setInputValue('');
    SetrecommendPostcode([]);
  };




  console.log("searchUser:", searchUser);
console.log("chatDetail:", chatDetail);

const handleChange = () => {
  console.log("handleChange");
}

  return (
                <div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button size="large" onClick={() => navigate('/groupchat')}>Switch To Groups</Button>
                  { " "}
                </div>
               
                {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button size="large" onClick={() => setLogoutModal(true)}>Group</Button>
                  { " "}
                </div> */}
                <br />
    <Row>
      <Col span={6} style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        {/* Content for the 6-col section */}
        
       
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
          }}
          className="customForm"
        >
          <Form.Item name="text">
            <div style={{ position: 'relative', width: '100%' }}>
              <Input
                size="large"
                placeholder="Search Users"
                className="web-input"
                value={inputValue}
                onChange={(e) => autoComplete_Address(e)}
                style={{
                  paddingRight: '35px', // Reserve space for the icon, adjust as needed
                }}
              />
              {inputValue && (
                <CloseCircleOutlined
                  onClick={clearInput}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '18px',
                    cursor: 'pointer',
                  }}
                />
              )}
            </div>

            {recommendPostcode.length > 0 ? (
              <List
                size="large"
                bordered
                dataSource={recommendPostcode}
                renderItem={(item) => (
                  <List.Item onClick={() => handleSelect(item)}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <Avatar src={Image_URL + item?.image} />
                        {'  ' + item?.name}
                      </div>
                      <div style={{ fontSize: '20px' }}>
                        <IoSend />
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            ) : (
              ' '
            )}
          </Form.Item>
        </Form>

    
      
        <ChatList
        senderId={_id}
        chatlist={chatlist}
        setRecievedId={setRecievedId}
        setchatDetail={setchatDetail}
        setSearchUser={setSearchUser}
        Image_URL={Image_URL}
        />
        
      </Col>
      {console.log("searchUser",searchUser)}
      <Col span={18} style={{ backgroundColor: '#d9d9d9', padding: '20px' }}>
                {/* Button to join a room */}
                {/* <button onClick={() => joinRoom(id)}>Join Room</button> */}

                {/* Display messages */}
                {
                  searchUser && !chatDetail && (
                    <>
                       <div>
                    <div style={{ display:"flex", alignItems:"center" , margin:"0 0 25px"}} >
                                      <div> <img src={Image_URL+searchUser?.image} width={50} height={50} style={{borderRadius:"50%"}} /> </div>
                                      <div>
                                        {" "}
                                        {" "}
                                      <div> <h5 style={{ paddingLeft : '5px'}}>{searchUser?.name }</h5> </div>
                                      
                                      </div>
                                    
                                      
                                      
                                  </div>
                    </div>
                    </>
                  )
                }
                {
                  !searchUser && chatDetail ?
                  (
                    <div>
                    <div style={{ display:"flex", alignItems:"center" , margin:"0 0 25px"}} >
                                      <div> <img src={Image_URL+chatDetail?.reciever_Id?.image} width={50} height={50} style={{borderRadius:"50%"}} /> </div>
                                      <div>
                                        {" "}
                                        {" "}
                                      <div> <h5 style={{ paddingLeft : '5px'}}>{chatDetail?.reciever_Id?.firstName + " " + chatDetail?.reciever_Id?.lastName }</h5> </div>
                                      
                                      </div>
                                    
                                      
                                      
                                  </div>
                    </div>
                  ) : null
                }
                    <h2>Messages</h2>
                    {" "}
                <div style={{ height: '650px',overflowY: 'auto',padding: '10px',border: '1px solid #ddd',borderRadius: '10px'}}>
                    <ChatScreen
                      messages={messages}
                      socket={socket}
                      senderId={_id}
                      RecievedId={RecievedId}
                    />
                    
                    
                </div>

               
        
      </Col>
    </Row>

    <Row>
        <Col  span={6}>
        
        </Col>
        <Col  span={18} style={{ paddingTop:'10px',
                                borderRadius: '10px',
                                margin: '5px 0',
                                maxWidth: '60%',}}>
        <input 
                        type="text" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)} 
                        placeholder="Type your message"
                        style={{ width : 1163}}
                    />
                    <button onClick={sendMessage}>Send Message</button>
        </Col>
    </Row>


   

                </div>



  );
};

export default ChatApp;
