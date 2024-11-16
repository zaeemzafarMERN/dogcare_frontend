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
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import profilepic from "../../../assets/profilepic.png";
import { FaCamera } from "react-icons/fa";
// import { Post } from "../../config/api/post";
// import { AUTH } from "../../config/constants/api";
// import { addUser } from "../../redux/slice/authSlice";
// import fbicn from "../../assets/facebook-icon.png";
// import gogoleicn from "../../assets/google-icon.png";

import swal from "sweetalert";

function CreateAccount() {
  const { TextArea } = Input;
  const [imageObject, setImageObject] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const user = useSelector((state) => state.user.userData);
  // const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
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
    swal("Password Updated", "Your password has been updated!", "success");
  };

  return (
    <Layout
      className=""
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <div className="auth-banner">
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col xs={23} md={18} lg={7}>
            <div className="auth-box">
              <div className="blur-bg-inner-card-form">
                <Form
                  layout="vertical"
                  name="basic"
                  labelCol={{
                    span: 0,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Old Password*"
                    name="oldPassword*"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Old Password*!",
                      },
                      {
                        type: "string",
                        min: 8,
                        message: "password must be atleast 8 characters!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Enter Old Password"
                      style={{
                        borderRadius: "100px",
                        fontSize: "14px",
                        paddingRight: "10px",
                        backgroundColor: "#f4f4f4",
                        border: "1px solid #f4f4f4",
                        padding: "10px 20px",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label="New Password*"
                    name="newPassword*"
                    rules={[
                      {
                        required: true,
                        message: "Please input your New Password",
                      },
                      {
                        type: "string",
                        min: 8,
                        message: "password must be atleast 8 characters!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Enter your New Password"
                      style={{
                        borderRadius: "100px",
                        fontSize: "14px",
                        paddingRight: "10px",
                        backgroundColor: "#f4f4f4",
                        border: "1px solid #f4f4f4",
                        padding: "10px 20px",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password*"
                    name="confirm Password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Confirm Password",
                      },
                      {
                        type: "string",
                        min: 8,
                        message: "password must be atleast 8 characters!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Confirm Password"
                      style={{
                        borderRadius: "100px",
                        fontSize: "14px",
                        paddingRight: "10px",
                        backgroundColor: "#f4f4f4",
                        border: "1px solid #f4f4f4",
                        padding: "10px 20px",
                      }}
                    />
                  </Form.Item>
                  <br />
                  <Form.Item style={{ textAlign: "center", margin: "0" }}>
                    <Button
                      type="button"
                      htmlType="submit"
                      className="web-btn"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={handleChangemodal}
                    >
                      SAVE CHANGES
                    </Button>
                  </Form.Item>
                  <div
                    className="already-account-text"
                    style={{ textAlign: "center", cursor: "pointer" }}
                  >
                    <span onClick={() => navigate(-1)}>Cancel</span>{" "}
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default CreateAccount;
