import React, { useState , useEffect } from "react";
import {Layout, Col, Row, Button } from "antd";
import { useNavigate, useParams , useLocation } from "react-router";
import { useSelector , useDispatch } from "react-redux";
import { UPLOADS_URL } from "../../../config/constants/api";
import { mypetDate } from "../../../components/Data/data";
import profilepic from "../../../assets/profilepic.png";
import { extractDate } from "../../../config/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getOnePets } from "../../../redux/thunk/petThunk"
const MyPets = () => {
  const {token } = useSelector((state) => state?.user?.data);
  let UPLOADS_URLs = 'https://react.customdev.solutions:3026/'

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  var { id } = location.state
  
  
  var {  id  } = useParams();
   const [mypet, setMypet] = useState(mypetDate.find((item) => item.id == id));

  console.log( " Id ==> " , id , "UPLOADS_URL",UPLOADS_URL);


  const petProfileDetails = async () => {
    const data = {
      token ,
      id
    }

    let petDetails = await dispatch(getOnePets(data)).unwrap()
    if(petDetails?.petDetails){
      setMypet(petDetails?.petDetails)
    }
    console.log("petDetails",petDetails);
    
  }
  
  useEffect(() => {
    petProfileDetails()
  },[])

  return (
    <Layout
    className=""
    style={{ backgroundColor: "#fff" ,padding:"50px 0" }}
  >
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
                <h3 className="main-heading">My pet Profile</h3>
              </div>
            </Col>
          </Row>

          <div className="shop-page-main">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={24} lg={24} xl={24}>
                <div className="my-account-profile">
                  <section className="side-menu-parent">
                    <div className="about-us-section">
                      <div className="bg-parent">
                        <Row gutter={[16, 16]} align={"middle"}>
                          <Col md={24} lg={24} xl={24}>
                            <div className="pet-img-detail">
                            <img src={UPLOADS_URLs+mypet?.petImage} width={100} height={100} />
                              {/* <div>{UPLOADS_URLs+mypet?.petImage}</div> */}
                              <div>
                                <div>
                                  <h5 className="text-16">Name</h5>
                                  <p className="web-p">{mypet?.name}</p>
                                </div>
                                <div>
                                  <h5 className="text-16">Gender</h5>
                                  <p className="web-p">{mypet?.gender}</p>
                                </div>
                                <div>
                                  <h5 className="text-16">Date Of Birth</h5>
                                  <p className="web-p">{mypet?.DOB}</p>
                                </div>
                              </div>
                            </div>

                            <div className="pet-details-box">
                              <h4>Your Pet's Breed</h4>
                              <p>{mypet?.dogBread}</p>
                              <h4>Your Pet's Medical Condition</h4>
                              <img src={UPLOADS_URLs+mypet?.testReport} width={100} height={100} />
                              <img src={UPLOADS_URLs+mypet?.vaccinationReport} width={100} height={100} />
                              {/* <p>{}</p> */}
                              <h4>Your Pet's Dietary Preferences</h4>
                              <p>{mypet?.petFood?.brand.map(data => data +"  ")}</p>
                              <h4>Your Pet's Special Instructions</h4>
                              <p>{mypet?.specialPersonality}</p>
                            </div>
                            <Button
                                type="button"
                                htmlType=""
                                className="web-btn"
                                style={{
                                  cursor: "pointer",
                                }}
                                onClick={() => navigate("/editPetProfile")}
                              >
                                Edit Profile
                              </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </section>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </Layout>
  );
};

export default MyPets;
