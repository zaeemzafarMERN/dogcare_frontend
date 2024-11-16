import { useEffect, useState } from "react";
import {
  Col,
  Row,
  Form,
  Input,
  Radio,
  Button,
  Space,
  Collapse,
  Card,
  List,
  Image,
  Drawer,
  Rate,
  Select,
  Typography,
  DatePicker,
  Badge,
} from "antd";
import { useNavigate } from "react-router";
import { MdMenu } from "react-icons/md";
import {
  CaretRightOutlined,
  ClockCircleFilled,
  CalendarFilled,
  StopOutlined,
} from "@ant-design/icons";
import { FaArrowLeftLong } from "react-icons/fa6";

const FilteredData = ({bookingDate , index , UPLOADS_URLs , navigate}) => {
    const { Meta } = Card;
    //let navigate = useNavigate();

  return (
    <Col lg={8} key={index}>
    <div>
      <Space
        direction="vertical"
        size="middle"
        style={{
          width: "100%",
          padding: "8px",
        }}
      >
        <Badge.Ribbon
          text={bookingDate.status}
          color={
            bookingDate.status === "Complete"
              ? "#00B31D"
              : bookingDate.status === "Upcoming"
              ? "#DD9F00"
              : bookingDate.status === "Ongoing"
              ? "#2D308B"
              : "red"
          }
          placement="start"
        >
          <Card
            className="booking-card"
            cover={
              <img className="booking-card-img"  src={UPLOADS_URLs+bookingDate?.serviceId?.serviceImage}/>
                
              
            }
            style={{
              backgroundColor:
                bookingDate.status === "Complete"
                  ? "#FED4DB"
                  : bookingDate.status === "Upcoming"
                  ? "#FFF1CB"
                  : bookingDate.status === "Ongoing"
                  ? "#D1D1F5"
                  : "white",
            }}
          >
            <Meta
              title={bookingDate.serviceId.title}
              description={
                <>
                  <div className="booking-card-span">
                    <span>
                      <ClockCircleFilled /> {bookingDate.from + " " + bookingDate.to}
                    </span>
                    <span>
                      <CalendarFilled /> { new Date(bookingDate.createdAt)?.toISOString()?.split('T')[0] }
                    </span>
                  </div>
                  <h6 className="booking-card-price">
                    ${Number(bookingDate.total).toFixed(2)}/Paid
                  </h6>
                  <Button
                    type="link"
                    className="web-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                    onClick={() =>
                      navigate(
                        "/myBookings/" + bookingDate._id
                      )
                    }
                  >
                    View Details
                  </Button>
                </>
              }
            />
          </Card>
        </Badge.Ribbon>
      </Space>
    </div>
  </Col>
  )
}

export default FilteredData
