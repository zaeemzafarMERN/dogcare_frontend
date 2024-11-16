import { useEffect, useRef, useState } from "react";
import {
  Col,
  Row,
  Card,
  Checkbox,
  Rate,
  Typography,
  Button,
  Modal,
  Input,
  Divider,
  Form,
  Select,
  DatePicker,
  TimePicker,
  Space,
  Radio,
} from "antd";
import { useLocation, useNavigate, useParams } from "react-router";
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import {
  FaArrowLeftLong,
  FaLocationDot,
  FaParachuteBox,
} from "react-icons/fa6";
import { useDispatch , useSelector } from 'react-redux'
import { InfinitySpin } from 'react-loader-spinner'
import { serviceData, reviews } from "../../../components/Data/data";
import { MdSunny } from "react-icons/md";
import Slider from "react-slick";
import { CalendarFilled, ClockCircleFilled } from "@ant-design/icons";
// const { Meta } = Card;
import { createBooking } from '../../../redux/thunk/bookingThunk'
const { Title } = Typography;

const JumpDetails = () => {
  const {token ,user} = useSelector((state) => state?.user?.data);
  const dispatch = useDispatch()
  const location = useLocation();
  const stripe = useStripe();
  const elements = useElements();
  const state = location?.state
  console.log("state",state)
  const navigate = useNavigate();


  let [paymentMode , SetpaymentMode ] = useState("")
  let [partialPayment , SetpartialPayment] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);
  const [stripeToken , SetstripeToken] = useState("")
  const [card,Setcard] = useState({
    CardholderName : user?.data?.user?.firstName + " " + user?.data?.user?.lastName ,
    Cardnumber : "",
    Expirydate : "",
    CVC : ""
  })
  const [paymentType , SetpaymentType] = useState("")
  const [loading , Setloading] = useState(false)


  const handleSelectChange = (value) => {
    SetpaymentMode(value);
  };

  const handleSelectChange2 = (value) => {
    SetpaymentType(value);

    if(value === "card"){
      setModalOpen(true)
    }
  };

  const handleStripeToken = async () => {
    
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error, token } = await stripe.createToken(cardElement);
    
    SetstripeToken(token?.id)
    setModalOpen(false)
  }

