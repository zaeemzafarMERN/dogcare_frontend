import React, { useEffect, useState } from "react";
import { Layout, Col, Row, Button, Form, Input, Checkbox, Image , message } from "antd";
import { useNavigate , useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import Logo from "../../assets/logo-header.png";
import facebook from "../../assets/authfb.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import VerificationInput from "react-verification-input";
import { verficationCodeAuth } from '../../redux/thunk/authThunk'

import swal from "sweetalert";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const { email } = location.state

  // useEffect if user is already logged in
  // React.useEffect(() => {
  //   if (user && token) {
  //     navigate("/", { replace: true });
  //   }
  // }, [user, token]);

  const [code, setCode] = useState(null);


  const onFinish = async () => {
    const payload = {
      email ,
      code: code
    }
    let data = {
      payload
    };

    let loginUser = await  dispatch(verficationCodeAuth(data)).unwrap()
    if(!loginUser?.status){
      message.error(loginUser?.message)
    }else{
      navigate("/forget-password-3" , { state : payload})
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
                  Enter verification code sent to your email address
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <VerificationInput
                    length={4}
                    placeholder="_"
                    validChars="0-9"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(val) => {
                      setCode(val);
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <Button
                    className={`${code?.length !== 4 ? "web-btn3" : "web-btn"}`}
                    style={{
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                    // onClick={handleSubmit}
                    onClick={() => onFinish()}
                    disabled={code?.length !== 4}
                  >
                    Continue
                  </Button>
                  <div
                    className="already-account-text"
                    style={{ textAlign: "center" }}
                  >
                    Back to{" "}
                    <span onClick={() => navigate("/login")}>Login</span>{" "}
                  </div>
                </div>
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
