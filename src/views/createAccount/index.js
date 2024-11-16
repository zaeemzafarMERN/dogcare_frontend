import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  Layout,
  Col,
  Row,
  Button,
  theme,
  Form,
  Input,
  Select,
  Space,
  message,
  Upload,
  Image,
  Divider,
} from "antd";
import Compressor from 'compressorjs';
// import { UploadOutlined } from '@ant-design/icons';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import Logo from "../../assets/logo-header.png";
import facebook from "../../assets/authfb.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import fbicn from "../../assets/facebook-icon.png";
import gogoleicn from "../../assets/google-icon.png";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { registerAuth } from '../../redux/thunk/authThunk'
import swal from "sweetalert";
import { Link } from "react-router-dom";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    swal("error", "Invalid Upload, You can only upload image files!", "error");
  }
  return isImage;
};

function CreateAccount() {
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [imageObject, setImageObject] = useState(null);

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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const { token } = theme.useToken();

  const onFinish = async (value) => {
    setLoading(true);
    const {firstName,lastName,email,phoneNumber,password } = value

    const formdata = new FormData()
    formdata.append('firstName' , firstName)
    formdata.append('lastName' , lastName)
    formdata.append('email' , email)
    formdata.append('phoneNumber' , phoneNumber)
    formdata.append('password' , password)

    if(imageObject){
      formdata.append('image' , imageObject)
    }
    formdata.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    const data = {
      payload : formdata
    }
    
    setLoading(false);
    let newUser = await dispatch(registerAuth(data)).unwrap()
    
    
    if(!newUser?.status){
      message.error(newUser?.message)
    }else{
      navigate('/login')
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


  
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  return (
    <Layout
      className=""
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <div className="">
        <Row
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={0} md={0} lg={12}>
            <div className="auth-left-bg">
              <Link>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={46}
                  height={46}
                  src={facebook}
                  style={{ maxWidth: "46px" }}
                />
              </Link>
              <Link>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={46}
                  height={46}
                  src={twitter}
                  style={{ maxWidth: "46px" }}
                />
              </Link>
              <Link>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={46}
                  height={46}
                  src={google}
                  style={{ maxWidth: "46px" }}
                />
              </Link>
            </div>
          </Col>
          <Col xs={23} md={23} lg={12}>
            <div className="auth-box">
              <div className="blur-bg-inner-card-form">
                <div style={{ textAlign: "center" }}>
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    width={130}
                    height={60}
                    src={Logo}
                  />
                </div>
                <h2 className="auth-heading">Sign Up</h2>
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
                    style={{ width: "100%", justifyContent: "center" }}
                    gutter={[16, 16]}
                    className="row-res-margin-0"
                  >
                    <Col lg={12} md={12} xs={24}>
                      <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your first name!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Enter First Name"
                          className="web-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} md={12} xs={24}>
                      <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Enter Last Name",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Enter Email Address"
                          className="web-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} md={12} xs={24}>
                      <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[
                          {
                            type: "email",
                            message: "Please enter a valid email address!",
                          },
                          {
                            required: true,
                            message: "Please enter your email address!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="James.Anderson@gmail.com"
                          className="web-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} md={12} xs={24}>
                      <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your phone number!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Enter Phone Number"
                          className="web-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} md={12} xs={24}>
                      <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Enter Password",
                          },
                        ]}
                      >
                        <Input.Password
                          size="large"
                          placeholder="Enter Password"
                          className="web-input"
                          style={{
                            borderRadius: "5px",
                            fontSize: "14px",
                            paddingRight: "10px",
                            backgroundColor: "transparent",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} md={12} xs={24}>
                      <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={["password"]}
                        rules={[
                          {
                            required: true,
                            message: "Please confirm your password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error("The two passwords do not match!")
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          size="large"
                          placeholder="Confirm Password"
                          className="web-input"
                          style={{
                            borderRadius: "5px",
                            fontSize: "14px",
                            paddingRight: "10px",
                            backgroundColor: "transparent",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={24} md={24} xs={24}>
                      <div className="upload-img-step">
                        <Form
                          layout="vertical"
                          name="basic"
                          initialValues={{
                            remember: true,
                          }}
                          autoComplete="off"
                          style={{ padding: "15px 0" }}
                        >
                          <Form.Item
                            label="Upload Image"
                            name="upload"
                            rules={[
                              {
                                required: false,
                                message: "Please Upload Image!",
                              },
                            ]}
                          >
                           <Upload
                                name="image"
                                showUploadList={false}
                                style={{ position: "relative" }}
                                onChange={(e) => {
                                  handleChangepro(e, "image");
                                }}
                                beforeUpload={beforeUpload}
                              >
                                {" "}
                                <div
                                  style={{
                                    height: "200px",
                                    border: "1px dotted gray",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "30px",
                                  }}
                                >
                                  {imageUrl ? (
                                    <img
                                      src={imageUrl}
                                      alt="avatar"
                                      style={{
                                        maxWidth: "100%",
                                        height: "170px",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  ) : (
                                    uploadButton
                                  )}
                                </div>{" "}
                              </Upload>
                          </Form.Item>
                        </Form>
                      </div>
                    </Col>

                    <div className="" style={{ textAlign: "center" }}>
                      <Button
                        type=""
                        htmlType="submit"
                        className="btn web-btn px-5"
                        disabled={!imageObject}
                        // onClick={() => navigate("/petProfileCreation")}
                      >
                        Register
                      </Button>
                      <div
                        className="already-account-text"
                        style={{ textAlign: "center", cursor: "pointer" }}
                      >
                        Already Have An Account?{" "}
                        <span onClick={() => navigate("/login")}>Login</span>{" "}
                      </div>
                    </div>
                    <Col lg={24} xs={24} className="signup-with-buttons">
                      <Divider>OR</Divider>
                      <div className="g-btn">
                        <a href="#_" className="signup-with-btn">
                          <Image
                            preview={false}
                            alt={"Failed to load image"}
                            src={fbicn}
                            className=""
                          />
                          Signup with Facebook
                        </a>
                        <a href="#_" className="signup-with-btn">
                          <Image
                            preview={false}
                            alt={"Failed to load image"}
                            src={gogoleicn}
                            className=""
                          />
                          Signup with Google
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Form>
                <div className="responsive-auth-social-icon">
                  <Link>
                    <Image
                      preview={false}
                      alt={"Failed to load image"}
                      width={46}
                      height={46}
                      src={facebook}
                      style={{ maxWidth: "46px" }}
                    />
                  </Link>
                  <Link>
                    <Image
                      preview={false}
                      alt={"Failed to load image"}
                      width={46}
                      height={46}
                      src={twitter}
                      style={{ maxWidth: "46px" }}
                    />
                  </Link>
                  <Link>
                    <Image
                      preview={false}
                      alt={"Failed to load image"}
                      width={46}
                      height={46}
                      src={google}
                      style={{ maxWidth: "46px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default CreateAccount;
