import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { SOCKET_URL , UPLOADS_URL} from "../../config/constants/api";
import { useSelector , useDispatch} from 'react-redux'
import { Row , Col , Input ,   Form, List, Avatar, Button , Modal , Select} from 'antd'
import { IoSend } from "react-icons/io5";
import { CloseCircleOutlined } from '@ant-design/icons';
import ChatScreen from './GroupChatScreen';
import ChatList from './GroupChatList';
import {  useNavigate  } from 'react-router-dom'
import ImageUploading from 'react-images-uploading';
import { searchEmployeeAndUsers,GetAllUsers , createGroup,groupChatlist } from '../../redux/thunk/chatSlice';
// Replace with your backend URL

const ChatApp = () => {

  const onChange32 = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state?.user?.data?.user)
  const { token } = useSelector((state) => state?.user?.data)
  const [images, setImages] = useState([]);
  const dispatch = useDispatch()
  const [RecievedId, setRecievedId] = useState(null);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messagess, setMessagess] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatlist , Setchatlist] = useState([])
  const [chatDetail , setchatDetail] = useState(null)
  const [recommendPostcode , SetrecommendPostcode] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [searchUser , setSearchUser] = useState('')
  const [logoutModal, setLogoutModal] = useState(false);
  const [emp , Setemp] = useState([])

  const Image_URL = "https://react.customdev.solutions:3026/";


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


  const GroupCHat = async () => {
    const data = {
      token,
      id : _id
    }
    let getallofEmp =  await dispatch(groupChatlist(data)).unwrap()
    if(getallofEmp?.status){
        Setchatlist(getallofEmp?.data?.groupChats)
    }
  }

  useEffect(() => {

    GroupCHat()
  }, []);


  
  
  
  useEffect(() => {
    // Connect to the Socket.IO server
    const newSocket = io(SOCKET_URL, { transports: ['websocket'] });
    setSocket(newSocket);
  
    // Handle connection event
    newSocket.on('connect', () => {
      console.log('Connected to server:', newSocket.id);
    });
    // if (RecievedId) {
    //   newSocket.emit('Group_Getting_Messages', { group_Id: RecievedId });
    // }
  
    // Handle receiving new messages
    newSocket.on('new_group_messages', (data) => {
      //console.log("New message received:", data);
      if (data?.object_type === "new_fetching_Messages") {
        setMessages(data.message);
      } 
      else if(data?.object_type === "leave_group"){ 
        messages.push(data.message)
      setMessagess(data.message);
      }
      else {
        
        //console.log("New message received11111:", data);
        setMessages((prevMessages) => {
          // Check if prevMessages is an array, otherwise return an empty array
          return Array.isArray(prevMessages) 
            ? [...prevMessages, data.message] 
            : [data.message];
        });
      }
    });
  
    // Cleanup on unmount
    return () => newSocket.disconnect();
  }, [RecievedId]);  // Ensure the socket reconnects if the receiver ID changes
  
 // console.log("messages",messages);
  

  //console.log("id",_id , "socket",socket);
  


  // Function to join a room
  const joinRoom = (RecievedId) => { 
   
    if (socket) {
      socket.emit('GroupJoin', { _id : RecievedId });
    }
  };

  


  
  useEffect(() => {
    if(socket && RecievedId) {
        joinRoom(RecievedId)
       
    }
  },[socket , RecievedId])




  // Function to send a new message
  const sendMessage = () => {

    if (socket && newMessage.trim()) {
      const messageObject = {
       
        group_Id: RecievedId, // Replace with actual receiver id
        message: newMessage,
        groupMessageUser : _id
      };
      socket.emit('Group_Sending_Messages', messageObject);
      setNewMessage('');
      getMessages(RecievedId)

      
    //   getMessages()
    
    }
  };

  // Function to get message history
  const getMessages = (RecievedId) => {
    if (socket) {
    
      socket.emit('Group_Getting_Messages', { group_Id: RecievedId });
    }
    
  };




  const [form] = Form.useForm(); // Create form instance

  // Handle form submission on OK button
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values: ", values); // Form values: Group name, description, members
        createGroupChatForAllUsers(values); // Pass form data to createGroupChatForAllUsers
        setLogoutModal(false); // Close modal after form submission
      })
      .catch((error) => {
        console.error("Form validation failed: ", error);
      });
  };

  const createGroupChatForAllUsers = async (values) => {
    console.log("images",images,"values",values);
    
    const {groupName , groupDescription , members } = values
    
    const formData = new FormData();

    formData.append('groupName', groupName);
    formData.append('groupDescription', groupDescription);
    formData.append('members', JSON.stringify(members));
    if(images){
      formData.append('groupImage', images[0]?.file);
    }

    const data = {
      token,
      payload : formData
    }

    let createGroupChat = await dispatch(createGroup(data)).unwrap()
    if(createGroupChat?.data?.status){
      form.resetFields(); // Reset the form when the modal opens
      setImages([]); // Reset images if necessary
      GroupCHat()
    }
   
    
  }


  const leaveGroup = () => {
    if(socket){
      socket.emit('Left_Group' , {group_Id : RecievedId , userId : _id  })
      getMessages(RecievedId)
      GroupCHat()
    }
  }

  

  

