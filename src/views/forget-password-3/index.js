import React, { useEffect, useState } from "react";
import { Layout, Col, Row, Button, Form, Input, Checkbox, Image , message } from "antd";
import { useNavigate , useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { resetPasswordAuth } from '../../redux/thunk/authThunk'
import Logo from "../../assets/logo-header.png";
import facebook from "../../assets/authfb.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import Modals from "../../../src/components/Modals";
import swal from "sweetalert";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const { email , code } = location.state

  // useEffect if user is already logged in
  // React.useEffect(() => {
  //   if (user && token) {
  //     navigate("/", { replace: true });
  //   }
  // }, [user, token]);

  const onFinish = async (values) => {
    console.log("Success:", values);
    const { password  } = values
   
    const payload = {
      email ,
      code , 
      password
    }

   const data = {
    payload
   }

   let loginUser = await dispatch(resetPasswordAuth(data)).unwrap()

   if(!loginUser?.status){
    message.error(loginUser?.message)
  }else{
    navigate("/login")
  }
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [show1, setShow1] = useState(false);
  const handleShow1 = () => {
    setShow1(true);
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
              <div className="blur-bg-inner-card-form login-screen-form">
                <div style={{ textAlign: "center" }}>
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    width={130}
                    height={60}
                    src={Logo}
                  />
                </div>
                <h2 className="auth-heading">Forgot Password</h2>
                <p className="auth-p">
                  Enter your email address to recover your password
                </p>
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
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
                      placeholder="Enter Password"
                      className="web-input"
                      style={{
                        borderRadius: "5px",
                        fontSize: "14px",
                        padding: "10px 20px",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Confirm Password",
                      },
                      {
                        type: "string",
                        min: 8,
                        message: "password must be atleast 8 characters!",
                      }, {
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
                      placeholder="Confirm your password"
                      className="web-input"
                      style={{
                        borderRadius: "5px",
                        fontSize: "14px",
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
                      onClick={handleShow1}
                    >
                      Continue
                    </Button>
                  </Form.Item>
                  <div
                    className="already-account-text"
                    style={{ textAlign: "center" }}
                  >
                    Back to{" "}
                    <span onClick={() => navigate("/login")}>Login</span>{" "}
                  </div>
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

      <Modals
        centered
        open={show1}
        handleOk={() => setShow1(false)}
        handleCancel={() => setShow1(false)}
        title="System Message!"
        text="The password has been reset successfully"
        footer={[
          <Button
            key="submit"
            type=""
            className="web-btn"
            onClick={() => navigate("/login")}
            style={{ textAlign: "center" }}
          >
            Okay
          </Button>,
        ]}
      />
    </Layout>
  );
}

export default Login;
