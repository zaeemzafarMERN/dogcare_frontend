import React, { useEffect, useState } from "react";
import {
  DatePicker,
  Form,
  Image,
  Input,
  Radio,
  message,
  Upload,
  Button,
  Select,
} from "antd";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { ImUserPlus } from "react-icons/im";
import Dogimg3 from "../../assets/dogimg3.png";
import Dogimg4 from "../../assets/dogimg4.png";
import Dogimg5 from "../../assets/dogimg5.png";
import selectpet from "../../assets/select-pet.png";
import selectpet2 from "../../assets/select-pet2.png";
import selectpet3 from "../../assets/select-pet3.png";
import ImgCrop from "antd-img-crop";
import { useDispatch } from 'react-redux'
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { addPetData } from '../../redux/slice/petSlice'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
import Modals from "../../../src/components/Modals";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const ConditionalBox = ({ value, setValue , setImageObject , setThirdObject , setSecondObject , setReleaseObject , PetProfileCompleted}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [secondUrl, setSecondUrl] = useState("");
  const [thirdUrl, setThirdUrl] = useState("");
  const [releaseUrl, setReleaseUrl] = useState("");
  const [type, setType] = useState("");
  // const [imageObject, setImageObject] = useState(null);
  // const [secondObject, setSecondObject] = useState(null);
  // const [thirdObject, setThirdObject] = useState(null);
 
  const [loading, setLoading] = React.useState(false);
  // const handleChangepro = (info) => {
  //   setLoading(true);
  //   getBase64(
  //     info?.fileList[info?.fileList?.length - 1]?.originFileObj,
  //     (url) => {
  //       setImageObject(
  //         info?.fileList[info?.fileList?.length - 1]?.originFileObj
  //       );
  //       setLoading(false);
  //       setImageUrl(url);
  //     }
  //   );
  // };


  

  const handleChangepro = (info, name) => { 
    // Log when the function is called
    console.log("Handle change function called");
  
    getBase64(
      info?.fileList[info?.fileList?.length - 1]?.originFileObj,
      (url) => {
        switch (name) {
          case "petImage":
            setImageObject(info?.fileList[info?.fileList?.length - 1]?.originFileObj);
            setImageUrl(url); // Update the image URL for "image"
            break;
          case "vaccinationReport":
            setSecondObject(info?.fileList[info?.fileList?.length - 1]?.originFileObj);
            setSecondUrl(url); // Update the image URL for "second"
            break;
          case "testReport":
            setThirdObject(info?.fileList[info?.fileList?.length - 1]?.originFileObj);
            setThirdUrl(url); // Update the image URL for "third"
            break;
          case "releaseLetter":
            setReleaseObject(info?.fileList[info?.fileList?.length - 1]?.originFileObj);
            setReleaseUrl(url); // Update the image URL for "release"
            break;
          default:
            console.warn("Unknown field name:", name);
        }
      }
    );
  };
  


  

  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
    setType(e.target.value);
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Invalid Uplaod, You can only upload image files!");
    }
    return isImage;
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload Image (900 x 600px recommended)
      </div>
    </button>
  );

  




  const [show1, setShow1] = useState(false);
  const handleShow1 = () => {
    setShow1(true);
  };

  const [step1 , Setstep1] = useState({
    name : "",
    number : "",
    name2 : "",
    number2 : ""

  })

  const [step2 , Setstep2] = useState({
    petType : "",
    gender : "",
    name : "",
    dogBread : "",
    DOB : "",
    natureSpayed : "",
  })

  const [step3 , Setstep3] = useState({
    color : "",
    weight : "",
    allergies : "",
    aggresion : "",
    bodyParts : "",
    specialPersonality : ""
  })
 
  const [step4 , Setstep4] = useState({
    vetname : '',
    number : "",
    address : "",

  })

  const [step5 , Setstep5] = useState({
    brand : "",
    breakfast : "",
    launch : "",
    dinner : "",
    foodWeight : "",
    supplements : "",
    medicine : ""
  })

  useEffect(() => {
    if(value === 2){
      let parent = []
      parent.push(step1)
      dispatch(addPetData(parent))
    }

  },[value === 2])


  useEffect(() => {
    if(value === 3){
      dispatch(addPetData(step2))
    }

  },[value === 3])

  useEffect(() => {
    if(value === 4){
      dispatch(addPetData(step3))
    }

  },[value === 4])
  

  useEffect(() => {
    if(value === 5){
      dispatch(addPetData(step4))
    }

  },[value === 5])

 

  return (
    <>
      <div className="conditional-box" style={{ textAlign: "center" }}>
        {value === 1 && (
          <div className="pet-form">
            <h6 className="f-24" style={{ padding: "10px 0" }}>
              More parents
            </h6>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
             
              autoComplete="off"
              style={{ padding: "15px 0" }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: false,
                    message: "Please input Name!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Name"
                  className="web-input" 
                  onChange={(e) => Setstep1((prev) => ({ ...prev , name : e.target.value}))}
                  value={step1.name}
                />
              </Form.Item>
              <Form.Item
                label="Number"
                name="number"
                rules={[
                  {
                    required: false,
                    message: "Please input Number",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Number"
                  className="web-input"
                  onChange={(e) => Setstep1((prev) => ({ ...prev , number : e.target.value}))}
                  value={step1.number}
                />
              </Form.Item>
              <Form.Item
                label="Name"
                name="name2"
                rules={[
                  {
                    required: false,
                    message: "Please input Name!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Name"
                  className="web-input"
                  onChange={(e) => Setstep1((prev) => ({ ...prev , name2 : e.target.value}))}
                  value={step1.name2}
                />
              </Form.Item>
              <Form.Item
                label="Number"
                name="number2"
                rules={[
                  {
                    required: false,
                    message: "Please input Number",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Number"
                  className="web-input"
                  onChange={(e) => Setstep1((prev) => ({ ...prev , number2 : e.target.value}))}
                  value={step1.number2}
                />
              </Form.Item>
            </Form>
          </div>
        )}
        {value === 2 && (
          <div className="pet-form">
            <h6 className="f-24" style={{ padding: "10px 0" }}>
            Enter Pet Details
            </h6>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
             
              style={{ padding: "15px 0" }}
            >
              <Form.Item
                label="Select Pet"
                name="SelectPet"
                rules={[
                  {
                    required: false,
                    message: "Please Select Pet",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep2((prev) => ({ ...prev , petType : value}))}
                  options={[
                    {
                      value: "dog",
                      label: "Dog",
                    },
                    {
                      value: "cat",
                      label: "Cat",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="Gender"
                rules={[
                  {
                    required: false,
                    message: "Please Select Gender",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep2((prev) => ({ ...prev , gender : value}))}
                  options={[
                    {
                      value: "MALE",
                      label: "Male",
                    },
                    {
                      value: "FEMALE",
                      label: "Female",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Pet Name"
                name="name"
                rules={[
                  {
                    required: false,
                    message: "Please input Pet Name!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Pet Name"
                  className="web-input"
                  onChange={(e) => Setstep2((prev) => ({ ...prev , name : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Dog Breed"
                name="dogBread"
                rules={[
                  {
                    required: false,
                    message: "Please input Dog Breed",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Dog Breed"
                  className="web-input"
                  onChange={(e) => Setstep2((prev) => ({ ...prev , dogBread : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Date Of Birth"
                name="DOB"
                rules={[
                  {
                    required: false,
                    message: "Please input Date Of Birth!",
                  },
                ]}
              >
                <DatePicker
                  className="web-input"
                  style={{ width: "100%" }}
                  onChange={(e) => Setstep2((prev) => ({ ...prev , DOB : value}))}
                  value={step2.DOB}
                />
              </Form.Item>
              <Form.Item
                label="Nurtured Spayed"
                name="natureSpayed"
                rules={[
                  {
                    required: false,
                    message: "Please Select Nurtured Spayed",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep2((prev) => ({ ...prev , natureSpayed : value}))}
                  options={[
                    {
                      value: "Traditional Spaying",
                      label: "Traditional Spaying",
                    },
                    {
                      value: "Laparoscopic Spaying",
                      label: "Laparoscopic Spaying",
                    },
                    {
                      value: "Non-Surgical Sterilization",
                      label: "Non-Surgical Sterilization",
                    },
                    {
                      value: "Holistic Post-Operative Care",
                      label: "Holistic Post-Operative Care",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Pet Picture"
                name="upload"
                rules={[
                  {
                    required: true,
                    message: "Please Upload Image!",
                  },
                ]}
              >
                <Upload
                  name="petImage"
                  showUploadList={false}
                  style={{ position: "relative" }}
                  onChange={(e) => {
                    handleChangepro(e, "petImage");
                  }}
                  beforeUpload={beforeUpload}
                >
                  {" "}
                  <div
                    style={{
                      height: "200px",
                      border: "1px dotted gray",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      borderRadius: "30px",
                    }}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                          maxWidth: "100%",
                          height: "170px",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </div>{" "}
                </Upload>
              </Form.Item>
            </Form>
          </div>
        )}
        {value === 3 && (
          <div className="pet-form">
            <h6 className="f-24" style={{ padding: "10px 0" }}>
              Enter More Details of Your Pet
            </h6>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
             
              style={{ padding: "15px 0" }}
            >
              <Form.Item
                label="Color"
                name="color"
                rules={[
                  {
                    required: false,
                    message: "Please input color!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Color"
                  className="web-input"
                  onChange={(e) => Setstep3((prev) => ({ ...prev , color : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Weight"
                name="weight"
                rules={[
                  {
                    required: false,
                    message: "Please input Weight",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Weight"
                  className="web-input"
                  onChange={(e) => Setstep3((prev) => ({ ...prev , weight : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Allergies"
                name="allergies"
                rules={[
                  {
                    required: false,
                    message: "Please select Allergies",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep3((prev) => ({ ...prev , allergies : value}))}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Aggression"
                name="aggresion"
                rules={[
                  {
                    required: false,
                    message: "Please select Aggression",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep3((prev) => ({ ...prev , aggresion : value}))}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Body Parts not to touch"
                name="bodyParts"
                rules={[
                  {
                    required: false,
                    message: "Please input Body Parts not to touch!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Body Parts not to touch"
                  className="web-input"
                  onChange={(e) => Setstep3((prev) => ({ ...prev , bodyParts : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Special Personality"
                name="specialPersonality"
                rules={[
                  {
                    required: false,
                    message: "Please select Special Personality",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep3((prev) => ({ ...prev , specialPersonality : value}))}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Vaccination"
                name="vaccinationReport"
                rules={[
                  {
                    required: true,
                    message: "Please Upload Image!",
                  },
                ]}
              >
                <Upload
                  name="image"
                  showUploadList={false}
                  style={{ position: "relative", width: "100%" }}
                  onChange={(e) => {
                    handleChangepro(e, "vaccinationReport");
                  }}
                  beforeUpload={beforeUpload}
                >
                  {" "}
                  <div
                    style={{
                      height: "200px",
                      border: "1px dotted gray",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      borderRadius: "30px",
                    }}
                  >
                    {secondUrl ? (
                      <img
                        src={secondUrl}
                        alt="avatar"
                        style={{
                          maxWidth: "100%",
                          height: "170px",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </div>{" "}
                </Upload>
              </Form.Item>
              <Form.Item
                label="Fecal Test Report"
                name="upload"
                rules={[
                  {
                    required: true,
                    message: "Please Upload Image!",
                  },
                ]}
              >
                <Upload
                  name="image"
                  showUploadList={false}
                  style={{ position: "relative" }}
                  onChange={(e) => {
                    handleChangepro(e, "testReport");
                  }}
                  beforeUpload={beforeUpload}
                >
                  {" "}
                  <div
                    style={{
                      height: "200px",
                      border: "1px dotted gray",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      borderRadius: "30px",
                    }}
                  >
                    {thirdUrl ? (
                      <img
                        src={thirdUrl}
                        alt="avatar"
                        style={{
                          maxWidth: "100%",
                          height: "170px",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </div>{" "}
                </Upload>
              </Form.Item>
            </Form>
          </div>
        )}
        {value === 4 && (
          <div className="pet-form">
            <h6 className="f-24" style={{ padding: "10px 0" }}>
              Enter Vet Details
            </h6>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
             
              style={{ padding: "15px 0" }}
            >
              <Form.Item
                label="Name"
                name="vetname"
                rules={[
                  {
                    required: false,
                    message: "Please input Name!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Name"
                  className="web-input"
                  onChange={(e) => Setstep4((prev) => ({ ...prev , vetname : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Number"
                name="number"
                rules={[
                  {
                    required: false,
                    message: "Please input Number",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Number"
                  className="web-input"
                  onChange={(e) => Setstep4((prev) => ({ ...prev , number : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: false,
                    message: "Please select Address",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Number"
                  className="web-input"
                  onChange={(e) => Setstep4((prev) => ({ ...prev , address : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Release Letter"
                name="upload"
                rules={[
                  {
                    required: true,
                    message: "Please Upload Image!",
                  },
                ]}
              >
                <Upload
                  name="image"
                  showUploadList={false}
                  style={{ position: "relative" }}
                  onChange={(e) => {
                    handleChangepro(e, "releaseLetter");
                  }}
                  beforeUpload={beforeUpload}
                >
                  {" "}
                  <div
                    style={{
                      height: "200px",
                      border: "1px dotted gray",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      borderRadius: "30px",
                    }}
                  >
                    {releaseUrl ? (
                      <img
                        src={releaseUrl}
                        alt="avatar"
                        style={{
                          maxWidth: "100%",
                          height: "170px",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </div>{" "}
                </Upload>
              </Form.Item>
            </Form>
          </div>
        )}
        {value === 5 && (
          <div className="pet-form">
            <h6 className="f-24" style={{ padding: "10px 0" }}>
              Enter Pet Food Details
            </h6>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
            
              autoComplete="off"
              style={{ padding: "15px 0" }}
            >
              <Form.Item
                label="Food Brand"
                name="brand"
                rules={[
                  {
                    required: false,
                    message: "Please input Food Brand!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Food Brand"
                  className="web-input"
                  onChange={(e) => Setstep5((prev) => ({ ...prev , brand : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Breakfast"
                name="breakfast"
                rules={[
                  {
                    required: false,
                    message: "Please select Breakfast",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep5((prev) => ({ ...prev , breakfast : value}))}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Lunch"
                name="launch"
                rules={[
                  {
                    required: false,
                    message: "Please select Lunch",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep5((prev) => ({ ...prev , launch : value}))}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Dinner"
                name="dinner"
                rules={[
                  {
                    required: false,
                    message: "Please select Dinner",
                  },
                ]}
              >
                <Select
                  defaultValue="select"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  onChange={(value) => Setstep5((prev) => ({ ...prev , dinner : value}))}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Weight"
                name="foodWeight"
                rules={[
                  {
                    required: false,
                    message: "Please input Supplements!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Supplements"
                  className="web-input"
                  onChange={(e) => Setstep5((prev) => ({ ...prev , foodWeight : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Supplements"
                name="supplements"
                rules={[
                  {
                    required: false,
                    message: "Please input Supplements!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Supplements"
                  className="web-input"
                  onChange={(e) => Setstep5((prev) => ({ ...prev , supplements : e.target.value}))}
                />
              </Form.Item>
              <Form.Item
                label="Medicines"
                name="medicine"
                rules={[
                  {
                    required: false,
                    message: "Please input Medicines!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Medicines"
                  className="web-input"
                  onChange={(e) => Setstep5((prev) => ({ ...prev , medicine : e.target.value}))}
                />
              </Form.Item>
              <Button
                type="button"
                htmlType="submit"
                className="web-btn"
                // onClick={() => navigate("/")}
                onClick={() => { 
                  handleShow1()
                  dispatch(addPetData(step5))
                }}
              >
                Create Pet Profile
              </Button>
            </Form>
          </div>
        )}
      </div>
      <Modals
        centered
        open={show1}
        handleOk={() => {
          setShow1(false)
          
        }}
        handleCancel={() => setShow1(false)}
        title="Pet Added"
        text="Your pet's profile has been created"
        footer={[
          <Button
            key="submit"
            type=""
            className="web-btn"
            onClick={() => {
              
              setShow1(false);
              step1 &&
              step2 && 
              step3 && 
              step4 && 
              step5 && 
              PetProfileCompleted()
             
              
            }}
            style={{ textAlign: "center" }}
          >
            Okay
          </Button>,
          // <Button
          //   key="submit"
          //   type=""
          //   className="web-btn2"
          //   onClick={() => {
          //     setValue(1);
          //     setShow1(false);
          //   }}
          //   style={{ textAlign: "center" }}
          // >
          //   Add More Pet
          // </Button>,
        ]}
      />
    </>
  );
};

export default ConditionalBox;
