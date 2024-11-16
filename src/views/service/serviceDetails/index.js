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
  Image,
} from "antd";
import dayjs from "dayjs";
import moment from 'moment';
import { useNavigate, useParams , useLocation } from "react-router";
import { useDispatch , useSelector } from 'react-redux'
import {
  FaArrowLeftLong,
  FaLocationDot,
  FaParachuteBox,
} from "react-icons/fa6";
import { serviceData, reviews } from "../../../components/Data/data";
import { GetOneServices } from '../../../redux/thunk/serviceThunk'
import { getAllPets } from '../../../redux/thunk/petThunk'
import { MdSunny } from "react-icons/md";
import Slider from "react-slick";
import Modals from "../../../components/Modals";
import selectpet from "../../../assets/select-pet.png";
import selectpet2 from "../../../assets/select-pet2.png";
import selectpet3 from "../../../assets/select-pet3.png";
// const { Meta } = Card;
const { Title } = Typography;

const onChange = () => {

}

const JumpDetails = () => {
  const googleKey = 'AIzaSyBXqV9bSEkfm5Wh7OQMj37V-n3F4AiyE40'
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [pets , Setpets] = useState([])
  const imageURL = `https://react.customdev.solutions:3026/`
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const dispatch = useDispatch()
  const {token} = useSelector((state) => state?.user?.data);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation()
  const { state  } = location

  console.log("state",state , "location",location );
  const [service, setService] = useState();
  
  const GoogleLocation = (data) => {
    
    let lat = data[0]
    let long = data[1]
     const apiKey = googleKey;
     let respo;
     const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`;
     return  fetch(apiUrl)
      .then(res => res.json())
      .then(resp => {
       const {status , results } = resp
       if(status === "OK" && results?.length > 0){
        return results?.map(data => data.formatted_address)?.shift()
       }
      })
  }

  const getServiceDetails = async () => {
    const data = {
      id,
      token,
    };
    
    let oneService = await dispatch(GetOneServices(data)).unwrap();
  
    if (oneService?.message) {
      let so = oneService?.data?.oneservices.map((item) => {
        const { review, ...others } = item;
  
        let processedReview;
        if (review && review.length > 0) {
          // Check if any object in review has keys
          const hasData = review.some(obj => Object.keys(obj).length > 0);
          processedReview = hasData ? review : []; // Use review if it has data; otherwise, return empty array
        } else {
          processedReview = []; // Return empty array if review is empty
        }
  
        return { review: processedReview, ...others };
      })?.pop();
  
      setService(so);
    }
  };
  
    
  


  const getAllPetsForUser = async () => {
    const data ={
      token
    }
    let getallPt = await dispatch(getAllPets(data)).unwrap()
    if(getallPt){
      Setpets(getallPt?.userPets)
    }
   
  }
 
  
  const [locations, setLocations] = useState('');

   useEffect(() => {
    if (service?.others?.location) {
      const fetchLocation = async () => {
        const locationResult = await GoogleLocation(service?.others?.location?.coordinates);
        setLocations(locationResult);
      };
      
      fetchLocation();
  
    }
  }, []);


  useEffect(() => {
    getServiceDetails()
    getAllPetsForUser()
  },[])
 


  

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


  const { Option } = Select;
  const [type, setType] = useState("time");
  const { TextArea } = Input;

  const [show1, setShow1] = useState(false);
  const [dateS , Setdate ] = useState(null)
  const [enddateS , Setenddate ] = useState(null)
  const [fromtime , Setfromtime ] = useState(null)
  const [totime , Settotime ] = useState(null)
  const [addDesc , SetaddDesc ] = useState("")

  const onChange12 = (date, dateString) => {
    if(dateString){
      Setdate(new Date(dateString))
    }else{
      Setdate(null)
    }
  };

  const onChange13 = (date, dateString) => {
    if(dateString){
      Setenddate(new Date(dateString))
    }else{
      Setenddate(null)
    }
  };

  const onChange2 = (date, dateString) => {
    Setfromtime(date)
  };

  const onChange3 = (date, dateString) => {
    Settotime(date)
   
  };

  const PickerWithType = ({ type, onChange , value }) => {
    if (type === "time") return <TimePicker onChange={onChange} value={value} format="HH:mm:ss" />;
    if (type === "date") return <DatePicker onChange={onChange}  value={value} />;
    return <DatePicker picker={type} onChange={onChange} value={value} />;
  };
  
  const handleShow1 = () => {
    setShow1(true);
  };

  const onFinish = (values) => {
    console.log("values",values);
    
  }


  const disabledDate = (current) => {
    // Get today's date
    const today = new Date();

    // Disable dates before today (including today)
    return current && current < today.setHours(0, 0, 0, 0);
  };

  const stateData = {
    dateS,
    enddateS,
    fromtime,
    totime,
    addDesc,
    service
  }

  const timeType1 = "time";
  const timeType2 = "time";
  
  console.log("stateData",stateData)

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
                <h3 className="main-heading">Services Details</h3>
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
                        <img src={imageURL+service?.serviceImage} />
                          <span></span>
                        </div>
                        <div className="rating-box">
                          <Rate
                            value={service?.totalRating}
                            allowHalf
                            defaultValue={0}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={14}>
                    <div className="room-details">
                      <div>
                        <h4 className="text-26">{service?.title}</h4>
                        <p className="web-p">
                          <FaLocationDot  />
                         {locations}
                        </p>
                        <h6 className="booking-card-price">${service?.chargesPerHour}</h6>
                        <p className="web-p">{service?.description}</p>
                      </div>
                    </div>
                    <Divider dashed />
                    <div className="search-img-box-right">
                      <Form
                        layout="vertical"
                        name="basic"
                        // labelCol={{
                        //   span: 8,
                        // }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        className="dates-inputs"
                      >
                        <Row
                          style={{ width: "100%", justifyContent: "center" }}
                          gutter={[16, 16]}
                        >
                          <Col lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                              label="Start Date"
                              name="SelectDate1"
                              labelCol={{
                                span: 24,
                              }}
                              rules={[
                                {
                                  required: true,
                                  message: "Select Date!",
                                },
                              ]}
                            >
                              <Space direction="vertical">
                                <DatePicker
                                  size="large"
                                  onChange={onChange12}
                                  value={dateS ? moment(dateS) : null}
                                  className="web-input"
                                  style={{
                                    width: "100%",
                                    paddingRight: "10px",
                                  }}
                                  disabledDate={disabledDate}
                                />
                              </Space>
                            </Form.Item>
                          </Col>
                          <Col lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                              label="Start Time"
                              name="fromtime"
                              rules={[
                                {
                                  required: true,
                                  message: "Select Date!",
                                },
                              ]}
                            >
                              <Space direction="vertical">
                                <PickerWithType
                                  type={timeType1}
                                  onChange={onChange2}
                                  value={fromtime ? dayjs(fromtime , 'HH:mm:ss') : null} 
                                  className="web-input"
                                  style={{
                                    width: "100%",
                                    paddingRight: "10px",
                                  }}
                                />
                              </Space>
                            </Form.Item>
                          </Col>
                          <Col lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                              label="End Date"
                              name="SelectDate1"
                              labelCol={{
                                span: 24,
                              }}
                              rules={[
                                {
                                  required: true,
                                  message: "Select Date!",
                                },
                              ]}
                            >
                              <Space direction="vertical">
                                <DatePicker
                                  size="large"
                                  onChange={onChange13}
                                  value={enddateS ? moment(enddateS) : null}
                                  className="web-input"
                                  style={{
                                    width: "100%",
                                    paddingRight: "10px",
                                  }}
                                  disabledDate={disabledDate}
                                />
                              </Space>
                            </Form.Item>
                          </Col>
                          <Col lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                              label="End Time"
                              name="totime"
                              rules={[
                                {
                                  required: true,
                                  message: "Select Date!",
                                },
                              ]}
                            >
                              <Space direction="vertical">
                                <PickerWithType
                                  type={timeType1}
                                  onChange={onChange3}
                                  value={totime ? dayjs(totime , 'HH:mm:ss') : null}
                                  className="web-input"
                                  style={{
                                    width: "100%",
                                    paddingRight: "10px",
                                  }}
                                />
                              </Space>
                            </Form.Item>
                          </Col>
                          <Col lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                              label="Additional Comment (Optional)"
                              name="SelectDate"
                              labelCol={{
                                span: 24,
                              }}
                              rules={[
                                {
                                  required: true,
                                  message: "Select Date!",
                                },
                              ]}
                            >
                              <TextArea
                                rows={4}
                                placeholder="Your Message Here...."
                                maxLength={600}
                                className="web-textarea "
                                onChange={(e) => SetaddDesc(e.target.value)}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    {
                      !token ?
                      (
                        <div>
                      <Button
                        type=""
                        className="web-btn"
                        onClick={() => {
                          navigate("/login")
                           }}
                      
                      >
                        Book Now
                      </Button>
                    </div>
                      )
                      :
                      (
                        <div>
                      <Button
                        type=""
                        className="web-btn"
                        onClick={() => {
                           handleShow1()
                           
                           }}
                      
                      >
                        Book Now
                      </Button>
                    </div>
                      )
                    }
                   
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row justify="center">
            <Col lg={23}>
              <div className="details-card">
                <Title level={3} className="text-24-bold pb-5">
                  Rating & Reviews
                </Title>

                <Row justify={"space-between"}>
                  <Col lg={12} xs={24}>
                    <Title level={2} className="rating-5">
                      {Number(service?.totalRating).toFixed(2) || 0}<span>/5.0</span>
                    </Title>
                    <div className="pb-3">
                      <Rate value={service?.totalRating} allowHalf defaultValue={5} disabled />
                    </div>
                    <a href="#_" className="blue-link">
                      {service?.review.length} Reviews
                    </a>
                  </Col>

                                 </Row>
                  {console.log(" === service ====>",service)}
                {/* Review boxes */}
                {service?.review?.map((reviews, index) => (
                  <div key={index} className="review-box">
                    <div className="for-media-object">
                      <div className="flex-shrink-0">
                        {/* <span>{reviews.reviewsProfile}</span> */}
                        <img src={imageURL+reviews?.userId?.image} width={80} height={80} />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="star-18">
                          <Rate
                            value={reviews.rating}
                            allowHalf
                            defaultValue={reviews.rating}
                            disabled
                          />
                          {/* <Rate allowHalf defaultValue={5} disabled /> */}
                        </div>
                        <h6>{reviews?.userId?.firstName + " "  + reviews?.userId?.lastName }</h6>
                        <p>{reviews.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Write a Review */}
                {/* {
                  !token ? 
                  null :
                  (
                    <>
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="form-label">Write a Review</h6>
                            <div className="rate">
                              <Rate allowHalf />
                            </div>
                          </div>
                          <Input.TextArea
                            className="form-control web-textarea"
                            rows={5}
                          />
                        </div>

                        <div className="text-center">
                          <Button type="primary" className="btn web-btn">
                            Post Review
                          </Button>
                        </div>
                    </>
                  )
                } */}


              </div>
            </Col>
          </Row>

          <Modals
            centered
            open={show1}
            handleOk={() => setShow1(false)}
            handleCancel={() => setShow1(false)}
            title="Select Pet"
            text={
              <div className="">
                <Radio.Group
                  className=" select-pet"
                  onChange={onChange}
                  defaultValue=""
                >
                {
                  pets?.map((pet,i) => (
                      <Radio.Button className="for-w" value={pet._id} key={pet._id+i}>
                        <Image
                          preview={false}
                          alt={"Failed to load image"}
                          src={imageURL+pet?.petImage}
                        />
                      </Radio.Button>
                  ))
                }
                </Radio.Group>
              </div>
            }
            footer={[
              <Button
                key="submit"
                type=""
                className="web-btn"
               onClick={() => 
               {

                navigate("/checkout", {state : { data : stateData}})

               }}
                style={{ textAlign: "center" }}
              >
                Proceed To Pay
              </Button>,
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default JumpDetails;
