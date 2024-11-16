import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminAuthCheck from "../../components/AuthCheck/AdminAuthCheck";
import ClientLayout from "../../components/ClientLayout";
import Homepage from "../../views/homepage";
import WelcomeScreen from "../../views/welcomeScreen";
import CreateAccount from "../../views/createAccount";
import PetProfileCreation from "../../views/petProfileCreation";
import Login from "../../views/login";
import ForgetPassword1 from "../../views/forget-password-1";
import ForgetPassword2 from "../../views/forget-password-2";
import ForgetPassword3 from "../../views/forget-password-3";
import AboutUs from "../../views/aboutUs";
import Service from "../../views/service";
import ServiceDetails from "../../views/service/serviceDetails";
import Checkout from "../../views/service/checkout";
import Checkout2 from "../../views/service/checkout2";
import ContactUs from "../../views/contactUs";
import TermsConditions from "../../views/termsConditions";
import PrivacyPolicy from "../../views/privacyPolicy";
import ChatBox from "../../views/chatbox";
import ComingSoon from "../../views/comingSoon";
import PetProfile from "../../views/petProfile";
import PetDetails from "../../views/petProfile/petDetails";
import EditPetProfile from "../../views/petProfile/editPetProfile";
import MyBookings from "../../views/myBookings";
import MybookingsDetails from "../../views/myBookings/mybookingsDetails";
import Profile from "../../views/profile";
import EditProfile from "../../views/profile/editProfile";
import ChangePassword from "../../views/profile/changePassword";
import Chats from '../../views/chats'
import GroupChat from '../../views/groupChats'
import cursor from "../../assets/cursor.png";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

let stripePromise = loadStripe('pk_test_51PU7mXBRjHyJTsKflCt7St6pOwgDM0jeb6hiTihTFKvbIItjEeLVcCNYsEOXdcLdXMJ9MbLtnNwJ9J3Y33veXwCO00fhd2v0qN');

const MyRouter = () => {
  const [trail, setTrail] = useState([]);
  const [timer, setTimer] = useState(null);
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
  //     setTimer(setTimeout(() => setTrail([]), 100));
  //   };

  //   document.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, [trail, timer]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* {trail.map((position, index) => (
        <img
          key={index}
          className="cursor"
          src={cursor}
          alt="Cursor"
          style={{ left: position.x, top: position.y }}
        />
      ))} */}
      <Routes>
        <Route
          path="/"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
              bg={false}
              footer={false}
            >
              <Homepage />
            </ClientLayout>
          }
        />

        <Route path="/welcomeScreen" index element={<WelcomeScreen />} />

        <Route path="/createAccount" index element={<CreateAccount />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/forget-password-1" index element={<ForgetPassword1 />} />
        <Route path="/forget-password-2" index element={<ForgetPassword2 />} />
        <Route path="/forget-password-3" index element={<ForgetPassword3 />} />
        <Route
          path="/petProfileCreation"
          index
          element={<PetProfileCreation />}
        />
        <Route
          path="/aboutUs"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <AboutUs />
            </ClientLayout>
          }
        />
        <Route
          path="/service"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Service />
            </ClientLayout>
          }
        />
        <Route
          path="/service/:id"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ServiceDetails />
            </ClientLayout>
          }
        />
        <Route
          path="/checkout"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Checkout />
            </ClientLayout>
          }
        />
        <Route
          path="/checkout2"
          index
          element={
                  <ClientLayout
                  head={{ title: "Dashboard", description: "Some Description." }}
                  headerStyle={{ height: { base: "40px", md: 14 } }}
                    >
                      <Elements stripe={stripePromise} >
                            <Checkout2 />
                      </Elements>
                </ClientLayout>
           
          }
        />
        <Route
          path="/contactUs"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ContactUs />
            </ClientLayout>
          }
        />
        <Route
          path="/comingSoon"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ComingSoon />
            </ClientLayout>
          }
        />

        <Route
          path="/termsConditions"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <TermsConditions />
            </ClientLayout>
          }
        />
        <Route
          path="/privacyPolicy"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <PrivacyPolicy />
            </ClientLayout>
          }
        />
        <Route
          path="/petProfile"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <PetProfile />
            </ClientLayout>
          }
        />
        <Route
          path="/petProfile/:id"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <PetDetails />
            </ClientLayout>
          }
        />
        <Route
          path="/editPetProfile"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <EditPetProfile />
            </ClientLayout>
          }
        />
        <Route
          path="/changePassword"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ChangePassword />
            </ClientLayout>
          }
        />
        <Route
          path="/profile"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Profile />
            </ClientLayout>
          }
        />
        <Route
          path="/editProfile"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <EditProfile />
            </ClientLayout>
          }
        />
        <Route
          path="/myBookings"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <MyBookings />
            </ClientLayout>
          }
        />
        <Route
          path="/myBookings/:id"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <MybookingsDetails />
            </ClientLayout>
          }
        />
         <Route
              path="/chatbox"
              index
              element={
                // <UserAuthCheck>
                <ClientLayout
                  head={{
                    title: "Edit Content",
                    description: "Some Description.",
                  }}
                >
                  <ChatBox />
                </ClientLayout>
                // </UserAuthCheck>
              }
            />
            <Route
              path="/chat"
              index
              element={
                // <UserAuthCheck>
                <ClientLayout
                  head={{
                    title: "Edit Content",
                    description: "Some Description.",
                  }}
                >
                  <Chats />
                </ClientLayout>
                // </UserAuthCheck>
              }
            />

            <Route
              path="/groupchat"
              index
              element={
                // <UserAuthCheck>
                <ClientLayout
                  head={{
                    title: "Edit Content",
                    description: "Some Description.",
                  }}
                >
                  <GroupChat />
                </ClientLayout>
                // </UserAuthCheck>
              }
            />

      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
