import { Col, Layout, Row, Input, Image, Space } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import fb from "../../assets/fb.png";
import inst from "../../assets/inst.png";
import snap from "../../assets/snap.png";
import footerlogo from "../../assets/footer-logo.png";
import { useNavigate } from "react-router";

const { Search } = Input;

const ClientFooter = () => {
  const navigate = useNavigate();
  // const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <footer className="ant-footer">
      <div className="ant-container-fluid">
        <Row justify="center" style={{ width: "100%" }}>
          <Col lg={22}>
            <Row justify={"center"} gutter={[16, 16]} style={{ width: "100%", gap:"30px" }}>
              <Col xl={5} lg={6} md={16} xs={23}>
                <div className="fotr-logo-box">
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={footerlogo}
                    className=""
                  />
                  <p className="footer-p">
                  Tacoma’s happiest place for furbabies! A safe and loving daycare where your furry friends play, rest, & feel cared for.
                  </p>
                </div>
              </Col>
              <Col xl={3} lg={5} md={24} xs={23}>
                <div className="for-footer-nav ant-for-footer-nav">
                  <h5>Useful links</h5>
                  <ul className="brd-right">
                    <li>
                      <a onClick={() => navigate("/aboutUs")}>Home</a>
                    </li>
                    <li>
                      <a href="about.php">About Us</a>
                    </li>
                    <li>
                      <a href="news.php">Services</a>
                    </li>
                    <li>
                      <a href="news.php">Booking</a>
                    </li>
                    <li>
                      <a href="news.php">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3} lg={5} md={24} xs={23}>
                <div className="for-footer-nav ant-for-footer-nav">
                  <h5>My Account</h5>
                  <ul className="brd-right">
                    <li>
                      <a onClick={() => navigate("/privacyPolicy")}>Privacy Policy</a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/termsConditions")}>Terms And Conditions</a>
                    </li>
                    <li>
                      <a>
                        Feedback
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3} lg={5} md={24} xs={23}>
                <div className="for-footer-nav ant-for-footer-nav">
                  <h5>Social Media</h5>
                  <ul className="brd-right">
                    <li>
                      <a href="index.php">Instagram</a>
                    </li>
                    <li>
                      <a href="about.php">Facebook</a>
                    </li>
                    <li>
                      <a href="news.php">Twitter</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={5} lg={12} md={10} xs={23}>
                <div className="subscription-box">
                  <h5>Stay in the Loop!</h5>
                  <Space direction="vertical" className="newsletterInput" style={{ width: "100%" }}>
                    <Search
                      placeholder="input search text"
                      allowClear
                      enterButton={<FaArrowRight />}
                      size="large"
                      onSearch={onSearch}
                    />
                  </Space>
                  <p className="footer-p">Subscribe to our newsletter and get exclusive discounts and pawsome tips and tricks for training and pet care!</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={24} xs={24}>
                <p className="copyright-p ant-copyright-p">
                Copyright 2023 © Dog Day Care. All Rights Reserved.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default ClientFooter;
