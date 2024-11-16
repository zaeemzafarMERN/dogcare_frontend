import React from "react";
import { Layout, Col, Row, Button, Form, Input, Checkbox, Image } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import Logo from "../../assets/logo-header.png";
import { PiUserCirclePlusFill } from "react-icons/pi";

import swal from "sweetalert";
import { ImUserPlus } from "react-icons/im";

function WelcomeScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  // useEffect if user is already logged in
  React.useEffect(() => {
    if (user && token) {
      navigate("/", { replace: true });
    }
  }, [user, token]);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);

    let data = {
      email: values.email,
      password: values.password,
      devideId: "123456789",
    };
    Post(AUTH.signin, data)
      .then((response) => {
        setLoading(false);
        if (response?.data) {
          console.log("response", response.data.token);
          console.log("response", response.data.user);
          dispatch(
            addUser({ user: response.data.user, token: response.data.token })
          );
          navigate("/", { replace: true });
        } else {
          swal("Oops!", response.response.data.message, "error");
        }
      })
      .catch((e) => {
        console.log(":::;", e);
        setLoading(false);
      });
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
      <div className="auth-banner">
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col lg={6}>
            <div
              className="welcome-bg welome-dog-bg"
              style={{ textAlign: "center" }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={130}
                height={60}
                src={Logo}
              />
              <Button
                type="button"
                htmlType="submit"
                className="web-btn2"
                style={{
                  cursor: "pointer",
                  width: "100%",
                  margin: "10px 0",
                }}
              >
                <PiUserCirclePlusFill style={{ marginRight: "10px" }} /> I Have
                An Account
              </Button>
              <Button
                type="button"
                htmlType="submit"
                className="web-btn"
                style={{
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <ImUserPlus style={{ marginRight: "10px" }} /> I Am a New User
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default WelcomeScreen;
