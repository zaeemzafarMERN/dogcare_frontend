import React, { useState } from "react";
import {
  Layout,
  Col,
  Row,
  Button,
  Form,
  Input,
  Checkbox,
  Image,
  Radio,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import Logo from "../../assets/logo-header.png";
import Dogimg3 from "../../assets/dogimg3.png";
import swal from "sweetalert";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { ImUserPlus } from "react-icons/im";
import ConditionalBox from "../../components/ConditionalBox";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { createPet} from '../../redux/thunk/petThunk';
import { removePetData } from '../../redux/slice/petSlice'


function WelcomeScreen() {
  const {token } = useSelector((state) => state?.user?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const petDetails = useSelector((state) => state.pet.petdata)
  const [imageObject, setImageObject] = useState(null);
  const [secondObject, setSecondObject] = useState(null);
  const [thirdObject, setThirdObject] = useState(null);
  const [releaseObject, setReleaseObject] = useState(null);
  console.log("imageObject456",imageObject , "secondObject",secondObject , "thirdObject",thirdObject, "releaseObject",releaseObject);
  
  const [loading, setLoading] = React.useState(false);

  const PetProfileCompleted = async() => {
   
    const [parent , step1 = {}, step2 = {}, step3 = {}, step4 = {} ] = petDetails;

    const {DOB , dogBread , gender , name , natureSpayed , petType } = step1

    const {aggresion , allergies ,bodyParts , color , specialPersonality , weight } = step2

    const {vetname , address , number } = step3

    const {brand , breakfast , dinner , foodWeight , launch , medicine , supplements } = step4

    

    let formData = new FormData();
    
      formData.append('parents' , JSON.stringify(parent))
      formData.append('petType',petType)
      formData.append('gender',gender)
      formData.append('name',name)
      formData.append('dogBread',dogBread)
      formData.append('DOB',DOB)
      formData.append('natureSpayed',natureSpayed)
      formData.append('color',color)
      formData.append('weight',weight)
      formData.append('allergies',allergies)
      formData.append('aggresion',aggresion)
      formData.append('bodyParts',bodyParts)
      formData.append('specialPersonality',specialPersonality)
      formData.append('vetname',vetname)
      formData.append('number',number)
      formData.append('address',address)
      formData.append('brand',brand)
      formData.append('breakfast',breakfast)
      formData.append('launch',launch)
      formData.append('dinner',dinner)
      formData.append('foodWeight',foodWeight)
      formData.append('supplements',supplements)
      formData.append('medicine',medicine)
      if(imageObject) {
        formData.append('petImage' , imageObject)
      }
      if(secondObject) {
        formData.append('vaccinationReport' , secondObject)
      }
      if(thirdObject) {
        formData.append('testReport' , thirdObject)
      }
      if(releaseObject) {
        formData.append('releaseLetter' , releaseObject)
      }
    const data = {
      token,
      payload : formData
    }

   let petProfile = await dispatch(createPet(data)).unwrap()
    if(petProfile?.data?.status){
      dispatch(removePetData(petDetails))
      navigate("/petProfile")
    }
   
   

  }

  
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [value, setValue] = useState(1);
  const handleNext = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };
  const handleBack = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  return (
    <Layout
      className=""
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <div className="auth-banner">
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col xl={11} lg={16} md={22} sm={23} xs={23}>
            <div className="welcome-bg" style={{ textAlign: "center" }}>
              <div class="arrow-box">
                <FaArrowLeftLong className="arrow" onClick={handleBack} />
              </div>
              <Image
                preview={false}
                alt="Failed to load image"
                width={130}
                height={60}
                src={Logo}
              />
              <ConditionalBox   
                value={value} 
                setValue={setValue} 
                setImageObject={setImageObject} 
                setSecondObject={setSecondObject} 
                setThirdObject={setThirdObject} 
                setReleaseObject={setReleaseObject}
                PetProfileCompleted={PetProfileCompleted}
                />
              <div className="web-step">
                <h6 className="skip">Skip</h6>
                <div className="stepbbars">
                  <span className={"yellow-bar"}></span>
                  <span className={`${value>=2 ? 'yellow-bar':''}`}></span>
                  <span className={`${value>=3 ? 'yellow-bar':''}`}></span>
                  <span className={`${value>=4 ? 'yellow-bar':''}`}></span>
                  <span className={`${value>=5 ? 'yellow-bar':''}`}></span>
                  {/* <span className={`${value>=6 ? 'yellow-bar':''}`}></span>
                  <span className={`${value>=7 ? 'yellow-bar':''}`}></span>
                  <span className={`${value>=8 ? 'yellow-bar':''}`}></span>
                  <span className={`${value>=9 ? 'yellow-bar':''}`}></span> */}
                </div>
                <h6 
                className="next" 
                onClick={handleNext}
                >
                  Next 
                <MdKeyboardArrowRight />
                </h6>
              </div>
            </div>
          </Col>
          {/* <Button onClick={handleNext}>Next</Button> */}
        </Row>
      </div>
    </Layout>
  );
}

export default WelcomeScreen;
