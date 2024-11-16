import { useState } from "react";
import { Image } from "antd";
import { MdMenu } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Menu,
  Button,
  Badge,
  Modal,
  Drawer,
  Popover,
  Dropdown,
  Avatar,
  Typography,
  Input,
  Alert,
  message,
} from "antd";
import { FaBars, FaEllipsisV, FaUser, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { removeUser } from "../../redux/slice/authSlice";
import { IoIosChatbubbles } from "react-icons/io";
import { UPLOADS_URL, AUTH } from "../../config/constants/api";
import { GoBellFill } from "react-icons/go";
import { useNavigate } from "react-router";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiFillApple } from "react-icons/ai";
import { logouts } from '../../redux/slice/authSlice'
import Logo from "../../assets/logo-header.png";
import avatar from "../../assets/avatar.png";

// import Link from 'next/link'

const { Header } = Layout;

const ClientHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UPLOADS_URLs = "https://react.customdev.solutions:3026/"
  const [visible, setVisible] = useState(false);
  const {user , token } = useSelector((state) => state?.user?.data);
  let clearUser = useSelector((state) => state?.user?.data?.user);

  
 

  const notificationsCount = 10;
  const latestNotifications = [];
  const [logoutModal, setLogoutModal] = useState(false);

  const items = [
    {
      key: "1",
      label: (
        <div
          className="headerDropdown"
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            padding: "2px 8px",
          }}
          onClick={() => navigate("/profile")}
        >
          My Profile
          {/* <FaUser style={{ fontSize: "14px" }} /> &nbsp; My Profile */}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="headerDropdown"
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            padding: "2px 8px",
          }}
          onClick={() => navigate("/petProfile")}
        >
          Pet Profile
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            padding: "2px 8px",
          }}
          onClick={() => {
            dispatch(logouts(clearUser)) 
            navigate('/login')
            }}

        >
          Logout
        </div>
      ),
    },
  ];

  const content = (
    <div style={{ width: "350px" }}>
      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Notifications</h3>
        <Alert
          message={`${notificationsCount} New`}
          type="success"
          style={{ fontSize: "12px", padding: "2px 10px", color: "green" }}
        />
      </div>
      <hr
        style={{
          borderLeft: "none",
          borderBottom: "none",
          borderRight: "none",
          borderTop: "1px solid rgb(0 0 0 / 15%)",
        }}
      />
      <div style={{ height: "250px", overflow: "auto" }}>
        {latestNotifications &&
          latestNotifications.length > 0 &&
          latestNotifications.map((item) => {
            return (
              <div
                style={{
                  padding: 10,
                  minHeight: "100px",
                  borderBottom: "1px solid #dadada",
                  marginBottom: "5px",
                }}
              >
                <Row
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Col xs={4}>
                    <div
                      style={{
                        // padding: "10px 10px 10px 10px",

                        display: "flex",
                        width: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "40px",
                        backgroundColor: "#385790",
                        borderRadius: "5px",
                      }}
                    >
                      <GoBellFill
                        style={{ fontSize: "20px", color: "white" }}
                      />
                    </div>
                  </Col>
                  <Col xs={18}>
                    <Typography.Title
                      className="fontFamily1"
                      style={{ fontSize: "14px", color: "black", margin: 0 }}
                    >
                      {item.title}
                    </Typography.Title>

                    <Typography.Text
                      className="fontFamily1"
                      style={{ fontSize: "12px", color: "black", margin: 0 }}
                    >
                      {item?.content?.slice(0, 100)}{" "}
                      {item.content.length > 100 && "..."}
                    </Typography.Text>
                  </Col>
                </Row>
              </div>
            );
          })}
      </div>

      <hr
        style={{
          borderLeft: "none",
          borderBottom: "none",
          borderRight: "none",
          borderTop: "1px solid rgb(0 0 0 / 15%)",
        }}
      />

      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button onClick={() => navigate("/notifications")} type="link">
          View All
        </Button>
      </div>
    </div>
  );

  const logout = () => {
    setLogoutModal(false);

    dispatch(removeUser());
    navigate("/signin");
  };

  return (
    <Header
      style={{
        height: "auto",
        // position: "absolute",
        width: "100%",
        top: 0,
        zIndex: 20,
        padding: "0px",
        background: "transparent",
        position: "absolute",
        scrollBehavior: "smooth",
      }}
    >
      <Row
        style={{
          padding: "5px 0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={22} lg={21}>
          <Row className="header-row" >
            <Col xs={11} md={12} xl={3} className="">
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={130}
                height={60}
                src={Logo}
                // style={{ maxWidth: 130 }}
                onClick={() => navigate("/")}
              />
            </Col>
            <Col xs={0} sm={0} xl={21} lg={0}>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Menu
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    backgroundColor: "transparent",
                  }}
                  mode="horizontal"
                  className="header-menu hide-on-phone"
                >
                  <Menu.Item
                    key="home"
                    className="hover"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Menu.Item>
                  <Menu.Item
                    key="earlyyears"
                    className="hover"
                    onClick={() => navigate("/aboutUs")}
                  >
                    About Us
                  </Menu.Item>
                  <Menu.Item
                    key="dynamiccontinuity"
                    className="hover"
                    onClick={() => navigate("/service")}
                  >
                    Services
                  </Menu.Item>
                  {
                    token && (
                      <>
                          <Menu.Item
                            key="serviceblog"
                            className="hover"
                            onClick={() => navigate("/myBookings")}
                          >
                            My Booking
                          </Menu.Item>
                      </>
                    )
                  }

                  <Menu.Item
                    key="products"
                    className="hover"
                    onClick={() => navigate("/contactUs")}
                  >
                    Contact Us
                  </Menu.Item>
                </Menu>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                  className="header-find-box"
                >
                  {!token ? (
                    <>
                      <Button
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/login")}
                        className="web-btn loginbtn"
                      >
                        Login
                      </Button>
                      <Button
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/createAccount")}
                        className="web-btn signupbtn"
                      >
                        Signup
                      </Button>
                    </>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                        // gap: "5%",
                      }}
                      className="header-btn-container"
                    >
                      <Badge
                        count={notificationsCount}
                        style={{
                          backgroundColor: "red",
                          padding: "0",
                          minWidth: "15px",
                          height: "15px",
                          fontSize: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IoIosChatbubbles
                          style={{ fontSize: "25px", color: "#000" }}
                          onClick={() => navigate("/chat")}
                        />
                      </Badge>
                      {/* &emsp; &emsp; */}
                      <Popover
                        content={content}
                        placement="bottomRight"
                        arrow={false}
                        className="headerPopover"
                      >
                        <Badge
                          count={notificationsCount}
                          style={{
                            backgroundColor: "red",
                            padding: "0",
                            minWidth: "15px",
                            height: "15px",
                            fontSize: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <GoBellFill
                            style={{ fontSize: "25px", color: "#000" }}
                          />
                        </Badge>
                      </Popover>
                      &emsp;
                      <div
                        style={{
                          minWidth: "120px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {/* <Avatar
                          size={30}
                          src={
                            !user.image
                              ? avatar
                              : UPLOADS_URL + "/" + user.image
                          }
                        /> */}

                        <Dropdown
                          menu={{
                            items,
                          }}
                          trigger={["hover"]}
                          placement="bottomRight"
                        >
                          <p
                            style={{
                              marginLeft: 5,
                              fontSize: "16px",
                              textTransform: "capitalize",
                              color: "#000",
                              cursor:"pointer"
                            }}
                          >
                            <Avatar
                          size={30}
                          src={
                            !user.image
                              ? avatar
                              : UPLOADS_URLs + user.image
                          }
                        />
                            {user?.firstName} <AiFillCaretDown fontSize={12} />{" "}
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                  )}

                  {/* <BiSearch style={{ fontSize: "24px", color: "#000" }} />
                <Button
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/privateserviceprovider")}
                  className="web-btn"
                >
                  Find a Service Provider
                </Button> */}
                </div>
              </div>
            </Col>
            <Col xs={11} lg={12} xl={0} style={{ textAlign: "end" }}>
              <MdMenu
                style={{ fontSize: 26, color: "#000" }}
                onClick={() => setVisible(true)}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Drawer
        className="drawer"
        placement={"left"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        // style={{ backgroundColor: "#264067" }}
        key={"drawer"}
      >
        <ImCross
          onClick={() => setVisible(false)}
          style={{
            fontSize: "18px",
            color: "#000",
            display: "block",
            cursor: "pointer",
            marginBottom: "14px",
          }}
        />
        <Image
          preview={false}
          alt={"Failed to load image"}
          width={130}
          height={60}
          src={Logo}
        />
        <br />
        <br />
        <br />
        {!token ? (
          <>
            <Button
              style={{
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
              className="web-btn loginbtn"
            >
              Login
            </Button>
            <Button
              style={{
                cursor: "pointer",
              }}
              onClick={() => navigate("/createAccount")}
              className="web-btn signupbtn"
            >
              Signup
            </Button>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
            className="header-btn-container"
          >
            <Badge
              count={notificationsCount}
              style={{
                backgroundColor: "red",
                padding: "0",
                minWidth: "15px",
                height: "15px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoIosChatbubbles
                style={{ fontSize: "25px", color: "#000" }}
                onClick={() => navigate("/chat")}
              />
            </Badge>
            {/* &emsp; &emsp; */}
            <Popover
              content={content}
              placement="bottomRight"
              arrow={false}
              className="headerPopover"
            >
              <Badge
                count={notificationsCount}
                style={{
                  backgroundColor: "red",
                  padding: "0",
                  minWidth: "15px",
                  height: "15px",
                  fontSize: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GoBellFill style={{ fontSize: "25px", color: "#000" }} />
              </Badge>
            </Popover>
            &emsp;
            <div
              style={{
                // minWidth: "200px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                size={40}
                src={
                  !user.image
                    ? "/images/avatar.png"
                    : UPLOADS_URL + "/" + user.image
                }
              />

              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <p
                  style={{
                    marginLeft: 10,
                    fontSize: "16px",
                    textTransform: "capitalize",
                    color: "#000",
                  }}
                >
                  {user?.firstName} <AiFillCaretDown fontSize={12} />{" "}
                </p>
              </Dropdown>
            </div>
          </div>
        )}
        <Menu
          style={{
            fontSize: 18,
            fontWeight: 500,
            // backgroundColor: "#264067",
            color: "#000",
          }}
          mode="inline"
          className="header-menu-mobile "
        >
          <Menu.Item key="home" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/"); }}>
            Home
          </Menu.Item>
          <Menu.Item key="about" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/aboutUs"); }}>
            About Us
          </Menu.Item>
          <Menu.Item key="tutors" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/service"); }}>
            Services
          </Menu.Item>
          <Menu.Item key="coaches" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/comingSoon"); }}>
            My Booking
          </Menu.Item>
          <Menu.Item key="coaches" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/contactUs"); }}>
            Contact Us
          </Menu.Item>
        </Menu>
        <br />
        <br />
      </Drawer>
    </Header>
  );
};

export default ClientHeader;
