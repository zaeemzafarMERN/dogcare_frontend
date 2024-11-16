import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Space, Card, Button, Rate } from "antd";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { serviceData } from "../../components/Data/data";
import { useDispatch } from 'react-redux'
import { GetAllServices } from '../../redux/thunk/serviceThunk'
// const { Meta } = Card;
const { Title } = Typography;
const dateConverter = (date) => {
  const convertedDate = new Date(date);
  let options = { month: "long", day: "numeric" };
  let monthAndDate = convertedDate.toLocaleDateString("en-US", options);
  return monthAndDate;
};
const UpcomingEvents = () => {
  const dispatch = useDispatch();
  const [serviceData , SetserviceData] = useState([])
  const navigate = useNavigate();
  const imageURL = `https://react.customdev.solutions:3026/`
  const { id } = useParams();
  const { Meta } = Card;

  const getAllService = async () => {

    let allServices = await dispatch(GetAllServices()).unwrap()
    if(allServices?.message){
      SetserviceData(allServices?.data?.allservices)
    }
    
    
    
  }

  useEffect(() => {
    getAllService()
  },[])


 // console.log("serviceData",serviceData)

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
                <h3 className="main-heading">Services</h3>
              </div>
            </Col>
          </Row>

          <div className="shop-page-main">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={24} lg={24} xl={24}>
                <Row gutter={16}>
                  {serviceData?.map((serviceData, index) => (
                    <Col xs={24} md={12} lg={6} key={index}>
                      <div>
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{
                            width: "100%",
                            padding: "8px",
                          }}
                        >
                          <div className="search-img">
                            <Card
                              className="card booking-card dropzone-card"
                              cover={<img src={imageURL+serviceData?.serviceImage} />}
                            >
                              <Meta title={serviceData?.title} />
                              <p className="web-p text">
                                {serviceData?.description}
                              </p>
                              <h6 className="booking-card-price">
                                ${serviceData?.chargesPerHour}
                              </h6>
                              <Button
                                type="link"
                                className="web-btn"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  width: "100%",
                                }}
                                onClick={() =>
                                  navigate("/service/" + serviceData._id , { state : serviceData})
                                }
                              >
                                View Details
                              </Button>
                            </Card>
                            <div className="rating-box">
                              <Rate
                              value={!serviceData.totalRating ? 0 : serviceData?.totalRating }
                                allowHalf
                                defaultValue={0}
                                disabled
                              />
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpcomingEvents;
