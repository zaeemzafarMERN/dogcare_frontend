import { Row, Col, Image } from "antd";
import experienceflyImg from "../../../assets/experiencefly-img.png";
import experienceflyImg2 from "../../../assets/experiencefly-img2.png";
import plainimg from "../../../assets/plane.png";

const AboutUsHome = () => {
  return (
    <section className="experience-fly ant-experience-fly">
      <div className="ant-container-fluid">
        <Row justify="center" gutter={16}>
          <Col lg={20} md={20} xs={23}>
            <Row align="middle" gutter={16}>
              <Col lg={10}>
                <div className="experiencefly-imgbox ant-experiencefly-imgbox">
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={experienceflyImg}
                    className=""
                  />
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={experienceflyImg2}
                    className=""
                  />
                </div>
              </Col>
              <Col lg={14}>
                <h6>// About Us //</h6>
                <h2>Stress-Free, Fun Daycare for Your Furbabies!</h2>
                <p className="web-p pb-3">
                  At Happy Furbaby Inn, we understand the importance of a safe
                  and exciting environment for your furry friend. Inspired by
                  our own experience with overcrowded and understaffed dog
                  daycares, we created a safe place where your pets can truly
                  thrive.
                  <br />
                  <br />
                  We witnessed firsthand how insufficient space, unsanitary
                  conditions, and lack of supervision can lead to stress and
                  frustration. And we don't believe your precious pets deserve
                  that. That's why Happy Furbaby Inn is different. We prioritize
                  small playgroups with dedicated staff, ensuring every furry
                  baby gets the attention and space they need to feel
                  comfortable and relaxed.
                </p>
                <a
                  href="#_"
                  className="web-btn ant-web-btn"
                  style={{ margin: "20px 0" }}
                >
                  Read More
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutUsHome;
