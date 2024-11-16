import React from "react";
import { Layout, Col, Row, Button, Form, Input, Checkbox, Image , message } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { forgetPasswordAuth } from '../../redux/thunk/authThunk'
import Logo from "../../assets/logo-header.png";
import facebook from "../../assets/authfb.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";

import swal from "sweetalert";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);



  const onFinish = async (values) => {  
    setLoading(true);

    const { email} = values
    const payload  = {
      email
    }
    let data = {
      payload
    };
    setLoading(false);
    let loginUser = await dispatch(forgetPasswordAuth(data)).unwrap()

    if(!loginUser?.status){
      message.error(loginUser?.message)
    }else{
      navigate("/forget-password-2" , { state : payload})
    }
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const onFinish = (values) => {
  //   // Handle login logic here
  //   console.log('Received values:', values);
  // };

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
              <div
                className="blur-bg-inner-card-form login-screen-form"
              >
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
                <p className="auth-p">Enter your email address to recover your password</p>
                <Form
                  layout="vertical"
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Please input valid email!",
                        // warningOnly: true,
                      },
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter your email address"
                      className="web-input"
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
                      // onClick={() => navigate("/forget-password-2")}
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
    </Layout>
  );
}

export default Login;
