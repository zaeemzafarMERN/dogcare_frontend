import { useState } from "react";
// import { images } from '../../../Assets'
// import { images } from '../../Assets';
import { Button, Modal, Image, Typography } from "antd";
import "./style.css";
import Done from "../../assets/done.png";

const Modals = ({ open, handleOk, handleCancel, text, title, footer }) => {
  return (
    <div>
      <Modal
        centered
        open={open}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
        footer={footer}
        okText="Yes"
        className="StyledModal"
        style={{
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
        cancelText="No"
        cancelButtonProps={{
          className: "no-btn",
        }}
        okButtonProps={{
          className: "web-btn",
        }}
      >
        {/* <Image src={Done} preview={false} width={80} height={80} /> */}
        <Typography.Title level={2} style={{ fontSize: "30px" }}>
          {title}
        </Typography.Title>
        <Typography.Title className="fontfamily-web" level={6} style={{ fontSize: "18px", fontWeight:"400", }}>
          {text}
        </Typography.Title>
      </Modal>
    </div>
  );
};

export default Modals;
