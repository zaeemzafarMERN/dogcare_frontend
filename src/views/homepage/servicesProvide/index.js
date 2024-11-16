import { Row, Col, Image } from "antd";
import Dog1 from "../../../assets/dog1.png";
import { serviceProviderData , serviceProviderData2} from "../../../components/Data/data";

const ServicesProvide = () => {
  return (
    <section className="experience-fly service-provider">
      <div className="ant-container-fluid">
        <Row justify="center" gutter={16}>
          <Col lg={18} md={20} xs={23}>
            <Row align="middle" gutter={16} className="responsive-justify-center">
              <Col lg={24} style={{ textAlign: "center" }}>
                <h6>// How We Keep Your Furbuddies Happy //</h6>
                <h2>SERVICES WE OFFER</h2>
              </Col>
            </Row>
            <Row align="" gutter={[16, 16]} className="responsive-justify-center">
              <Col lg={7} md={12} className="order1">
                {serviceProviderData.map((serviceProviderData, index) => (
                  <div className="service-provider-boxs" key={index}>
                    <h6>{serviceProviderData?.title}</h6>
                    <p>{serviceProviderData?.description}</p>
                  </div>
                ))}
              </Col>
              <Col lg={10} md={10} className="order2">
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  src={Dog1}
                  className=""
                />
              </Col>
              <Col lg={7} md={12} className="order3">
                {serviceProviderData2.map((serviceProviderData2, index) => (
                  <div className="service-provider-boxs" key={index}>
                    <h6>{serviceProviderData2?.title}</h6>
                    <p>{serviceProviderData2?.description}</p>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ServicesProvide;
