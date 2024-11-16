import { Col, Row, Typography, Image } from "antd";
import { useNavigate, useParams } from "react-router";
import aboutimg from "../../assets/aboutimg.png";
import AboutUsHome from "../../views/homepage/aboutUsHome";
// const { Meta } = Card;
const { Title } = Typography;
const dateConverter = (date) => {
  const convertedDate = new Date(date);
  let options = { month: "long", day: "numeric" };
  let monthAndDate = convertedDate.toLocaleDateString("en-US", options);
  return monthAndDate;
};
const UpcomingEvents = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="shop-page">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xs={24} md={24}>
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col lg={24} xs={24} md={24}>
              <div class="inner-banner">
                <h3 className="main-heading">About Us</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <AboutUsHome />

      <section className="experience-fly for-gray-bg">
        <div className="ant-container-fluid">
          <Row justify="center" gutter={16}>
            <Col lg={20} md={20} xs={23}>
              <Row align="middle" gutter={[16, 16]}>
                <Col lg={11}>
                  <h2>Your Pet's Home Away from Home!</h2>
                  <p className="web-p pb-3">
                  The Happy Furbaby Inn keeps your pups and kitties happy! Our spacious indoor/outdoor play areas separate pups by size and energy levels. Senior dogs and tiny tots have their own special zones, and our unique covered outdoor area lets them enjoy sunshine and fresh air without getting wet. Worried about missing your furball? We have night staff on-site who send picture updates every four hours so you can relax! 
                    <br />
                    <br />
                    Looking to treat your furbaby to a happy day? Choose The Happy Furbaby Inn!
                  </p>
                </Col>
                <Col lg={13}>
                  <div className="experiencefly-imgbox ant-experiencefly-imgbox">
                    <Image
                      preview={false}
                      alt={"Failed to load image"}
                      src={aboutimg}
                      className=""
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
