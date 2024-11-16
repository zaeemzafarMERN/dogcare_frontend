import dropcardimg from "../../assets/dogimg2.png";
import reviewspro from "../../assets/reviews-pro.png";
import dog6 from "../../assets/dog6.png";
import mypetimg from "../../assets/mypetimg.png";

export const serviceProviderData = [
  {
    id: 1,
    title: "Pet Daycare",
    description:
      "Keep your furry baby happy and active with supervised play in our safe and stimulating environment.",
  },
  {
    id: 2,
    title: "Pet Boarding",
    description:
      "Spoil your pups and kitties with a comfortable staycation featuring playtime, cozy accommodations, and loving attention.",
  },
  // {
  //   id: 3,
  //   title: "Dog Grooming",
  //   description:
  //     "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since....",
  // },
];

export const serviceProviderData2 = [
  {
    id: 1,
    title: "Pet Grooming",
    description:
      "Pamper your pooch with a professional grooming session, leaving them looking and feeling their best. We groom them with a professional touch, offering breed-specific packages.",
  },
  {
    id: 2,
    title: "Pet Training",
    description:
      "Develop a strong bond with your pup through our expert-led training programs tailored to address any behavioral needs.",
  },
  // {
  //   id: 3,
  //   title: "Dog Grooming",
  //   description:
  //     "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since....",
  // },
];

