import { useEffect, useRef, useState } from "react";
import { Col, Row, Card, Image, Badge, Typography, Divider,Rate,Input,Button } from "antd";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";
import { bookingDate } from "../../../components/Data/data";
import { CalendarFilled, ClockCircleFilled } from "@ant-design/icons";
import petTraining from "../../../assets/petTraining.png";
import petWalking from "../../../assets/petWalking.png";
import petGrooming from "../../../assets/petGrooming.png";
import vetConsultation from "../../../assets/vetConsultation.png";
import { userBookingbyid , bookingRatings  , createRating} from '../../../redux/thunk/bookingThunk';
import { useDispatch , useSelector } from 'react-redux'
const { Meta } = Card;
const { Text } = Typography;

const AsNavFor = () => {
    const googleKey = 'AIzaSyBXqV9bSEkfm5Wh7OQMj37V-n3F4AiyE40'
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const {token } = useSelector((state) => state?.user?.data);
  let dispatch = useDispatch()
  const imageURL = `http://localhost:3026/`
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState();
  const [review , setReview] = useState([])
 const UPLOADS_URLs = "https://react.customdev.solutions:3026/"
 const { Title } = Typography;
  const userBookingDetails = async () => {
    const data = {
      id,
      token
    }
    let bookingDetails = await dispatch(userBookingbyid(data)).unwrap()
    setBooking(bookingDetails?.userBooings);
    
  }
  const serviceid = booking?.map(data => data?.serviceId?._id)?.pop()
  const bookingDetails = async () => {

    const data = {
      id : serviceid,
      token
    }
    let serviceRatings = await dispatch(bookingRatings(data)).unwrap()
    setReview(serviceRatings?.taskreviews)
  }



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

  const [locations, setLocations] = useState('');

  useEffect(() => {
    userBookingDetails()
    
  },[])

  useEffect(() => {
    bookingDetails()
  },[booking])

  useEffect(() => {
    let loca = booking?.map(data => data?.serviceId?.location )?.pop()
    console.log("loca",loca);
    
   if (loca) {
     const fetchLocation = async () => {
       const locationResult = await GoogleLocation(loca?.coordinates);
       setLocations(locationResult);
     };
     
     fetchLocation();
 
   }
 }, [booking]);

 const [ratingData , setratingData] = useState({
  rating : 0,
  description : ""
 })

 const createReviewforBooking = async (e) => {
  const payload = {
    serviceId : serviceid,
    rating : ratingData.rating,
    description : ratingData.description
  }
  const data = {
    payload,
    token
  }

  let reviewCreated = await dispatch(createRating(data)).unwrap()
  if(reviewCreated.status){
    bookingDetails()
    setratingData({ rating: 0, description: "" });
  }
  
  
 }


 console.log("locations",locations);
 

  // const [booking, setBooking] = useState(
  //   bookingDate.find((item) => item.id == id)
  // );
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
                <h3 className="main-heading">Booking Details</h3>
              </div>
            </Col>
          </Row>
          {
            booking &&
            booking.length > 0 &&
            booking.map((book,i) => (
                <Row gutter={[16, 16]}>
                  <Col lg={24}>
                    <Card className="details-card">
                      <Row align="middle" gutter={[32, 32]}>
                        <Col lg={10}>
                          <div className="one-product">
                            <Badge.Ribbon
                              text={book?.status}
                              color={
                                book?.status === "Complete"
                                  ? "#00B31D"
                                  : book?.status === "Upcoming"
                                  ? "#DD9F00"
                                  : book?.status === "Ongoing"
                                  ? "#2D308B"
                                  : "red"
                              }
                              placement="start"
                            >
                              <div>
                              <img src={UPLOADS_URLs+book?.serviceId?.serviceImage} width={180} height={180} />
                              
                              </div>
                            </Badge.Ribbon>
                          </div>
                        </Col>
                        <Col lg={14}>
                          <h2 className="booking-details-name">{book?.serviceId?.title}</h2>
                          <div className="jump-inner-detail">
                            <div>
                              <p>
                                <ClockCircleFilled /> {book?.from + " " + book?.to}
                              </p>
                            </div>
                            <div>
                              <p>
                                <CalendarFilled /> {book?.date?.split(' ')[0]}
                              </p>
                            </div>

                            <div>
                              <p>
                                <FaLocationDot /> {locations}
                              </p>
                            </div>
                          </div>
                          <div
                            className="search-result-detail-btnbox"
                            style={{ textAlign: "start" }}
                          >
                            <h6 className="per-day-price">${book?.total}</h6>
                          </div>
                          <Divider dashed />
                          <div className="search-img-box-right additional-details">
                            <h5 className="heading-18">Service Details</h5>
                            <Image
                              preview={false}
                              alt={"Failed to load image"}
                              src={petTraining}
                              style={{ padding: "5px" }}
                            />
                            <Image
                              preview={false}
                              alt={"Failed to load image"}
                              src={petWalking}
                              style={{ padding: "5px" }}
                            />
                            <Image
                              preview={false}
                              alt={"Failed to load image"}
                              src={petGrooming}
                              style={{ padding: "5px" }}
                            />
                            <Image
                              preview={false}
                              alt={"Failed to load image"}
                              src={vetConsultation}
                              style={{ padding: "5px" }}
                            />
                          </div>
                          <div className="search-img-box-right additional-details">
                            <h5 className="heading-18">My Comments</h5>
                            <p className="web-p">{book?.additionalComments}</p>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
            ))
          }

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
                      {/* {item.rating.reduce((acc, data) => acc + data,0 ) / review.length || 0}<span>/5.0</span> */}
                    </Title>
                    <div className="pb-3">
                      {/* <Rate value={item.rating.reduce((acc, data) => acc + data,0 ) / review.length} allowHalf  disabled /> */}
                    </div>
                    {/* <a href="#_" className="blue-link">
                      {review.length} Reviews
                    </a> */}
                  </Col>

                </Row>
                
                      {
                        review &&
                        review.map((item,index) => (
                            
                              <div key={index} className="review-box">
                                <div className="for-media-object">
                                  <div className="flex-shrink-0">
                                    {/* <span>{reviews.reviewsProfile}</span> */}
                                    <img src={UPLOADS_URLs+item?.userImage} width={80} height={80} />
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <div className="star-18">
                                      <Rate
                                        value={item.rating}
                                        allowHalf
                                        defaultValue={item.rating}
                                        disabled
                                      />
                                      {/* <Rate allowHalf defaultValue={5} disabled /> */}
                                    </div>
                                    <h6>{item?.username }</h6>
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                              </div>
                        )) 
                      }

                {/* Write a Review */}
                {
                  booking &&
                  booking.map((data) =>
                    {
                      if(data.status === "Complete"){
                        return(
                      <>
                          <div className="mb-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="form-label">Write a Review</h6>
                              <div className="rate">
                                <Rate   
                                allowHalf 
                                onChange={(value) => setratingData((prev) => ({ ...prev , rating : value }))}

                                />
                              </div>
                            </div>
                            <Input.TextArea
                              className="form-control web-textarea"
                              rows={5}
                              onChange={(e) => setratingData((prev) => ({ ...prev , description : e.target.value }))}

                            />
                          </div>

                          <div className="text-center">
                            <Button type="primary" className="btn web-btn" onClick={createReviewforBooking}>
                              Post Review
                            </Button>
                          </div>
                      </>
                    )
                  }}) 
                }
              </div>
            </Col>
          </Row>
     
    </div>
  );
};

export default AsNavFor;
