import { Col, Row, Typography, List } from "antd";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import AboutUsHome from "../../views/homepage/aboutUsHome";
// const { Meta } = Card;
const { Title } = Typography;
const dateConverter = (date) => {
  const convertedDate = new Date(date);
  let options = { month: "long", day: "numeric" };
  let monthAndDate = convertedDate.toLocaleDateString("en-US", options);
  return monthAndDate;
};

const data = [
  "●	Personal Information: When you contact us, book services, or subscribe to our newsletter, you may provide us with personal information, such as your name, email address, phone number, pet's name and species, and billing information.",
  "●	Non-Personal Information: We may also collect non-personal information about your use of our website and services, such as your browsing history, IP address, and device type. This information is collected through cookies and other tracking technologies.",
];
const data2 = [
  "●	To provide and improve our services, including daycare, boarding, grooming, and training for your pet.",
  "●	To send you information about our services, promotions, and events.",
  "●	To respond to your inquiries and requests.",
  "●	To personalize your experience on our website.",
  "●	To analyze website traffic and usage patterns.",
  "●	To comply with legal and regulatory requirements.",
];
const data3 = [
  "●	To service providers who help us operate our website and business, such as payment processors or veterinary clinics (if necessary for pet care).",
  "●	To comply with legal or regulatory requirements.",
  "●	In the event of a merger, acquisition, or sale of our assets.",
];
const Terms = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="shop-page">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xs={23} md={18}>
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col lg={24}>
              <div class="arrow-box">
                <FaArrowLeftLong
                  className="arrow"
                  onClick={() => navigate(-1)}
                />
                <h3 className="main-heading">Terms & Conditions</h3>
              </div>
            </Col>
          </Row>
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col lg={24}>
              <p className="web-p">
                Effective Date: [Date]
                <br />
                <br />
                Happy Furbaby Inn ("Happy Furbaby Inn," "we," "us," or "our") respects the privacy of our customers and website visitors ("you" or "your"). This Privacy Policy describes the types of information we may collect from you when you visit our website or use our services and how we may use that information.
                <br />
                <br />
                <h5 className="booking-card-name">Information We Collect</h5>
                We may collect the following types of information from you:
                <List
                  bordered
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <h5 className="booking-card-name">How We Use Your Information</h5>
                We may use the information we collect from you for the following purposes:
                <List
                  bordered
                  dataSource={data2}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <h5 className="booking-card-name">Sharing Your Information</h5>
                We will not share your personal information with third parties without your consent, except in the following cases:
                <List
                  bordered
                  dataSource={data3}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <h5 className="booking-card-name">Your Choices</h5>
                You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails. You can also control the use of cookies on your web browser.
                <br />
                <br />
                <h5 className="booking-card-name">Data Security</h5>
                We take reasonable steps to protect the information you provide to us from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure.
                <br />
                <br />
                <h5 className="booking-card-name">Children's Privacy</h5>
                Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
                <br />
                <br />
                <h5 className="booking-card-name">Updates to this Privacy Policy</h5>
                We may update this Privacy Policy from time to time. We will post any changes on this page.
                <br />
                <br />
                <h5 className="booking-card-name">Contact Us</h5>
                If you have any questions about this Privacy Policy, please contact us at [phone number] or [email address].
                <br />
                <br />
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Terms;
