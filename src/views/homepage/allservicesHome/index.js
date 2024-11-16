import React from "react";
import { Row, Col, Image } from "antd";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import cardsicons5 from "../../../assets/cards-icons5.png";
import cardsicons2 from "../../../assets/cards-icons2.png";
import cardsicons3 from "../../../assets/cards-icons3.png";
import cardsicons4 from "../../../assets/cards-icons4.png";
import cardsicons from "../../../assets/cards-icons.png";
import { useNavigate } from "react-router";

const AllservicesHome = () => {
  const navigate = useNavigate();
  return (
    <section className="ant-section">
      <div className="ant-container-fluid">
        <Row justify="center">
          <Col lg={22}>
            <Row gutter={[16, 16]} justify="center">
              <Col lg={4} md={24}>
                <div
                  className="home-service-cards"
                  onClick={() => navigate("/ridesBooking")}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={cardsicons5}
                    className=""
                  />
                  <h6 className="urb-18">Rides</h6>
                </div>
              </Col>
              <Col lg={4} md={24}>
                <div
                  className="home-service-cards"
                  onClick={() => navigate("/findNextStay")}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={cardsicons2}
                    className=""
                  />
                  <h6 className="urb-18">Stays</h6>
                </div>
              </Col>
              <Col lg={4} md={24}>
                <div
                  className="home-service-cards"
                  onClick={() => navigate("/dropZone")}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={cardsicons3}
                    className=""
                  />
                  <h6 className="urb-18">Jumps</h6>
                </div>
              </Col>
              <Col lg={4} md={24}>
                <Link to="/marketplace" className="home-service-cards-link">
                  <div className="home-service-cards">
                    <Image
                      preview={false}
                      alt={"Failed to load image"}
                      src={cardsicons4}
                      className=""
                    />
                    <h6 className="urb-18">Marketplace</h6>
                  </div>
                </Link>
              </Col>
              <Col lg={4} md={24}>
                <Link to="/shop" className="home-service-cards-link">
                  <div className="home-service-cards">
                    <Image
                      preview={false}
                      alt={"Failed to load image"}
                      src={cardsicons}
                      className=""
                    />
                    <h6 className="urb-18">Shop</h6>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AllservicesHome;
