import React from "react";
import { Row, Col, Carousel } from "antd";
import { clientTestimonials } from "../../../components/Data/data";

const ClientLogoTestimonialsSection = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5.3,
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

  return (
    <section className="client-logo-testimonials ant-client-logo-testimonials">
      <div className="ant-container-fluid">
        <Row>
          <Col lg={24} xs={24}>
            <h6 className="small-heading">Sponsors</h6>
            <h4 className="heading-h4">Supporting Organizations</h4>
          </Col>
          <Col lg={24}>
            <Carousel className="home-testi" {...carouselSettings}>
              {clientTestimonials.map((clientTestimonials, index) => (
                <div key={index} className="item">
                  <div className="ant-carousel-item">
                    <div className="client-logo-box">
                      <span>{clientTestimonials.pic}</span>
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

export default ClientLogoTestimonialsSection;