const handleChange = () => {
  console.log("handleChange");
}

  return (
                <div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button size="large" onClick={() => navigate('/chat')}>Switch To Chats</Button>
                  { " "}
                  {" "}
                  <Button size="large" onClick={() => setLogoutModal(true)}>Create Group</Button>
                </div>
               
                
                <br />
    <Row>
      <Col span={6} style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        {/* Content for the 6-col section */}
        
       
  

    
      
        <ChatList 
        chatlist={chatlist}
        setRecievedId={setRecievedId}
        setchatDetail={setchatDetail}
        setSearchUser={setSearchUser}
        Image_URL={UPLOADS_URL}
        />
        
      </Col>
      {/* {console.log("chatDetail:)",chatDetail)} */}
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
                        <Row>
                            <Col span={4}>
                            <div >
                                      <div> <img src={UPLOADS_URL+chatDetail?.group_Id?.groupImage} width={50} height={50} style={{borderRadius:"50%"}} /> </div>
                                      <div>
                                        {" "}
                                        {" "}
                                      <div> <h5 style={{ paddingLeft : '5px'}}>{chatDetail?.group_Id?.groupName}</h5> </div>
                                      
                                      </div> 
                                  </div>
                            </Col>
                            <Col span={8}>
                            <div style={{ display:"flex", alignItems:"center" , margin:"0 0 25px"}} >
                                     
                                        {
                                            chatDetail?.group_Id?.members?.map((item , index) => {
                                                return(
                                                   
                                                    <div key={index}>
                                                         <img src={Image_URL+item?.image} width={30} height={30} />
                                                         <br />
                                                         {item?.firstName + " " + item?.lastName + " " + " , "} 
                                                    </div>
                                                )
                                            })
                                        } 

                                     
                                      
                                  </div>
                            </Col>
                            <Col span={2}>
                            <div>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                          
                                          <Button size="large"  onClick={leaveGroup}>Leave Group</Button>
                                        </div> 
                                      </div>
                            </Col>
                        </Row>
                    
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
                      setMessages={setMessages}
                      messagess={messagess}
                     
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


    <Modal
        visible={logoutModal}
        onOk={handleSubmit}
        onCancel={() => setLogoutModal(false)}
        okText="Create Group"
        className="StyledModal"
        style={{
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
        cancelText="No"
        cancelButtonProps={{
          className: "no-btn",
        }}
        okButtonProps={{
          className: "yes-btn",
        }}
        width="50%"
      >
        <Row align="middle" gutter={24} justify={"center"}>
         <Col md={10} lg={10} xl={8}>
                            <div className="wrapper-group-1000001858">
                              <>
                               {
                                !images &&
                                (
                                    <>
                                        <div style={{ color : "red"}}> Image is required </div>
                                    </>
                                )
                               }
                                  
                                <ImageUploading
                                        value={images}
                                        onChange={onChange32}
                                        maxNumber={1}
                                        dataURLKey="data_url"
                                      >
                                        {({
                                          imageList,
                                          onImageUpload,
                                          onImageRemoveAll,
                                          onImageUpdate,
                                          onImageRemove,
                                          isDragging,
                                          dragProps,
                                        }) => (
                                          // write your building UI
                                          <div className="upload__image-wrapper">
                                            <button
                                              style={isDragging ? { color: 'red' } : undefined}
                                              onClick={onImageUpload}
                                              {...dragProps}
                                            >
                                              Click or Drop here
                                            </button>
                                            &nbsp;
                                            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                                            {imageList.map((image, index) => (
                                              <div key={index} className="image-item">
                                                <img src={image['data_url']} alt="" width="200" height="200" />
                                                <div className="image-item__btn-wrapper">
                                                  <button onClick={() => onImageUpdate(index)}>Update</button>
                                                  <button onClick={() => onImageRemove(index)}>Remove</button>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                  </ImageUploading>
                             
                              </>
                            </div>
                          </Col>

                          <Col lg={15} md={24} xs={24}> 
                          
                                  <Form
                                  form={form}
                                    layout="vertical"
                                    name="basic"
                                    initialValues={{
                                      remember: true,
                                    }}
                                    className="customForm"
                                  >
                                    <Form.Item 
                                    label="Group Name"
                                    name="groupName"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please Enter Employee!",
                                      },
                                    ]}
                                    >
                                      <div style={{ position: 'relative', width: '100%' }}>
                                        <Input
                                          size="large"
                                          placeholder="Enter Group Name"
                                          className="web-input"
                                          // value={inputValue}
                                          // onChange={(e) => autoComplete_Address(e)}
                                          // style={{
                                          //   paddingRight: '35px', // Reserve space for the icon, adjust as needed
                                          // }}
                                        />
                                      </div>

                                    
                                    </Form.Item>

                                    <Form.Item 
                                    label="Group Description"
                                    name="groupDescription"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please Enter Group Description!",
                                      },
                                    ]}
                                    >
                                      <div style={{ position: 'relative', width: '100%' }}>
                                        <Input
                                          size="large"
                                            placeholder="Enter Group Description"
                                          className="web-input"
                                          // value={inputValue}
                                          // onChange={(e) => autoComplete_Address(e)}
                                          // style={{
                                          //   paddingRight: '35px', // Reserve space for the icon, adjust as needed
                                          // }}
                                        />
                                      </div>

                                    
                                    </Form.Item>

                                    <Form.Item
                                      label="Group Members"
                                      name="members"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Please Enter Employee!",
                                        },
                                      ]}
                                    >
                                     <Select
                                        mode="multiple"
                                        allowClear
                                        style={{
                                          width: '100%',
                                        }}
                                        placeholder="Please select"
                                        onChange={handleChange}
                                        options={emp}
                                        className="maltiselecttabs"
                                      />
                                    </Form.Item>
                                  </Form>
                          
                          </Col>

        </Row>
      </Modal>

                </div>



  );
};

export default ChatApp;
