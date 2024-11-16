import React from 'react';
import { Row, Col } from 'antd';

const DriverStaysSection = () => {
  return (
    
    <section className="driver-stays ant-driver-stays">
      <div className="ant-container">
        <Row justify="center">
          <Col lg={14}>
            <div className="driver-stays-box ant-driver-stays-box">
              <p>If you are a Drop Zone Company</p>
              <h3>
                Driver Stays <span className="blue-text">Company</span> Seller/Vendor
              </h3>
              <a href="#_" className="web-btn ant-web-btn">
                Join Us Now!
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DriverStaysSection;
