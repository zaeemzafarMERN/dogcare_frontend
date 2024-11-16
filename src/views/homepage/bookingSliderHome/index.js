import React from "react";
import { Row, Col, Card, Button, Carousel, Badge, Image, Space } from "antd";
import { bookingDate } from "../../../components/Data/data";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  ClockCircleFilled,
  CalendarFilled,
  StopOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const HomeBookingSlider = () => {
  const navigate = useNavigate();
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200, // Medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Extra small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575, // Extra small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const token = useSelector((state) => state.user.userToken);

  return (
    <section className="home-booking-slider">
      <div>
        {token ? (
          <></>
        ) : (
          <div className="container-fluid">
            <Row justify="center" align="middle" className="text-center">
              <Col lg={24}>
                <h6 className="text-16" style={{ textAlign: "center" }}>
                  popular choices
                </h6>
                <h2 className="text-45" style={{ textAlign: "center" }}>
                  My Bookings
                </h2>
              </Col>
            </Row>
            <Row justify="center">
              <Col lg={20}>
                <Carousel className="booking" {...carouselSettings}>
                  {bookingDate.map((bookingDate, index) => (
                    <div key={index} className="item">
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
                            text={bookingDate.statusText}
                            color={
                              bookingDate.statusText === "Completed"
                                ? "#00B31D"
                                : bookingDate.statusText === "Upcoming"
                                ? "#DD9F00"
                                : bookingDate.statusText === "Ongoing"
                                ? "#2D308B"
                                : "red"
                            }
                            placement="start"
                          >
                            <Card
                              className="booking-card"
                              cover={<span>{bookingDate.pic}</span>}
                            >
                              <Meta
                                title="Elegantly Sobha Hartlands"
                                description={
                                  <>
                                    <div className="booking-card-span">
                                      <span>
                                        <ClockCircleFilled /> {bookingDate.time}
                                      </span>
                                      <span>
                                        <CalendarFilled /> {bookingDate.date}
                                      </span>
                                      <span>
                                        <StopOutlined /> {bookingDate.day}
                                      </span>
                                    </div>
                                    <h6 className="booking-card-price">
                                      {bookingDate.paidAmmont}
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
                                          "/mystayBookings/" + bookingDate._id
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
                    </div>
                  ))}
                </Carousel>
                <div style={{ textAlign: "center" }}>
                  <span
                    className="blue-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/mystayBookings")}
                  >
                    View All
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeBookingSlider;