export const reviews = [
  {
    id: 1,
    reviewsProfile: (
      <img
        src={reviewspro}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    reviewName: "Kylie M.",
    rating: 5,
    reviewDiscretion:
      "Ever since I started bringing Bailey to Happy Furbaby Inn, her separation anxiety has completely disappeared! She comes home tired and happy, and I love getting the picture updates throughout the day. It gives me such peace of mind knowing she's having a blast in a safe and loving environment. Happy Furbaby Inn is the best!",
  },
  {
    id: 2,
    reviewsProfile: (
      <img
        src={reviewspro}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    rating: 4,
    reviewName: "Kevin D",
    reviewDiscretion:
      "My senior pup, Charlie, used to be so nervous at other daycares. Happy Furbaby Inn has a separate area for older dogs, and it's made all the difference! Here, he can relax in his own quiet space when he needs to. Charlie absolutely loves going there. Thank you, Happy Furbaby Inn!",
  },
  {
    id: 3,
    reviewsProfile: (
      <img
        src={reviewspro}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    rating: 4,
    reviewName: "Nate H",
    reviewDiscretion:
      "We recently adopted two kittens, Luna and Leo, and were nervous about leaving them while we went on vacation. Happy Furbaby Inn's cat boarding service was perfect. We received daily picture updates of them playing, and they came home happy and purring. We wouldn't trust our kittens with anyone else! ",
  },
];

export const bookingDate = [
  {
    id: 1,
    pic: (
      <img
        src={dog6}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    statusText: "Completed",
    time: "12:00 PM",
    date: "29 Sep 2023",
    paidAmmont: "$80.00/Paid",
    title: "Bingo’s Pet Sitting",
    price: "80.00",
    loctaion: "ABC road, 123 street New York",
    comments:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged."
  },
  {
    id: 2,
    pic: (
      <img
        src={dog6}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    statusText: "Ongoing",
    time: "12:00 PM",
    date: "29 Sep 2023",
    paidAmmont: "$80.00/Paid",
    title: "Bingo’s Pet Sitting",
    price: "80.00",
    loctaion: "ABC road, 123 street New York",
  },
  {
    id: 3,
    pic: (
      <img
        src={dog6}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    statusText: "Upcoming",
    time: "12:00 PM",
    date: "29 Sep 2023",
    paidAmmont: "$80.00/Paid",
    title: "Bingo’s Pet Sitting",
    price: "80.00",
    loctaion: "ABC road, 123 street New York",
  },
  {
    id: 4,
    pic: (
      <img
        src={dog6}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    statusText: "Completed",
    time: "12:00 PM",
    date: "29 Sep 2023",
    paidAmmont: "$80.00/Paid",
    title: "Bingo’s Pet Sitting",
    price: "80.00",
    loctaion: "ABC road, 123 street New York",
  },
  {
    id: 5,
    pic: (
      <img
        src={dog6}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    statusText: "Ongoing",
    time: "12:00 PM",
    date: "29 Sep 2023",
    paidAmmont: "$80.00/Paid",
    title: "Bingo’s Pet Sitting",
    price: "80.00",
    loctaion: "ABC road, 123 street New York",
  },
  {
    id: 6,
    pic: (
      <img
        src={dog6}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    statusText: "Completed",
    time: "12:00 PM",
    date: "29 Sep 2023",
    paidAmmont: "$80.00/Paid",
    title: "Bingo’s Pet Sitting",
    price: "80.00",
    loctaion: "ABC road, 123 street New York",
  },
];

export const serviceData = [
  {
    id: 1,
    pic: (
      <img
        src={dropcardimg}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    title: "Pet Daycare",
    price: "35.00/Hourly",
    rating: 4,
    additionalDetails:
      "At Happy Furbaby Inn, playtime is personalized! We separate energetic pups and mellow mates in our connected indoor/outdoor play areas. Senior friends and tiny breeds have their own dedicated areas for extra pampering. We supervise playtime all day, keeping your pup safe and engaged. Nighttime brings peace of mind with on-site staff and picture updates every four hours. Let your furry friend experience a day of fun, socialization, and loving care with us!",
    time: "12:00 PM",
    date: "29 Sep 2023",
    checkIn: "Wed, May 25, 2023, From 2:00 PM",
    checkOut: "Fri, May 27, 2023, Until 11:00 AM",
    loctaion: "ABC road, 123 street New York",
    weather: "Sunny",
    jumptype: "Tandem",
  },
  {
    id: 2,
    pic: (
      <img
        src={dropcardimg}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    title: "Pet Grooming",
    price: "35.00/Hourly",
    rating: 4,
    additionalDetails:
      "Pamper your pooch & kitty at Happy Furbaby Inn! Our expert groomers provide a luxurious spa experience personalized to your pet's breed and needs. From soothing baths and gentle haircuts to nail trims and ear cleaning, we'll leave your furry friend looking and feeling their best. We use only pet-safe products and prioritize your pet's comfort throughout the process. Book your appointment today and let your furbaby shine!",
    time: "12:00 PM",
    date: "29 Sep 2023",
    checkIn: "Wed, May 25, 2023, From 2:00 PM",
    checkOut: "Fri, May 27, 2023, Until 11:00 AM",
    loctaion: "ABC road, 123 street New York",
    weather: "Sunny",
    jumptype: "Tandem",
  },
  {
    id: 3,
    pic: (
      <img
        src={dropcardimg}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    title: "Pet Training",
    price: "35.00/Hourly",
    rating: 4,
    additionalDetails:
      "Want to strengthen your bond with your furry buddy? Why not let them learn in the Happy Furbaby Inn? Our expert trainers use positive reinforcement for pups and playful techniques for kittens. We create customized programs for all ages and levels, from basic obedience to tackling behavioral concerns. Build a happy, well-behaved bond with your furry friend!",
    time: "12:00 PM",
    date: "29 Sep 2023",
    checkIn: "Wed, May 25, 2023, From 2:00 PM",
    checkOut: "Fri, May 27, 2023, Until 11:00 AM",
    loctaion: "ABC road, 123 street New York",
    weather: "Sunny",
    jumptype: "Tandem",
  },
  {
    id: 4,
    pic: (
      <img
        src={dropcardimg}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    title: "Pet Boarding",
    price: "35.00/Hourly",
    rating: 4,
    additionalDetails:
      "Need a loving place for your pet while you're away? Happy Furbaby Inn offers cozy accommodations and supervised playtime for both dogs and cats. Enjoy peace of mind with night staff on-site and picture updates every four hours. We offer comfy accommodations, playtime fun, and enrichment activities to keep your furbaby happy, healthy, and safe.",
    time: "12:00 PM",
    date: "29 Sep 2023",
    checkIn: "Wed, May 25, 2023, From 2:00 PM",
    checkOut: "Fri, May 27, 2023, Until 11:00 AM",
    loctaion: "ABC road, 123 street New York",
    weather: "Sunny",
    jumptype: "Tandem",
  },
  // {
  //   id: 5,
  //   pic: (
  //     <img
  //       src={dropcardimg}
  //       alt=""
  //       className="img-fluid"
  //       style={{ width: "100%" }}
  //     />
  //   ),
  //   title: "Pet Consultation",
  //   price: "35.00/Hourly",
  //   rating: 4,
  //   additionalDetails:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged.",
  //   time: "12:00 PM",
  //   date: "29 Sep 2023",
  //   checkIn: "Wed, May 25, 2023, From 2:00 PM",
  //   checkOut: "Fri, May 27, 2023, Until 11:00 AM",
  //   loctaion: "ABC road, 123 street New York",
  //   weather: "Sunny",
  //   jumptype: "Tandem",
  // },
  // {
  //   id: 6,
  //   pic: (
  //     <img
  //       src={dropcardimg}
  //       alt=""
  //       className="img-fluid"
  //       style={{ width: "100%" }}
  //     />
  //   ),
  //   title: "Pet Consultation",
  //   price: "35.00/Hourly",
  //   rating: 4,
  //   additionalDetails:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged.",
  //   time: "12:00 PM",
  //   date: "29 Sep 2023",
  //   checkIn: "Wed, May 25, 2023, From 2:00 PM",
  //   checkOut: "Fri, May 27, 2023, Until 11:00 AM",
  //   loctaion: "ABC road, 123 street New York",
  //   weather: "Sunny",
  //   jumptype: "Tandem",
  // },
  // {
  //   id: 7,
  //   pic: (
  //     <img
  //       src={dropcardimg}
  //       alt=""
  //       className="img-fluid"
  //       style={{ width: "100%" }}
  //     />
  //   ),
  //   title: "Pet Consultation",
  //   price: "35.00/Hourly",
  //   rating: 4,
  //   additionalDetails:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged.",
  //   time: "12:00 PM",
  //   date: "29 Sep 2023",
  //   checkIn: "Wed, May 25, 2023, From 2:00 PM",
  //   checkOut: "Fri, May 27, 2023, Until 11:00 AM",
  //   loctaion: "ABC road, 123 street New York",
  //   weather: "Sunny",
  //   jumptype: "Tandem",
  // },
  // {
  //   id: 8,
  //   pic: (
  //     <img
  //       src={dropcardimg}
  //       alt=""
  //       className="img-fluid"
  //       style={{ width: "100%" }}
  //     />
  //   ),
  //   title: "Pet Consultation",
  //   price: "35.00/Hourly",
  //   rating: 4,
  //   additionalDetails:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged.",
  //   time: "12:00 PM",
  //   date: "29 Sep 2023",
  //   checkIn: "Wed, May 25, 2023, From 2:00 PM",
  //   checkOut: "Fri, May 27, 2023, Until 11:00 AM",
  //   loctaion: "ABC road, 123 street New York",
  //   weather: "Sunny",
  //   jumptype: "Tandem",
  // },
];


export const mypetDate = [
  {
    id: 1,
    pic: (
      <img
        src={mypetimg}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    name: "abc",
    gender: "Male",
    dateOfBirth: "September 21, 2021",
    breed: "Golden Retriever",
    medicalCondition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
    dietaryPreferences:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
  },
  {
    id: 2,
    pic: (
      <img
        src={mypetimg}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    name: "abc",
    gender: "Male",
    dateOfBirth: "September 21, 2021",
    breed: "Golden Retriever",
    medicalCondition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
    dietaryPreferences:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
  },
  {
    id: 3,
    pic: (
      <img
        src={mypetimg}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />
    ),
    name: "abc",
    gender: "Male",
    dateOfBirth: "September 21, 2021",
    breed: "Golden Retriever",
    medicalCondition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
    dietaryPreferences:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.",
  },
];

// export const notifications = [
//   {
//     id: 1,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     date: "Dec 19, 2022",
//     time: "02:00 PM",
//   },
//   {
//     id: 2,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
//     date: "Dec 19, 2022",
//     time: "01:40 PM",
//   },
//   {
//     id: 3,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     date: "Dec 19, 2022",
//     time: "02:00 PM",
//   },
//   {
//     id: 4,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
//     date: "Dec 19, 2022",
//     time: "01:40 PM",
//   },
//   {
//     id: 5,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
//     date: "Dec 19, 2022",
//     time: "01:40 PM",
//   },
//   {
//     id: 6,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
//     date: "Dec 19, 2022",
//     time: "01:40 PM",
//   },
//   {
//     id: 7,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
//     date: "Dec 19, 2022",
//     time: "01:40 PM",
//   },
// ];

// export const profiledata = {
//   name: "Mark Carson",
//   profilePicUser: images.ProfilePic,
//   email: "marsonalbert@gmail.com",
//   contactNum: "+0987654320",
// };
