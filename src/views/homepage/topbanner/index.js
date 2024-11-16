import React from "react";
import { Row, Col, Typography, Button, Image } from "antd";
// import 'antd/dist/antd.css';

const { Title } = Typography;

const Topbanner = () => {
  return (
    <div className="banner-section">
     
        <Row justify={"center"} style={{ width: "100%" }}>
          <Col lg={21}>
            <div className="banner-text-box">
              <h3 className="home-banner-heding">Loving Daycare for</h3>
              <h3 className="home-banner-heding">Happy Pups and Kittens!</h3>
              <h6 className="figtree-18">Tacoma’s Most Pawsome Pet Sitters!</h6>
              <Button
                style={{
                  cursor: "pointer",
                }}
                className="web-btn"
              >
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      
    </div>
  );
};

export default Topbanner;
