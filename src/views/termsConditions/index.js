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
  "●	Reservations: Reservations are required for all services and can be made online, by phone, or in person.",
  "●	Payment: Full payment is due at the time of service for daycare and grooming. For boarding services, a deposit of [percentage]% of the total cost is required to secure your booking date. The remaining balance is due upon pick-up of your pet. We accept payment by [list accepted payment methods].",
];
const data2 = [
  "●	Vaccinations: All pets must be current on all vaccinations as required by Washington State law. Proof of vaccination is required at the time of drop-off.",
  "●	Health: Pets must be in good health and free of any contagious diseases.",
  "●	Temperament: Pets must be social and not exhibit any aggressive behavior towards other animals or staff.",
];
const data3 = [
  "●	Drop-Off and Pick-Up Times: Specific drop-off and pick-up times will be provided at the time of booking. Late pick-up fees may apply.",
  "●	Arrival Procedures: Upon arrival for drop-off or pick-up, please inform a staff member of your presence.",
];
const data4 = [
  "●	Daycare and Grooming: Cancellations with less than [number] hours notice will be charged a cancellation fee of [amount].",
  "●	Boarding: Cancellations with less than [number] days notice will be charged a cancellation fee of [percentage]% of the total booking cost.",
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
                Welcome to Happy Furbaby Inn ("Happy Furbaby Inn," "we," "us,"
                or "our"). These Terms and Conditions ("Terms") govern your use
                of our website and services (daycare, boarding, grooming,
                training).
                <br />
                <br />
                By accessing or using our website or services, you agree to be
                bound by these Terms.
                <br />
                <br />
                <h5 className="booking-card-name">Services</h5>
                Happy Furbaby Inn provides daycare, boarding, grooming, and
                training services for pets. We offer consultations, estimates,
                and execution of the agreed-upon service. Descriptions of
                services offered can be found on our website but are not
                exhaustive.
                <br />
                <br />
                <h5 className="booking-card-name">Booking and Payment</h5>
                <List
                  bordered
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <h5 className="booking-card-name">Pet Requirements</h5>
                <List
                  bordered
                  dataSource={data2}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <h5 className="booking-card-name">Drop-Off and Pick-Up</h5>
                <List
                  bordered
                  dataSource={data3}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <h5 className="booking-card-name">Cancellations</h5>
                <List
                  bordered
                  dataSource={data4}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <br />
                <h5 className="booking-card-name">Liability</h5>
                Happy Furbaby Inn is not liable for any injuries, illnesses, or
                deaths that occur while a pet is in our care unless caused by
                our negligence. We recommend having pet insurance for your furry
                friend.
                <br />
                <br />
                <h5 className="booking-card-name">Limitation of Liability</h5>
                Our liability is limited to the total amount paid by you for the
                service.
                <br />
                <br />
                <h5 className="booking-card-name">Image Release</h5>
                You grant Happy Furbaby Inn permission to use photos or videos
                of your pet for marketing purposes.
                <br />
                <br />
                <h5 className="booking-card-name">Governing Law</h5>
                These Terms will be governed by and construed in accordance with
                the laws of the State of Washington, without regard to its
                conflict of law provisions.
                <br />
                <br />
                <h5 className="booking-card-name">Entire Agreement</h5>
                These Terms constitute the entire agreement between you and
                Happy Furbaby Inn regarding the use of our website and services.
                <br />
                <br />
                <h5 className="booking-card-name">Severability</h5>
                If any provision of these Terms is held to be invalid or
                unenforceable, such provision shall be struck and the remaining
                provisions shall remain in full force and effect.
                <br />
                <br />
                <h5 className="booking-card-name">Waiver</h5>
                No waiver by Happy Furbaby Inn of any breach of these Terms
                shall be deemed a waiver of any subsequent breach.
                <br />
                <br />
                <h5 className="booking-card-name">Updates to these Terms</h5>
                We may update these Terms from time to time. We will post any
                changes on this page.
                <br />
                <br />
                <h5 className="booking-card-name">Contact Us</h5>
                If you have any questions about these Terms, please contact us
                at [phone number] or [email address].
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
