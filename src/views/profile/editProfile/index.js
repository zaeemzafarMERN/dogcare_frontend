import React, { useState } from "react";
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
  message,
  Upload,
} from "antd";
import { useNavigate , useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { editProfile } from '../../../redux/thunk/userThunk'
import { editProfileData } from '../../../redux/slice/authSlice'
import profilepic from "../../../assets/profilepic.png";
import { FaCamera } from "react-icons/fa";
// import { Post } from "../../config/api/post";
// import { AUTH } from "../../config/constants/api";
// import { addUser } from "../../redux/slice/authSlice";
// import fbicn from "../../assets/facebook-icon.png";
// import gogoleicn from "../../assets/google-icon.png";

import swal from "sweetalert";
import { FaArrowLeftLong } from "react-icons/fa6";

function CreateAccount() {
  const { TextArea } = Input;
  const [imageObject, setImageObject] = useState(null);
      const UPLOADS_URLs = "https://react.customdev.solutions:3026/"
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = location?.state
  
  

  const {token } = useSelector((state) => state?.user?.data);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange2 = () => {
    swal("", "Congrats! You have been registered successfully", "success");
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { Search } = Input;

  // const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values) => {
    const {firstName , phoneNumber  , lastName } = values
    
    const formData = new FormData();

    formData.append('firstName' , firstName ? firstName : user?.firstName )
    formData.append('lastName' , lastName ? lastName : user?.lastName )
    formData.append('phoneNumber' , phoneNumber ? phoneNumber : user?.phoneNumber )
    if(imageObject){
      formData.append('image' , imageObject ? imageObject : user?.image )
    }

  


    const data = {
      payload : formData,
      token
    }

    let updatedProfiles = await dispatch(editProfile(data)).unwrap()


    if(updatedProfiles?.message){
      dispatch(editProfileData(updatedProfiles?.data))
      navigate(-1)
    }else{
      message.error(updatedProfiles?.status)
    }
    
    

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChangepro = (info) => {
    setLoading(true);
    getBase64(
      info?.fileList[info?.fileList?.length - 1]?.originFileObj,
      (url) => {
        setImageObject(
          info?.fileList[info?.fileList?.length - 1]?.originFileObj
        );
        setLoading(false);
        setImageUrl(url);
      }
    );
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
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

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Invalid Uplaod, You can only upload image files!");
    }
    return isImage;
  };

  const handleChangemodal = () => {
    swal("Profile Updated", "Your profile has been updated!", "success");
  };

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
                  <h3 className="main-heading">Edit Profile</h3>
                </div>
              </Col>
            </Row>

            <div className="shop-page-main">
              <Row gutter={[16, 16]} justify={"center"}>
                <Col xs={24} md={24} lg={20} xl={20}>
                  <div className="welcome-bg" style={{ textAlign: "center" }}>
                    <div className="blur-bg-inner-card-form">
                      <div style={{ textAlign: "center", padding: "10px 0" }}>
                        <>
                          <Upload
                            name="image"
                            showUploadList={false}
                            style={{ position: "relative" }}
                            onChange={handleChangepro}
                            beforeUpload={beforeUpload}
                          >
                            {" "}
                            <div
                              style={{
                                height: "100px",
                                width: "100px",
                                border: "1px solid gray",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                borderRadius: "100px",
                              }}
                            >
                              {
                                imageUrl ? (
                                <img
                                  src={imageUrl}
                                  alt="avatar"
                                  style={{
                                    width: "100",
                                    height: "100px",
                                    borderRadius: "100px",
                                  }}
                                />
                              ) : (
                                
                                  !user && !user?.image ?
                                  (
                                    <>
                                    <img
                                        // src={UPLOADS_URL + profileDetails?.image}
                                        src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
                                        alt="avatar"
                                        style={{
                                          width: "100px",
                                          maxHeight: "100px",
                                          objectFit: "cover",
                                          objectPosition: "center",
                                          filter: "blur(1px)",
                                          borderRadius: "100px",
                                        }}
                                      />
                                    </>
                                  )
                                  :
                                  (
                                    <>
                                    <img
                                        // src={UPLOADS_URL + profileDetails?.image}
                                        src={UPLOADS_URLs+user?.image}
                                        alt="avatar"
                                        style={{
                                          width: "100px",
                                          maxHeight: "100px",
                                          objectFit: "cover",
                                          objectPosition: "center",
                                          filter: "blur(1px)",
                                          borderRadius: "100px",
                                        }}
                                      />
                                    </>
                                  )
                                
                                
                              )}
                              <FaCamera
                                style={{
                                  position: "absolute",
                                  color: "rgb(0,127,202)",
                                  fontSize: "25px",
                                }}
                              />
                            </div>{" "}
                          </Upload>
                        </>
                      </div>
                      <Row gutter={[16, 16]} justify={"center"}>
                        <Col lg={16}>
                          <Form
                            className="row g-3"
                            name="basic"
                            layout="vertical"
                            initialValues={{
                              remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                          >
                            <Row
                              style={{
                                width: "100%",
                                justifyContent: "center",
                              }}
                              gutter={[16, 16]}
                            >
                              <Col lg={12}>
                                <Form.Item
                                  label="First Name"
                                  name="firstName"
                                  // rules={[
                                  //   {
                                  //     required: true,
                                  //     message: "Please enter your First Name!",
                                  //   },
                                  // ]}
                                >
                                  <Input
                                    size="large"
                                    placeholder={user?.firstName}
                                    className="web-input"
                                  />
                                </Form.Item>
                              </Col>
                              <Col lg={12}>
                                <Form.Item
                                  label="Last Name"
                                  name="lastName"
                                  // rules={[
                                  //   {
                                  //     required: true,
                                  //     message: "Please enter your Last Name!",
                                  //   },
                                  // ]}
                                >
                                  <Input
                                    size="large"
                                    placeholder={user?.lastName}
                                    className="web-input"
                                  />
                                </Form.Item>
                              </Col>
                              <Col lg={12}>
                                <Form.Item
                                  label="Email Address"
                                  name="email"
                                >
                                  <Input
                                    size="large"
                                    placeholder={user?.email}
                                    className="web-input"
                                    value={user?.email}
                                    disabled
                                  />
                                </Form.Item>
                              </Col>
                              <Col lg={12}>
                                <Form.Item
                                  label="Phone Number"
                                  name="phoneNumber"
                                  // rules={[
                                  //   {
                                  //     required: true,
                                  //     message: "Please enter Phone Number!",
                                  //   },
                                  // ]}
                                >
                                  <Input
                                    size="large"
                                    placeholder={user?.phoneNumber}
                                    className="web-input"
                                  />
                                </Form.Item>
                              </Col>
                              <Col lg={24}>
                                <div
                                  className=""
                                  style={{ textAlign: "center" }}
                                >
                                  <Button
                                    type=""
                                    htmlType="submit"
                                    className="btn web-btn px-5"
                                    onClick={handleChangemodal}
                                  >
                                    UPDATE
                                  </Button>
                                  <div
                                    className="already-account-text"
                                    style={{
                                      textAlign: "center",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <span onClick={() => navigate(-1)}>
                                      Cancel
                                    </span>{" "}
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Form>
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
