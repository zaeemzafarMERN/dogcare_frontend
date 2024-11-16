import { Col, Row, Typography, Input, Form, Button, Image } from "antd";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import comingsoon from "../../assets/comingsoon.png";
import swal from "sweetalert";
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
  const onFinish = (values) => {
    // Handle form submission
    console.log("Received values:", values);
  };
  const { TextArea } = Input;
  const handleChange = () => {
    swal("system Alert", "Your Message has been Send", "success");
  };
  return (
    <div className="shop-page" style={{ padding: "20px 0", textAlign:"center" }}>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xs={23} md={21}>
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col lg={24}>
              <div class="arrow-box">
                <FaArrowLeftLong
                  className="arrow"
                  onClick={() => navigate(-1)}
                />
                <h3 className="main-heading">GO Back</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col lg={14}>
          <Image
            preview={false}
            alt={"Failed to load image"}
            src={comingsoon}
          />
        </Col>
      </Row>
    </div>
  );
};

export default UpcomingEvents;
