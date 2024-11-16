import React,{useState} from 'react'
import { Badge } from 'antd'
const ChatList = ({chatlist , setRecievedId , setchatDetail,Image_URL,setSearchUser}) => {


    let recieverId = (chatl) => { 
        setRecievedId(chatl?.group_Id?._id)
        setchatDetail(chatl)
        setSearchUser(null)
     }

    // console.log("chatl",chatlist);
     
     const [show, setShow] = useState(true);
  return (
    <div>
      {
            chatlist.length > 0 ?
                            chatlist?.map((chatl , index) => (
                                <div onClick={() => recieverId(chatl)} key={index} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", margin:"0 0 25px"}} >
                                    <div> <img src={Image_URL+chatl?.group_Id?.groupImage} width={50} height={50} style={{borderRadius:"50%"}} /> </div>
                                    <div>
                                    <div> {chatl?.group_Id?.groupName } </div>
                                    <div> {chatl?.lastmessage} </div>
                                    
                                    </div>
                                    
                                    <div> <Badge count={show ? chatl?.totalunread : 0} showZero color="#faad14" /> </div>
                                    
                                    
                                </div>

                            ))
                            :
                            "No Chatlist found"
        }
    </div>
  )
}

export default ChatList
