import React,{useEffect , useState} from "react";
import {
  Layout,
  Col,
  Row,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Image,
  Badge,
  Space,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { mypetDate } from "../../../components/Data/data";
import { getAllPets } from '../../../redux/thunk/petThunk'
// import { Post } from "../../config/api/post";
// import { AUTH } from "../../config/constants/api";
// import { addUser } from "../../redux/slice/authSlice";
// import fbicn from "../../assets/facebook-icon.png";
// import gogoleicn from "../../assets/google-icon.png";

import swal from "sweetalert";
import { FaArrowLeftLong } from "react-icons/fa6";

function CreateAccount() {
  const {token } = useSelector((state) => state?.user?.data);
   const UPLOADS_URLs = "https://react.customdev.solutions:3026/"
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pets , Setpets] = useState([])

  const getAllPet = async () => {
    const data = {
      token
    }

    let allPets = await dispatch(getAllPets(data)).unwrap()
    Setpets(allPets?.userPets)
   
  }


  useEffect(() => {
    getAllPet()
  },[])


  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange2 = () => {
    swal("", "Congrats! You have been registered successfully", "success");
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { Search } = Input;
  const user = useSelector((state) => state.user.userData);
  // const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const props = {
  //   name: "file",
  //   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //   headers: {
  //     authorization: "authorization-text",
  //   },

  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

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
                        <Row
                          gutter={[16, 16]}
                          align={"middle"}
                          justify={"space-between"}
                        >
                          <Col md={24} lg={24} xl={24}>
                            <div>
                              {pets.map((mypetDate, index) => (
                                <span
                                  className="mypet-images"
                                  onClick={() =>
                                    navigate("/petProfile/" + mypetDate._id , { state :{id : mypetDate._id} })
                                  }
                                >
                                <img 
                                  src={UPLOADS_URLs+mypetDate.petImage}
                                />
                                  
                                </span>
                              ))}
                            </div>
                            <Button
                              type="button"
                              htmlType=""
                              className="web-btn"
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={() => navigate("/petProfileCreation")}
                            >
                              Add another
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
}

export default CreateAccount;