console.log("partialPayment",partialPayment);


  const createBookings = async (values) => {
    Setloading(true) 
    const {paymentMode , paymentMethod , partialPayment } = values
    let  payload

    payload = {
      to : state?.to  ,
      from : state?.from ,
      serviceId : state?.serviceId,
      tipAmount : state?.tipAmount,
      date : state?.date,
      Enddate : state?.enddateS,
      additionalComments : state?.additionalComments,
      total : state?.total,
      paymentMode,
      paymentMethod ,
      payAmount : state?.total * 0.25,
     stripetoken : stripeToken
    }

    const data = {
      payload,
      token
    }

    console.log("data",data);
    

   
    try {
      let newBooking = await dispatch(createBooking(data)).unwrap();
      console.log("newBooking", newBooking);
      if (newBooking?.data?.message) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    } finally {
      Setloading(false); // Stop loading
    }

   


  }
 
  const elementStyles = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      },
      border: "5px solid black",
      padding: "10px",
      borderRadius: "4px"
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  const elementOptions = {
    style: elementStyles,
  };


  const handleChange = (field, event) => {
    console.log(field, event);
    Setcard((prev) => ({
      ...prev,
      [field]: event.complete,
    }));

    if (event.error) {
      
      console.log(event.error.message);
    } else {
      
      console.log('');
    }
  };


  return (
    <div className="shop-page">
    {
      loading ? 
      (
        <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xs={23} md={21}>
              <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col lg={24}>
                  <div class="arrow-box">
                    <FaArrowLeftLong
                      className="arrow"
                      onClick={() => navigate(-1)}
                    />
                    <h3 className="main-heading">Loading</h3>
                    
                    
                  </div>
                </Col>
              </Row>
              <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col lg={24}>
                  <div class="arrow-box">
                   
                    
                    <InfinitySpin
                        visible={true}
                        width="200"
                        color="#90E4FB"
                        ariaLabel="infinity-spin-loading"
                        />
                  </div>
                </Col>
              </Row>
          </Col>
        </Row>
      )
      :
      (
        <>
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col xs={23} md={21}>
              <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col lg={24}>
                  <div class="arrow-box">
                    <FaArrowLeftLong
                      className="arrow"
                      onClick={() => navigate(-1)}
                    />
                    <h3 className="main-heading">Payment</h3>
                    
                  </div>
                </Col>
              </Row>
              <Row justify="center">
                <Col lg={23}>
                  <Card className="details-card">
                    <Row align="" gutter={16}>
                      <Col lg={14}>
                        <div className="search-img-box-right">
                          <h5 className="heading-18">
                            Amount Payable:
                          </h5>
                          <h5 className="heading-18">
                            ${state?.total}
                          </h5>
                        </div>


                        <Form
                                className="row g-3"
                                name="basic"
                                layout="vertical"
                                initialValues={{
                                  remember: true,
                                }}
                                onFinish={createBookings}
                                // onFinishFailed={onFinishFailed}
                                autoComplete="off"
                              >
                                <Row
                                  style={{
                                    width: "100%",
                                    justifyContent: "center",
                                  }}
                                  gutter={[16, 16]}
                                >
                                  <Col lg={24}>
                                    <Form.Item
                                      label="Pay"
                                      name="paymentMode"
                                      style={{ textAlign: "start" }}
                                      rules={[
                                        {
                                          required: true,
                                          message: "Please select payment!",
                                        },
                                      ]}
                                    >
                                      <Select placeholder="Select" onChange={handleSelectChange}>
                                        <Select.Option value="full" >Full payment</Select.Option>
                                        <Select.Option value="partial">Partial Payment</Select.Option>
                                      </Select>
                                    </Form.Item>
                                  </Col>
                                {
                                  paymentMode === "partial" &&
                                  (
                                    <>
                                      <Col lg={24}>
                                        <Form.Item
                                          label="Payment Amount"
                                         
                                          name={partialPayment}
                                          // rules={[
                                          //   {
                                          //     required: true,
                                          //     message: "Please input amount!",
                                          //   },
                                          // ]}
                                        >
                                          <Input
                                            size="large"
                                            //onChange={(e) => SetpartialPayment(e.target.value == state?.total * 0.25)}
                                            placeholder={state?.total * 0.25}
                                            className="web-input"
                                            value={partialPayment}
                                            disabled
                                          />
                                        </Form.Item>
                                      </Col>
                                    </>
                                  )
                                }

                                  <Col lg={24}>
                                    <Form.Item
                                      label="Payment method"
                                      name="paymentMethod"
                                      style={{ textAlign: "start" }}
                                      rules={[
                                        {
                                          required: true,
                                          message: "Please select method!",
                                        },
                                      ]}
                                    >
                                      <Select placeholder="Select" onChange={handleSelectChange2}>
                                        {/* <Select.Option value="cash">Cash</Select.Option> */}
                                        <Select.Option value="card">Card</Select.Option>
                                      </Select>
                                    </Form.Item>
                                  </Col>
                                  <Form.Item>
                                      <Button
                                            className="web-btn"
                                            htmlType="submit"
                                            // onClick={() => navigate("/jumpCheckout")}
                                          >
                                            Proceed to pAy
                                          </Button>
                                  </Form.Item>
                                </Row>
                              </Form>

                        

                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Modal
            open={modalOpen}
            onOk={() => handleStripeToken()}
            onCancel={() => setModalOpen(false)}
            okText="Yes"
            className="StyledModal"
            style={{
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              
            }}
            cancelText="No"
            cancelButtonProps={{
              style: {
                border: "2px solid #F41242",
                color: "#000000",
                height: "auto",
                padding: "6px 35px",
                borderRadius: "50px",
                fontSize: "16px",
                marginTop: "15px",
              },
            }}
            okButtonProps={{
              style: {
                backgroundColor: "#F41242",
                color: "white",
                marginTop: "15px",
                height: "auto",
                padding: "5px 35px",
                borderRadius: "50px",
                fontSize: "16px",
                border: "2px solid #F41242",
              },
            }}
          >

    <Form
                layout="vertical"
                name="basic"
                initialValues={{
                  remember: true,
                }}
                style={{ marginLeft : "20px"}}
              >


                <Row gutter={[16, 16]} className="for-gutter-0">
                  <Col lg={24} xs={24} >
                    <Form.Item
                      label="Card number"
                      name="Cardnumber"
                      rules={[
                        {
                          
                          required: true,
                          message: "Please input Card number!",
                        },
                      ]}
                    >
                      {/* <Input
                        size="large"
                        placeholder="1234 1234 1234 1234"
                        className="web-input"
                        onChange={(e) => handleCardPaymentDetails('Cardnumber', e.target.value)}
                        value={card.Cardnumber }
                        maxLength={16}
                      /> */}

                      <CardNumberElement 
                        options={elementOptions} 
                        onChange={(event) => handleChange('cardNumber', event)}
                        />
                    </Form.Item>
                  </Col>
                  <Col lg={12} xs={24}>
                    <Form.Item
                      label="Expiry date"
                      name="Expirydate"
                      rules={[
                        {
                          required: true,
                          message: "Please input Expiry date!",
                        },
                      ]}
                    >
                      {/* <Input
                        size="large"
                        placeholder="MM/YY"
                        className="web-input"
                        onChange={(e) => handleCardPaymentDetails('Expirydate', e.target.value)}
                        value={card.Expirydate}
                      /> */}
                      <CardExpiryElement 
                        options={elementOptions}  
                        onChange={(event) => handleChange('cardExpiry', event)}

                        />
                    </Form.Item>
                  </Col>
                  <Col lg={12} xs={24}>
                    <Form.Item
                      label="CVC"
                      name="cvc"
                      rules={[
                        {
                          required: true,
                          message: "Please input CVC!",
                        },
                      ]}
                    >
                      {/* <Input
                        size="large"
                        placeholder="1234"
                        className="web-input"
                        onChange={(e) => handleCardPaymentDetails('CVC', e.target.value)}
                        value={card.CVC}
                        maxLength={3}
                      /> */}
                      <CardCvcElement 
                        options={elementOptions} 
                        onChange={(event) => handleChange('cardCvc', event)}
                        />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            {/* <Image
              src={ImageUrl("question.png")}
              preview={false}
              width={80}
              height={80}
            />
            <Typography.Title level={4} style={{ fontSize: "25px" }}>
              {selectedUser?.status}
            </Typography.Title>
            <Typography.Text style={{ fontSize: 16 }}>
            Do You Want To  {selectedUser?.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"} This User?
            </Typography.Text> */}
          </Modal>

        </>  
      )
    }
    </div>
  );
};

export default JumpDetails;
