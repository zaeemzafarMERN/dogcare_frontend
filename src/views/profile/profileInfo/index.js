import React, { useEffect, useState } from "react";
import {
  Layout,
  Col,
  Row,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Image,
  Badge,
  Space,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {  userProfile } from '../../../redux/thunk/userThunk'
import profilepic from "../../../assets/profilepic.png";
// import { Post } from "../../config/api/post";
// import { AUTH } from "../../config/constants/api";
// import { addUser } from "../../redux/slice/authSlice";
// import fbicn from "../../assets/facebook-icon.png";
// import gogoleicn from "../../assets/google-icon.png";

import swal from "sweetalert";
import { FaArrowLeftLong } from "react-icons/fa6";

function CreateAccount() {
  const { TextArea } = Input;
  const {token } = useSelector((state) => state?.user?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UPLOADS_URLs = "https://react.customdev.solutions:3026/"
  const [ profile , Setprofile ] = useState("")
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };


  const userProfiles = async () => {
    const data = {
      token
    }
    let users = await dispatch(userProfile(data)).unwrap()
 
    
    if(users){
      Setprofile(users.userProfile)
    }else{
      Setprofile("")
    }
  }

  useEffect(() => {
    userProfiles()
  },[])

  const handleChange2 = () => {
    swal("", "Congrats! You have been registered successfully", "success");
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };



  const { Search } = Input;
  const user = useSelector((state) => state.user.userData);
  // const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const props = {
  //   name: "file",
  //   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //   headers: {
  //     authorization: "authorization-text",
  //   },

  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };


  console.log("profile",profile);
  


  return (
    <Layout className="" style={{ backgroundColor: "#fff", padding: "50px 0" }}>
      <div className="shop-page">
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col xs={23} md={21}>
            <Row style={{ width: "100%", justifyContent: "center" }}>
              <Col lg={24}>
                <div class="arrow-box">
                  <FaArrowLeftLong
                    className="arrow"
                    onClick={() => navigate(-1)}
                  />
                  <h3 className="main-heading">Profile Information</h3>
                </div>
              </Col>
            </Row>

            <div className="shop-page-main">
              <Row gutter={[16, 16]} justify={"center"}>
                <Col xs={24} md={24} lg={20} xl={20}>
                  <div className="welcome-bg" style={{ textAlign: "center" }}>
                    <div className="blur-bg-inner-card-form">
                      <div style={{ textAlign: "center", padding: "10px 0" }}>
                      {
                        !profile?.image ?
                        (
                          <Image
                          preview={false}
                          alt={"Failed to load image"}
                          src={profilepic}
                          className="ped-profile-pic"
                        />
                        )
                        :
                        (
                          <Image
                          preview={false}
                          alt={"Failed to load image"}
                          src={UPLOADS_URLs+profile?.image}
                          className="ped-profile-pic"
                        />
                        )
                      }
                        
                      </div>
                      <Row
                        style={{ width: "100%", justifyContent: "center" }}
                        gutter={[16, 16]}
                        className="row-res-margin-0"
                      >
                        <Col lg={12}>
                          <Row gutter={[16, 16]}>
                            <Col lg={12} md={12} sm={12} xs={12}>
                              <label style={{ paddingLeft: "0" }}>Name</label>
                              <p className="web-p">{!profile?.firstName ? null : profile?.firstName}</p>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                              <label style={{ paddingLeft: "0" }}>Last Name</label>
                              <p className="web-p">{!profile?.lastName ? null : profile?.lastName}</p>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                              <label style={{ paddingLeft: "0" }}>
                              Email Address
                              </label>
                              <p className="web-p">{profile?.email}</p>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                              <label style={{ paddingLeft: "0" }}>
                                Phone Number
                              </label>
                              <p className="web-p">{!profile?.phoneNumber ? null : profile?.phoneNumber}</p>
                            </Col>
                            <Col lg={24} md={24} sm={24} xs={24}>
                              <div className="" style={{ textAlign: "center" }}>
                                <Button
                                  type="primary"
                                  htmlType="submit"
                                  className="btn web-btn px-5"
                                  onClick={() => navigate("/editProfile" ,  {state : profile})}
                                >
                                  EDIT PROFILE
                                </Button>
                                <div
                                  className="already-account-text"
                                  style={{
                                    textAlign: "center",
                                    cursor: "pointer",
                                  }}
                                >
                                  <span
                                    onClick={() => navigate("/changePassword")}
                                  >
                                    Change Password
                                  </span>{" "}
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default CreateAccount;
