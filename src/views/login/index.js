import React from "react";
import { Layout, Col, Row, Button, Form, Input, Checkbox, Image, message } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { Post } from "../../config/api/post";
// import { AUTH } from "../../config/constants/api";
// import { addUser } from "../../redux/slice/authSlice";
import { loginAuth } from '../../redux/thunk/authThunk'
import Logo from "../../assets/logo-header.png";
import facebook from "../../assets/authfb.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";

import swal from "sweetalert";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  // // useEffect if user is already logged in
  // React.useEffect(() => {
  //   if (user && token) {
  //     navigate("/", { replace: true });
  //   }
  // }, [user, token]);

  const onFinish = async (values) => {  
    setLoading(true);

    const { email , password} = values
    const payload  = {
      email,
      password
    }
    let data = {
      payload
    };
    setLoading(false);
    let loginUser = await dispatch(loginAuth(data)).unwrap()
    if(!loginUser?.status){
      message.error(loginUser?.message)
    }else{
      navigate("/", { replace: true });
    }
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
              <div className="blur-bg-inner-card-form" style={{width:"100%"}}>
                <div style={{ textAlign: "center" }}>
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    width={130}
                    height={60}
                    src={Logo}
                  />
                </div>
                <h2 className="auth-heading">Login</h2>
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
                      placeholder="Enter Email Address"
                      className="web-input"
                      // style={{
                      //   borderRadius: "5px",
                      //   background: "white",
                      //   fontSize: "14px",
                      //   padding: "10px 20px",
                      // }}
                    />
                  </Form.Item>

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
                        paddingRight: "10px",
                      }}
                    />
                  </Form.Item>
                  <Row>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        style={{ marginBottom: 0 }}
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Button
                        type="link"
                        className="forgot-text"
                        style={{
                          float: "right",
                        }}
                        onClick={() => navigate("/forget-password-1")}
                      >
                        Forgot Password?
                      </Button>
                    </Col>
                  </Row>
                  <br />
                  <Form.Item style={{ textAlign: "center", margin: "0" }}>
                    <Button
                      type="button"
                      htmlType="submit"
                      className="web-btn"
                      style={{
                        cursor: "pointer",
                      }}
                      // onClick={() => navigate("/")}
                    >
                     Login
                    </Button>
                  </Form.Item>
                  <div
                    className="already-account-text"
                    style={{ textAlign: "center" }}
                  >
                    Don't have an account?
                    <span onClick={() => navigate("/createAccount")}>
                      Sign Up
                    </span>
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
