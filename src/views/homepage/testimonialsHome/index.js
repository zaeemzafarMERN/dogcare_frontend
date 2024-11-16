import React from "react";
import { Row, Col, Carousel, Image } from "antd";
import { StarFilled } from "@ant-design/icons";
import { testimonials } from "../../../components/Data/data";

const TestimonialsSection = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4.7,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "80px",
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
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768, // Extra small screens
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 575, // Extra small screens
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="testimonials ant-testimonials">
      <div className="ant-container-fluid">
        <Row>
          <Col lg={24} xs={24}>
            <h6 className="small-heading">Testimonials</h6>
            <h4 className="heading-h4">Satisfied Clients</h4>
          </Col>
          <Col lg={24}>
            <Carousel className="home-testi" {...carouselSettings}>
              {testimonials.map((testimonials, index) => (
                <div key={index} className="item">
                  <div className="testimonials-card ant-testimonials-card">
                    <div className="stars">
                      {[...Array(5)].map((_, starIndex) => (
                        <StarFilled key={starIndex} />
                      ))}
                    </div>
                    <h5>{testimonials.testiTitle}</h5>
                    <p>{testimonials.description}</p>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "8px",
                      }}
                    >
                      <div className="flex-shrink-0">
                        <span>{testimonials.pic}</span>
                      </div>
                      <div className="" style={{ marginLeft: "10px" }}>
                        <h6 className="testi-profile-name">
                          {testimonials.profileName}
                        </h6>
                        <span className="testi-date">{testimonials.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TestimonialsSection;
