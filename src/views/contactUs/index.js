import { Col, Row, Typography, Input, Form, Button , message } from "antd";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from 'react-redux'
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { createQuery } from '../../redux/thunk/queryThunk'
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
  const dispatch = useDispatch()
  const { id } = useParams();
  const onFinish = async (values) => {
    // Handle form submission
    console.log("Received values:", values);

    const {firstName,lastName,email,subject,message } = values

    const payload = {
      firstName,
      lastName,
      email,
      subject,
      message
    }

    const data = {
      payload
    }

   let newQuery = await dispatch(createQuery(data)).unwrap()
   if (newQuery.message) {
    // Show SweetAlert2 alert
    Swal.fire({
      title: 'System Alert',
      text: 'Your message has been sent',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate after the user confirms the alert
        navigate('/');
      }
    });
  }
  
   console.log("newQuery",newQuery);
   



  };
  const { TextArea } = Input;
  const handleChange = () => {
   
  };
  return (
    <div className="shop-page">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xs={23} md={21}>
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col lg={24}>
              <div class="arrow-box">
                <FaArrowLeftLong
                  className="arrow"
                  onClick={() => navigate(-1)}
                />
                <h3 className="main-heading">Get In Touch</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center">
        <Col lg={14}>
          <div className="details-card">
            <Form
              className="row g-3"
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row style={{ width: "100%" }} gutter={[16, 16]}>
                <Col lg={12} md={12} xs={24}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your First Name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter First Name"
                      className="web-input"
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} md={12} xs={24}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Last Name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Last Name"
                      className="web-input"
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} md={12} xs={24}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Email!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Email address"
                      className="web-input"
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} md={12} xs={24}>
                  <Form.Item
                    label="Subject"
                    name="subject"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Subject!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Subject"
                      className="web-input"
                    />
                  </Form.Item>
                </Col>
                <Col lg={24} md={24} xs={24}>
                  <Form.Item
                    label="Message"
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Message!",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Write your message.."
                      
                      className="web-textarea"
                    />
                  </Form.Item>
                </Col>
                <Col lg={24} md={24} xs={24}>
                <div className="" style={{ textAlign: "center" }}>
                  <Button
                    type=""
                    htmlType="submit"
                    className="btn web-btn px-5"
                    // onClick={handleChange}
                  >
                    Submit Now
                  </Button>
                </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpcomingEvents;
