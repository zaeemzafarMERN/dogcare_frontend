import { useEffect, useState } from "react";
import {
  Col,
  Row,
  Form,
  Input,
  Radio,
  Button,
  Space,
  Collapse,
  Card,
  List,
  Image,
  Drawer,
  Rate,
  Select,
  Typography,
  DatePicker,
  Badge,
} from "antd";
import { useNavigate } from "react-router";
import { MdMenu } from "react-icons/md";
import {
  CaretRightOutlined,
  ClockCircleFilled,
  CalendarFilled,
  StopOutlined,
} from "@ant-design/icons";
import { FaArrowLeftLong } from "react-icons/fa6";
import sorry from "../../../assets/sorry.png";
import { bookingDate } from "../../../components/Data/data";
import { useSelector  , useDispatch} from 'react-redux'
import {userBooking , filterBookings } from '../../../redux/thunk/bookingThunk'
import cursor from "../../../assets/cursor.png";
import BookingData from "./BookingData"
import FilterData from "./FilteredData"
const ServicePage = () => {
  // const [trail, setTrail] = useState([]);
  // const [timer, setTimer] = useState(null);
  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     const { clientX, clientY } = e;
  //     const newTrail = [...trail, { x: clientX, y: clientY }];
  //     setTrail(newTrail.slice(-3)); // Keeping only the last 10 positions

  //     // Clear the timer if it's already set
  //     if (timer) {
  //       clearTimeout(timer);
  //     }

  //     // Set a new timer to reset the trail after 1 second of mouse inactivity
  //     setTimer(setTimeout(() => setTrail([]), 500));
  //   };

  //   document.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, [trail, timer]);
  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     const { clientX, clientY } = e;
  //     const newTrail = [...trail, { x: clientX, y: clientY }];
  //     setTrail(newTrail.slice(-10)); // Keeping only the last 10 positions
  //   };

  //   document.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     document.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, [trail]);

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [filters , Setfilters] = useState([])
  const { token} = useSelector((state) => state.user.data);
  const [userBookingdata , SetuserBookingdata] = useState([])
  const myBookings = async () => {
    const data = {
      token
    }
   let userBookings = await dispatch(userBooking(data)).unwrap()
   SetuserBookingdata(userBookings?.userBooings) 
  }

  useEffect(() => {
    myBookings()
  },[])

  useEffect(() => {
    SetuserBookingdata(filters)
  },[filters])

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [categories, setCategories] = useState([
    "Completed",
    "Ongoing",
    "Upcomming",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { Meta } = Card;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [open, setOpen] = useState(false);
 
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [step2 , Setstep2] = useState({
    status : "",
    fromDate : "" , 
    toDate : ""
  })

  const onFinish =  async (values) => {
    const { status , toDate , fromDate } = values
    let payload = {}
    if(status && toDate && fromDate){
      payload = {
        status , 
        toDate :  toDate ? new Date(toDate).toISOString() : "" , 
        fromDate : fromDate ? new Date(fromDate).toISOString() : ""
      }
    }

    else if(toDate && fromDate){
      payload = {
        toDate :  toDate ? new Date(toDate).toISOString() : "" , 
        fromDate : fromDate ? new Date(fromDate).toISOString() : ""
      }
    }

    else if(status){
      payload = {
        status
      }
    }


    const data = {
     payload ,
     token
    }

    let filtersBooking = await dispatch(filterBookings(data)).unwrap()
    if(filtersBooking?.message){
      Setfilters(filtersBooking?.data?.userBooings)
    } 
  }
  const [form] = Form.useForm();

  const handleReset = () => {
    Setstep2({
      status: "",
      fromDate: null,
      toDate: null,
    });
    form.resetFields(); // Clear form fields
    Setfilters([])
    SetuserBookingdata([])
    myBookings();
  }


  console.log("=======>" , filters);
  
  

  const { Option } = Select;
const UPLOADS_URLs = "https://react.customdev.solutions:3026/"
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
                <h3 className="main-heading">My Bookings</h3>
              </div>
            </Col>
          </Row>
          <div className="shop-page-main">
            <Row gutter={[16, 16]}>
              <Col xs={0} md={10} lg={7} xl={6}>
                <div className="left-div">
                  <div className="filter-heading">
                    <p>Filter</p>
                  </div>
                  <div className="inner-filter-box filter-canvas">
                    {/* <label htmlFor="status" className="form-label">
                      Choose Status
                    </label>
                    <>
                      <Collapse
                        defaultActiveKey={["1"]}
                        expandIconPosition="end"
                        style={{ margin: "10px 0" }}
                        expandIcon={({ isActive }) => (
                          <CaretRightOutlined
                            style={{ color: "#6A6A6A", fontSize: "18px" }}
                            rotate={isActive ? 90 : 180}
                          />
                        )}
                        items={[
                          {
                            key: "1",
                            label: (
                              <span style={{ fontWeight: "bold" }}>
                                {selectedCategory}
                              </span>
                            ),
                            children: (
                              <List
                                size="small"
                                dataSource={categories}
                                renderItem={(item) => (
                                  <List.Item
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setSelectedCategory(item)}
                                  >
                                    <Typography.Text mark></Typography.Text>{" "}
                                    {item}
                                  </List.Item>
                                )}
                              />
                            ),
                          },
                        ]}
                      />
                    </> */}
                  
                    <Form
                      layout="vertical"
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                    >
                    <Form.Item
                        label="Choose Status"
                        name="status"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Select
                            defaultValue="select"
                            style={{
                              width: "100%",
                              textAlign: "start",
                            }}
                            value={step2.status}
                             onChange={(value) => Setstep2((prev) => ({ ...prev , status : value}))}
                            options={[
                              {
                                value: "Complete",
                                label: "Completed",
                              },
                              {
                                value: "On-Going",
                                label: "Ongoing",
                              },
                              {
                                value: "Upcoming",
                                label: "Upcoming",
                              },
                            ]}
                          />
                      </Form.Item>
                      <h6 className="sort-by">Sort By</h6>
                      <Form.Item
                        label="From"
                        name="fromDate"
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please input your username!",
                        //   },
                        // ]}
                      >
                        <DatePicker
                          className="form-control web-input pe-2"
                          id="fromDate"
                          style={{ width: "100%", paddingRight: "10px" }}
                          onChange={(value) => Setstep2((prev) => ({ ...prev , fromDate : value}))}
                          value={step2.fromDate}
                        />
                      </Form.Item>
                      <Form.Item
                        label="To"
                        name="toDate"
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please input your username!",
                        //   },
                        // ]}
                      >
                        <DatePicker
                          className="form-control web-input pe-2"
                          id="fromDate"
                          style={{ width: "100%", paddingRight: "10px" }}
                          onChange={(value) => Setstep2((prev) => ({ ...prev , toDate : value}))}
                          value={step2.toDate}
                        />
                      </Form.Item>
                        <Form.Item>
                            <div className="apply-btn">
                              <Button
                                style={{
                                  cursor: "pointer",
                                }}
                                className="web-btn"
                                htmlType="submit"
                              >
                                Apply
                              </Button>
                            </div>
                        </Form.Item>
                        <Form.Item>
                              <div className="clear-btn">
                                <Button
                                  style={{
                                    cursor: "pointer",
                                  }}
                                  onClick={handleReset}
                                  className=""
                                    htmlType="submit"
                                >
                                  Clear
                                </Button>
                              </div>
                        </Form.Item>
                    </Form>

                  </div>
                </div>
              </Col>

              <Col xs={24} md={0} lg={0} xl={0}>
                <>
                  <MdMenu
                    style={{ fontSize: 26, color: "#000" }}
                    onClick={showDrawer}
                  />
                  <Drawer
                    // title="Basic Drawer"
                    placement="right"
                    onClose={onClose}
                    open={open}
                  >
                    <div className="left-div">
                      <div className="filter-heading">
                        <p>Filters</p>
                      </div>
                      <div className="inner-filter-box filter-canvas">
                        <label htmlFor="status" className="form-label">
                          Choose Status
                        </label>
                        <>
                          <Collapse
                            defaultActiveKey={["1"]}
                            expandIconPosition="end"
                            style={{ margin: "10px 0" }}
                            expandIcon={({ isActive }) => (
                              <CaretRightOutlined
                                style={{ color: "#6A6A6A", fontSize: "18px" }}
                                rotate={isActive ? 90 : 180}
                              />
                            )}
                            items={[
                              {
                                key: "1",
                                label: (
                                  <span style={{ fontWeight: "bold" }}>
                                    {selectedCategory}
                                  </span>
                                ),
                                children: (
                                  <List
                                    size="small"
                                    dataSource={categories}
                                    renderItem={(item) => (
                                      <List.Item
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          setSelectedCategory(item)
                                        }
                                      >
                                        <Typography.Text mark></Typography.Text>{" "}
                                        {item}
                                      </List.Item>
                                    )}
                                  />
                                ),
                              },
                            ]}
                          />
                        </>
                        <h6 className="sort-by">Sort By</h6>
                        <Form
                          layout="vertical"
                          name="basic"
                          initialValues={{
                            remember: true,
                          }}
                        >
                          <Form.Item
                            label="From"
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <DatePicker
                              className="form-control web-input pe-2"
                              id="fromDate"
                              style={{ width: "100%", paddingRight: "10px" }}
                            />
                          </Form.Item>
                          <Form.Item
                            label="To"
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <DatePicker
                              className="form-control web-input pe-2"
                              id="fromDate"
                              style={{ width: "100%", paddingRight: "10px" }}
                            />
                          </Form.Item>
                        </Form>

                        <div className="apply-btn">
                          <Button
                            style={{
                              cursor: "pointer",
                            }}
                            className="web-btn"
                          >
                            Apply
                          </Button>
                        </div>

                        <div className="clear-btn">
                          <Button
                            style={{
                              cursor: "pointer",
                            }}
                            className=""
                           
                          >
                            Clear
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Drawer>
                </>
              </Col>

              

              <Col xs={24} md={14} lg={17} xl={18}>
                <Row gutter={16}>
                  {
                    userBookingdata.length > 0 ?
                    userBookingdata?.map((bookingDate, index) => (
                  
                    <BookingData 
                      bookingDate={bookingDate} 
                      index={index} 
                      UPLOADS_URLs={UPLOADS_URLs}  
                      navigate={navigate}
                      />
                  ))
                  : 
                  filters.length > 0 ?
                  filters.map((bookingDate , index) => (
                    <FilterData 
                      bookingDate={bookingDate} 
                      index={index} 
                      UPLOADS_URLs={UPLOADS_URLs} 
                      navigate={navigate} 

                      />
                  ))
                  : 
                  (
                    <>
                    <Col lg={8} >
                      <div>
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{
                            width: "100%",
                            padding: "8px",
                          }}
                        >
                              no Bookings founds
                        </Space>
                        </div>
                      </Col>

                      
                    </>
                  )
                  }
                </Row>

                {/* <Row gutter={16}>
                  {bookingDate.map((bookingDate, index) => (
                    <Col lg={8} key={index}>
                      <div>
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{
                            width: "100%",
                            padding: "8px",
                          }}
                        >
                          <Badge.Ribbon
                            text={bookingDate.statusText}
                            color={
                              bookingDate.statusText === "Completed"
                                ? "#00B31D"
                                : bookingDate.statusText === "Upcoming"
                                ? "#DD9F00"
                                : bookingDate.statusText === "Ongoing"
                                ? "#2D308B"
                                : "red"
                            }
                            placement="start"
                          >
                            <Card
                              className="booking-card"
                              cover={
                                <span className="booking-card-img">
                                  {bookingDate.pic}
                                </span>
                              }
                            >
                              <Meta
                                title={bookingDate.title}
                                description={
                                  <>
                                    <div className="booking-card-span">
                                      <span>
                                        <ClockCircleFilled /> {bookingDate.time}
                                      </span>
                                      <span>
                                        <CalendarFilled /> {bookingDate.date}
                                      </span>
                                    </div>
                                    <h6 className="booking-card-price">
                                      {bookingDate.paidAmmont}
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
                                        navigate(
                                          "/myBookings/" + bookingDate.id
                                        )
                                      }
                                    >
                                      View Details
                                    </Button>
                                  </>
                                }
                              />
                            </Card>
                          </Badge.Ribbon>
                        </Space>
                      </div>
                    </Col>
                  ))}
                </Row> */}
              </Col>


            </Row>
          </div>
          {/* <div className="sorry">
            <Image
              preview={false}
              alt={"Failed to load image"}
              src={sorry}
              style={{ padding: "5px" }}
            />
            <h5 className="f-28">No Records Found</h5>
            <Button
              type="link"
              className="web-btn"
              style={{
                margin:"10px 0"
              }}
              onClick={() => navigate("/service")}
            >
              BOOK A SERVICE NOW
            </Button>
          </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default ServicePage;
