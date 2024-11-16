// {/* <div className="conditional-box" style={{ textAlign: "center" }}>
//         {value === 1 && (
//           <div className="">
//             <h6 className="f-24" style={{ padding: "10px 0" }}>
//               What type of pet?
//             </h6>
//             <Radio.Group
//               className=" select-pet"
//               onChange={onChange}
//               defaultValue=""
//             >
//               <Radio.Button className="for-w" value="Cat">
//                 <Image
//                   preview={false}
//                   alt={"Failed to load image"}
//                   src={selectpet}
//                 />
//               </Radio.Button>
//               <Radio.Button className="for-w" value="Dog">
//                 <Image
//                   preview={false}
//                   alt={"Failed to load image"}
//                   src={selectpet2}
//                 />
//               </Radio.Button>
//             </Radio.Group>
//           </div>
//         )}
//         {value === 2 && (
//           <>
//             <div className="for-male-female">
//               <h6 className="f-24" style={{ padding: "10px 0" }}>
//                 Please introduce your {type} to us!
//               </h6>
//               <div>
//                 {type === "cat" ? (
//                   <Image
//                     preview={false}
//                     alt={"Failed to load image"}
//                     src={Dogimg3}
//                   />
//                 ) : (
//                   <Image
//                     preview={false}
//                     alt={"Failed to load image"}
//                     src={Dogimg4}
//                   />
//                 )}
//               </div>
//               <Radio.Group
//                 className="web-radio-btn-group"
//                 onChange={onChange}
//                 defaultValue=""
//               >
//                 <Radio.Button className="web-radio-btn" value="a">
//                   <PiUserCirclePlusFill style={{ marginRight: "10px" }} /> Male
//                 </Radio.Button>
//                 <Radio.Button className="web-radio-btn2" value="b">
//                   <ImUserPlus style={{ marginRight: "10px" }} /> Female
//                 </Radio.Button>
//               </Radio.Group>
//             </div>
//           </>
//         )}
//         {value === 3 && (
//           <div className="">
//             <h6 className="f-24" style={{ padding: "10px 0" }}>
//               Does Your {type} Have A Name
//             </h6>
//             <div>
//               <Image
//                 preview={false}
//                 alt={"Failed to load image"}
//                 src={Dogimg4}
//               />
//             </div>
//             <Form
//               layout="vertical"
//               name="basic"
//               initialValues={{
//                 remember: true,
//               }}
//               autoComplete="off"
//               style={{ padding: "15px 0" }}
//             >
//               <Form.Item
//                 label={`${type} Name`}
//                 name="Dog Name"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input your Dog Name!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Name Here..."
//                   className="web-input"
//                 />
//               </Form.Item>
//             </Form>
//           </div>
//         )}
//         {value === 4 && (
//           <div className="">
//             <h6 className="f-24" style={{ padding: "10px 0" }}>
//               When do you celebrate your {type}'s birthday?
//             </h6>
//             <div>
//               <Image
//                 preview={false}
//                 alt={"Failed to load image"}
//                 src={Dogimg5}
//               />
//             </div>
//             <Form
//               layout="vertical"
//               name="basic"
//               initialValues={{
//                 remember: true,
//               }}
//               autoComplete="off"
//               style={{ padding: "15px 0" }}
//             >
//               <Form.Item
//                 label="Date Of Birth"
//                 name="birth"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Date Of Birth!",
//                   },
//                 ]}
//               >
//                 <DatePicker
//                   className="web-input"
//                   style={{ width: "100%" }}
//                   onChange={onChange}
//                 />
//               </Form.Item>
//             </Form>
//           </div>
//         )}
//         {value === 5 && (
//           <div className="upload-img-step">
//             <h6 className="f-24" style={{ padding: "10px 0" }}>
//               Please upload your {type}'s picture!
//             </h6>
//             <Form
//               layout="vertical"
//               name="basic"
//               initialValues={{
//                 remember: true,
//               }}
//               autoComplete="off"
//               style={{ padding: "15px 0" }}
//             >
//               <Form.Item
//                 label="Upload Image"
//                 name="upload"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please Upload Image!",
//                   },
//                 ]}
//               >
//                 <ImgCrop rotationSlider>
//                   <Upload
//                     name="image"
//                     showUploadList={false}
//                     style={{ position: "relative" }}
//                     onChange={(e) => {
//                       handleChangepro(e, "image");
//                     }}
//                     beforeUpload={beforeUpload}
//                   >
//                     {" "}
//                     <div
//                       style={{
//                         height: "200px",
//                         border: "1px dotted gray",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         cursor: "pointer",
//                         borderRadius: "30px",
//                       }}
//                     >
//                       {imageUrl ? (
//                         <img
//                           src={imageUrl}
//                           alt="avatar"
//                           style={{
//                             maxWidth: "100%",
//                             height: "170px",
//                             objectPosition: "center",
//                             objectFit: "cover",
//                           }}
//                         />
//                       ) : (
//                         uploadButton
//                       )}
//                     </div>{" "}
//                   </Upload>
//                 </ImgCrop>
//               </Form.Item>
//               {/* <Button type="button" htmlType="submit" className="web-btn">
//                 CREATE MY DOG'S PROFILE
//               </Button> */}
//             </Form>
//           </div>
//         )}
//         {value === 6 && (
//           <div className="pet-form">
//             <h6 className="f-24" style={{ padding: "10px 0" }}>
//               Enter More Details of Your Pet
//             </h6>
//             <Form
//               layout="vertical"
//               name="basic"
//               initialValues={{
//                 remember: true,
//               }}
//               autoComplete="off"
//               style={{ padding: "15px 0" }}
//             >
//               <Form.Item
//                 label="Color"
//                 name="color"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input color!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Color"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Weight"
//                 name="weight"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Weight",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Weight"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Allergies"
//                 name="allergies"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please select Allergies",
//                   },
//                 ]}
//               >
//                 <Select
//                   defaultValue="select"
//                   style={{
//                     width: "100%",
//                     textAlign: "start",
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy",
//                     },
//                   ]}
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Aggression"
//                 name="aggression"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please select Aggression",
//                   },
//                 ]}
//               >
//                 <Select
//                   defaultValue="select"
//                   style={{
//                     width: "100%",
//                     textAlign: "start",
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy",
//                     },
//                   ]}
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Body Parts not to touch"
//                 name="nottotouch"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Body Parts not to touch!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Body Parts not to touch"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Special Personality"
//                 name="specialPersonality"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please select Special Personality",
//                   },
//                 ]}
//               >
//                 <Select
//                   defaultValue="select"
//                   style={{
//                     width: "100%",
//                     textAlign: "start",
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy",
//                     },
//                   ]}
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Vaccination"
//                 name="upload"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please Upload Image!",
//                   },
//                 ]}
//               >
//                 <Upload
//                   name="image"
//                   showUploadList={false}
//                   style={{ position: "relative", width: "100%" }}
//                   onChange={(e) => {
//                     handleChangepro(e, "second");
//                   }}
//                   beforeUpload={beforeUpload}
//                 >
//                   {" "}
//                   <div
//                     style={{
//                       height: "200px",
//                       border: "1px dotted gray",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       cursor: "pointer",
//                       borderRadius: "30px",
//                     }}
//                   >
//                     {secondUrl ? (
//                       <img
//                         src={secondUrl}
//                         alt="avatar"
//                         style={{
//                           maxWidth: "100%",
//                           height: "170px",
//                           objectPosition: "center",
//                           objectFit: "cover",
//                         }}
//                       />
//                     ) : (
//                       uploadButton
//                     )}
//                   </div>{" "}
//                 </Upload>
//               </Form.Item>
//               <Form.Item
//                 label="Tecal Test Report"
//                 name="upload"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please Upload Image!",
//                   },
//                 ]}
//               >
//                 <Upload
//                   name="image"
//                   showUploadList={false}
//                   style={{ position: "relative" }}
//                   onChange={(e) => {
//                     handleChangepro(e, "third");
//                   }}
//                   beforeUpload={beforeUpload}
//                 >
//                   {" "}
//                   <div
//                     style={{
//                       height: "200px",
//                       border: "1px dotted gray",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       cursor: "pointer",
//                       borderRadius: "30px",
//                     }}
//                   >
//                     {thirdUrl ? (
//                       <img
//                         src={thirdUrl}
//                         alt="avatar"
//                         style={{
//                           maxWidth: "100%",
//                           height: "170px",
//                           objectPosition: "center",
//                           objectFit: "cover",
//                         }}
//                       />
//                     ) : (
//                       uploadButton
//                     )}
//                   </div>{" "}
//                 </Upload>
//               </Form.Item>
//             </Form>
//           </div>
//         )}
//         {value === 7 && (
//           <div className="pet-form">
//             <h6 className="f-24" style={{ padding: "10px 0" }}>
//               More parents
//             </h6>
//             <Form
//               layout="vertical"
//               name="basic"
//               initialValues={{
//                 remember: true,
//               }}
//               autoComplete="off"
//               style={{ padding: "15px 0" }}
//             >
//               <Form.Item
//                 label="Name"
//                 name="name"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Name!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Name"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Number"
//                 name="number"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Number",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Number"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Color"
//                 name="Color"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Color!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Color"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Weight"
//                 name="weight"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Weight",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Weight"
//                   className="web-input"
//                 />
//               </Form.Item>
//             </Form>
//           </div>
//         )}
//         {value === 8 && (
//           <div className="pet-form">
//             <h6 className="f-24" style={{ padding: "10px 0" }}>
//               Enter Vet Details
//             </h6>
//             <Form
//               layout="vertical"
//               name="basic"
//               initialValues={{
//                 remember: true,
//               }}
//               autoComplete="off"
//               style={{ padding: "15px 0" }}
//             >
//               <Form.Item
//                 label="Name"
//                 name="name"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Name!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Name"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Number"
//                 name="number"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Number",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Number"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Address"
//                 name="address"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please select Address",
//                   },
//                 ]}
//               >
//                 <Select
//                   defaultValue="select"
//                   style={{
//                     width: "100%",
//                     textAlign: "start",
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy",
//                     },
//                   ]}
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Release Letter"
//                 name="upload"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please Upload Image!",
//                   },
//                 ]}
//               >
//                 <Upload
//                   name="image"
//                   showUploadList={false}
//                   style={{ position: "relative" }}
//                   onChange={(e) => {
//                     handleChangepro(e, "release");
//                   }}
//                   beforeUpload={beforeUpload}
//                 >
//                   {" "}
//                   <div
//                     style={{
//                       height: "200px",
//                       border: "1px dotted gray",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       cursor: "pointer",
//                       borderRadius: "30px",
//                     }}
//                   >
//                     {releaseUrl ? (
//                       <img
//                         src={releaseUrl}
//                         alt="avatar"
//                         style={{
//                           maxWidth: "100%",
//                           height: "170px",
//                           objectPosition: "center",
//                           objectFit: "cover",
//                         }}
//                       />
//                     ) : (
//                       uploadButton
//                     )}
//                   </div>{" "}
//                 </Upload>
//               </Form.Item>
//             </Form>
//           </div>
//         )}
//         {value === 9 && (
//           <div className="pet-form">
//             <h6 className="f-24" style={{ padding: "10px 0" }}>
//               Enter Pet Food Details
//             </h6>
//             <Form
//               layout="vertical"
//               name="basic"
//               initialValues={{
//                 remember: true,
//               }}
//               autoComplete="off"
//               style={{ padding: "15px 0" }}
//             >
//               <Form.Item
//                 label="Food Brand"
//                 name="Food"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Food Brand!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Food Brand"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Breakfast"
//                 name="breakfast"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please select Breakfast",
//                   },
//                 ]}
//               >
//                 <Select
//                   defaultValue="select"
//                   style={{
//                     width: "100%",
//                     textAlign: "start",
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy",
//                     },
//                   ]}
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Lunch"
//                 name="lunch"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please select Lunch",
//                   },
//                 ]}
//               >
//                 <Select
//                   defaultValue="select"
//                   style={{
//                     width: "100%",
//                     textAlign: "start",
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy",
//                     },
//                   ]}
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Dinner"
//                 name="dinner"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please select Dinner",
//                   },
//                 ]}
//               >
//                 <Select
//                   defaultValue="select"
//                   style={{
//                     width: "100%",
//                     textAlign: "start",
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy",
//                     },
//                   ]}
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Supplements"
//                 name="supplements"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Supplements!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Supplements"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Form.Item
//                 label="Medicines"
//                 name="medicines"
//                 rules={[
//                   {
//                     required: false,
//                     message: "Please input Medicines!",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Enter Medicines"
//                   className="web-input"
//                 />
//               </Form.Item>
//               <Button
//                 type="button"
//                 htmlType="submit"
//                 className="web-btn"
//                 // onClick={() => navigate("/")}
//                 onClick={handleShow1}
//               >
//                 Create Pet Profile
//               </Button>
//             </Form>
//           </div>
//         )}
//       </div> */}