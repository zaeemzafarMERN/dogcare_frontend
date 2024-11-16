import { useEffect, useRef, useState } from "react";
import {
  Col,
  Row,
  Card,
  Checkbox,
  Rate,
  Typography,
  Button,
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
import dayjs from "dayjs";
import {
  FaArrowLeftLong,
  FaLocationDot,
  FaParachuteBox,
} from "react-icons/fa6";
import { serviceData, reviews } from "../../../components/Data/data";
import { MdSunny } from "react-icons/md";
import Slider from "react-slick";
import { CalendarFilled, ClockCircleFilled } from "@ant-design/icons";
// const { Meta } = Card;
const { Title } = Typography;

const JumpDetails = () => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const location = useLocation();
  // const id = location?.state?.id;
  const { data } = location?.state
    const imageURL = `https://react.customdev.solutions:3026/`

  console.log("fdddd" , data)

  const slider1 = useRef(null);
  const slider2 = useRef(null);
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const navigate = useNavigate();

  // const [service, setService] = useState(
  //   serviceData.find((item) => item.id == id)
  // );

  // console.log(id);
  const sliderSettings = {
    arrows: false,
    // other settings...
  };
  const sliderSettings2 = {
    // arrows: false,
    // style: {
    //   margin: "20px",
    // },
  };
  //   const onChange = (date, dateString) => {
  //     console.log(date, dateString);
  //   };
  // const PickerWithType = ({ type, onChange }) => {
  //   if (type === "time") return <TimePicker onChange={onChange} />;
  //   if (type === "date") return <DatePicker onChange={onChange} />;
  //   return <DatePicker picker={type} onChange={onChange} />;
  // };


  const { Option } = Select;
  const [type, setType] = useState("time");
  const { TextArea } = Input;
  const [value, setValue] = useState(1);
  const [customvalue, setcustomvalue] = useState(0);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const FormatTime = (value) => {
    let dates = Object.values(value).find(data => data instanceof Date)
    return dates?.toTimeString()?.split(' ')?.shift()
  }

  const CalculateHours = (startDate, fromTime, endDate, toTime) => {
     const fromDateTime = new Date(`${new Date(startDate)?.toISOString()?.split('T')[0]}T${new Date(fromTime?.$d)?.toTimeString()?.split(' ')[0]}`);

    // // Combine end date and to time into a single Date object
     const toDateTime = new Date(`${new Date(endDate)?.toISOString()?.split('T')[0]}T${new Date(toTime?.$d)?.toTimeString()?.split(' ')[0]}`);

    // // Calculate the difference in milliseconds
    const differenceInMilliseconds = toDateTime - fromDateTime;

    // Convert milliseconds to hours
    const millisecondsInAnHour = 1000 * 60 * 60;
    const differenceInHours = differenceInMilliseconds / millisecondsInAnHour;
    // Return the calculated hours with one decimal point precision
    return Number(differenceInHours.toFixed(1));
};

  

  const apiPayload = {
    date : new Date(data?.dateS),
    enddateS : new Date(data?.enddateS),
    from : FormatTime(data?.fromtime),
    to : FormatTime(data?.totime),
    additionalComments : data?.addDesc,
    serviceId : data?.service?._id,
    tipAmount : value === "custom" ? customvalue : value,
    total : value === "custom" ? CalculateHours(data?.dateS , data?.fromtime , data?.enddateS , data?.totime) * (data?.service?.chargesPerHour) + Number(customvalue) : CalculateHours(data?.dateS , data?.fromtime , data?.enddateS , data?.totime) * data?.service?.chargesPerHour + value  
  }

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
                <h3 className="main-heading">Checkout</h3>
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col lg={23}>
              <Card className="details-card">
                <Row align="" gutter={16}>
                  <Col lg={10}>
                    <div
                      className="one-product"
                      style={{ paddingRight: "30px" }}
                    >
                      <div className="search-img">
                        <div>
                          {/* <span>{service?.pic}</span> */}
                          <img src={imageURL+data?.service?.serviceImage} width={100} height={100} />
                        </div>
                        <div className="rating-box">
                          <Rate
                          value={data?.service?.totalRating}
                            allowHalf
                            // defaultValue={service?.rating}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={14}>
                    <div className="room-details">
                      <div>
                        <h4 className="text-26">{data?.service?.title}</h4>
                        <div className="jump-inner-detail">
                          <div>
                            <p>
                              <ClockCircleFilled /> { FormatTime(data?.fromtime) + "  -  " + FormatTime(data?.totime) }
                            </p>
                          </div>
                          <div>
                            <p>
                              {/* <FaLocationDot /> {service?.loctaion} */}
                            </p>
                          </div>
                        </div>
                        <div className="jump-inner-detail">
                          <div>
                            <p>
                              <CalendarFilled /> { new Date(data?.dateS).toDateString()  + " " + new Date(data?.enddateS).toDateString()}
                            </p>
                          </div>
                          <div>
                            <p>
                              {/* <FaLocationDot /> {service?.loctaion} */}
                            </p>
                          </div>
                        </div>
                        <Divider dashed />
                        <h6 className="booking-card-price">${data?.service?.chargesPerHour}</h6>
                        <h5 className="heading-18">Additional Comments</h5>
                        <p className="web-p">{data?.addDesc}</p>
                      </div>
                    </div>

                    <div className="search-img-box-right">
                      <h5 className="heading-18">
                        Would you like to add some tip amount for our employee?
                      </h5>
                      <Radio.Group
                        className="yellow-radio"
                        onChange={onChange}
                        value={value}
                      >
                        <Radio value={10}>$ 10.00</Radio>
                        <Radio value={20}>$ 20.00</Radio>
                        <Radio value={30}>$ 30.00</Radio>
                        <Radio value={40}>$ 40.00</Radio>
                        <Radio value={"custom"}>Choose Custom Tip</Radio>
                      </Radio.Group>
                    </div>

                    <div class="checkout-pay-details">
                    {
                      value === "custom" &&
                      (
                        <>
                          <Input 
                            className="web-input" 
                            placeholder="Enter Amount" 
                            onChange={(e) => setcustomvalue(e.target.value)} 
                            value={customvalue} 
                            type="number"                               
                            />
                        </>
                      )
                    }
                      {console.log("ddd",data)
                      }
                      <div class="price-summary-detail">
                        <p>Total Hour</p>
                        <p>{CalculateHours(data?.dateS , data?.fromtime , data?.enddateS , data?.totime)}</p>
                      </div>
                      <div class="price-summary-detail">
                        <p>Tip Amount</p>
                        <p>${value === "custom" ? customvalue : value} </p>
                      </div>
                      <div class="price-summary-detail">
                        <p>Total Payable</p>
                        <p>${value === "custom" ? CalculateHours(data?.dateS , data?.fromtime , data?.enddateS , data?.totime) * (data?.service?.chargesPerHour) + Number(customvalue) : CalculateHours(data?.dateS , data?.fromtime , data?.enddateS , data?.totime) * data?.service?.chargesPerHour + value  }</p>
                      </div>
                    </div>

                    <div>
                      <Button
                        type=""
                        className="web-btn"
                       onClick={() => navigate("/checkout2" , { state: apiPayload})}
                      >
                        Proceed to pAy
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default JumpDetails;
