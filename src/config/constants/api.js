export const SITE_NAME = "DogDayCare Web";

const { NODE_ENV } = process.env
const { hostname } = window.location

const servers = {
  local: "http://localhost:3026",  
  customDev: "https://react.customdev.solutions:3026",
  live: "https://grocost.app:3025"
}

var URL;
if (NODE_ENV === "production" && hostname === "react.customdev.solutions") URL = servers.customDev
else if (NODE_ENV === "production" && hostname === "grocost.app") URL = servers.live
else URL = servers.local

export const BASE_URL = URL + "/api/";
export const UPLOADS_URL = URL + "/";
export const UPLOADS_URL2 = URL + "/";
export const SOCKET_URL = URL;


export const AUTH = {
  register: "user/auth/register",
  login : "user/auth/signin",
  emailCode: "user/auth/emailVerificationCode",
  verifyCode: "user/auth/verifyRecoverCode",
  resetPassword: "user/auth/resetPassword",
};



export const BOOKING = {
  create: "user/auth/booking/create",
  userbooking : "user/auth/booking/user",
  userbookingByid : "user/auth/booking/user/",
  bookingRating : "user/auth/booking/reviews/get/",
  createReview : "user/auth/booking/review/create",
  filterbooking : "user/auth/booking/filter"
}

export const CHAT = {
  search : "user/auth/chat/search/",
  getUsers : "user/auth/chat/getAllUser",
  createGroupChat : "user/auth/chat/group/create", 
  groupChatlist : "user/auth/chat/group/chatlist/",
  groupMessages : "user/auth/chat/groupchat/"
}

export const QUERY = {
  create : "user/auth/query/create"
}

export const REPORT = {
  getAll : "admin/auth/reports/get"
}

export const ATTENDANCE = {
  getAll : "admin/auth/attendance/get"
}

export const LEAVE = {
  getallEmployeeLeave : "admin/auth/leave/get",
  getallEmployeeLeavesData : "admin/auth/leave/leavesData/",
  adminleavesApproval : "admin/auth/leave/status/"
}

export const VERIFICATION = {
  getPackage:"verification-package/list-package",
  updatePackage:"verification-package/create-package-new",
  verifyAccount:"verification-package/verify-user"
}


export const PLANS = {
  getAllPlans: "subscription/logs",
  getPlanById:"subscription/planDetails/",
  updatePlan:"subscription/editPlan/",
  addPlan:"subscription/createPlan",
  deletePlan: "subscription/deletePlan/"
};


export const ADMIN = {
  getStats: "admin/dashboardData",
  getSubscriptionChart: "admin/getEarningChart",
  // getUsersChart: "admin/getUsersChart",
  getAllUsers: "user/getUsers",
  getUserById: "user/getUser/",
  toggleStatus: "user/toggleStatus/", 
  // deleteUser: "/admin/user/deleteUser/",
};

export const USER = {
  userProfile : "user/auth/userprofile",
  updateProfile: "user/auth/update",
  changePassword: "user/auth/changepassword"
};

export const PETS = {
  getAllPetsForUser : "user/auth/mypets",
  getOnePet : "user/auth/pets/get/",
  createPet : "user/auth/dogprofile"
}

export const USERS = {
  // get: "/users/admin",
  getAllUsers: "admin/auth/user/get",
  searchUsers : "admin/auth/user/search/",
  statusChanged : "admin/auth/user/status/",
  getAllAdmins: "user/admin/getAdmins",
  getAdmin: "user/",
  updateAdmin: "user/updateAdmin/",
  // inactivateuser:"users/inactivateuser",
  getOne: "admin/auth/user/get/",
  toggleStatus: "user/toggleStatus/",
  // deleteUser: "/admin/user/deleteUser/",
};

export const EMPLOYEES = {
  addEmployee : "admin/auth/employee/create",
  getAllEmployee: "admin/auth/employee/get",
  searchEmployee : "admin/auth/employee/search/",
  statusChanged : "admin/auth/employee/status/",
  getbyid : "admin/auth/employee/get/",
  employeeBookings : "admin/auth/employee/",
  employeeAttendance : "admin/auth/attendance/get/"
}

export const SERVICES = {
  getAllServices: "user/auth/service/getall",
  getbyId : "user/auth/service/get/",
  searchServices : "admin/auth/service/filter/",
  deletereview : "emp/auth/service/review/delete/",
  addService : "admin/auth/service/create",
}

export const CONTENT = {
  getContent: "admin/auth/content/get",
  searchContent : "admin/auth/content/search/",
  getByid : "admin/auth/content/get/"
}

export const TASK = {
  getAllTask: "admin/auth/task/get",
  searchTask : "admin/auth/task/filter/",
  taskStatusChanged : "admin/auth/task/status/",
  getTaskId : "admin/auth/task/get/",
  createTask : "admin/auth/task/create"
}

export const STATES = {
  addState: "/state/addState",
  getAllStates: "/state/getAllStates",
  getStateById: "/state/getStateById/",
  updateState: "/state/updateState/",
  deleteState: "/state/deleteState/",
};

export const POSITIONS = {
  addPosition: "/position/addPosition",
  getAllPositions: "/position/getAllPositions",
  getPositionById: "/position/getPositionById/",
  updatePosition: "/position/updatePosition/",
  deletePosition: "/position/deletePosition/",
};

export const REPORTS = {
  getAllReports: "admin/report",
  getReportById:"admin/post/",
  getPost:"admin/post/",
  deletePost:"post/deleteReport/"
};  

export const REPRESENTATIVE = {
  addRepresentative: "/representative/addRepresentative",
  getAllRepresentatives: "/representative/getAllRepresentatives",
  getRepresentativeById: "/representative/getRepresentativeById/",
  updateRepresentative: "/representative/updateRepresentative/",
  deleteRepresentative: "/representative/deleteRepresentative/",
};

export const DONATIONS = {
  getAllDonations: "/donation/getAllDonations",
};

export const FEEDBACKS = {
  getAllFeedbacks: "contact",
  getFeedbackById:"contact/"
};


export const ORDERS = {
  getAllOrders: "/order/getAllOrders",
  updateOrder: "/order/updateOrder/",
  getOrderById: "/order/getOrderById/",
  deleteOrder: "/order/deleteOrder/",
};

export const CATEGORIES = {
  addCategory: "/category/addCategory",
  getAllCategories: "/category/getAllCategories",
  getCategoryById: "/category/getCategoryById/",
  toggleStatus: "/category/toggleActiveInActive",
  updateCategory: "/category/updateCategory/",
  deleteCategory: "/category/deleteCategory/",
};

export const NEWS = {
  addNews: "/news/addNews",
  getAllNews: "/news/getAllNews",
  getNewsById: "/news/getNewsById/",
  updateNews: "/news/updateNews/",
  deleteNews: "/news/deleteNews/",
};



export const EMOTIONS = {
  getAllEmotions: "Emoji/logs",
  addEmoji :"Emoji/create",
  getEmotionsById:"Emoji/getEmotionsById/"
};

export const HISTORIES = {
  addHistory: "/history/addHistory",
  getAllHistorys: "/history/getAllHistorys",
  getHistoryById: "/history/getHistoryById/",
  updateNews: "/history/updateHistory/",
  deleteHistory: "/history/deleteHistory/",
};

export const EVENT = {
  addEvent: "/event/addEvent",
  updateEvent: "/event/updateEvent/",
  getAllEvents: "/event/getAllEvents",
  getEventById: "/event/getEventById/",
  deleteEvent: "/event/deleteEvent/",
  toggleStatus: "/event/toggleStatus",
};

export const PRODUCT = {
  addProduct: "/product/addProduct",
  getAllProducts: "/product/getAllProducts",
  getProductById: "/product/getProductById/",
  deleteProduct: "/product/deleteProduct/",
  updateProduct: "/product/updateProduct/",
};

export const PAYMENT = {
  getAllOrderPayments: "payment",
  getOne: "/payment/",
};

export const NOTIFICATION = {
  getAllNotifications: "notification/getAllAdminNotifications",
  getAllUnreadNotifications: "notification/getAllUnreadAdminNotifications",
  getNotificationById: "notification/getNotificationById/",
  toggleNotification: "notification/toggleNotification/",
  sendPushNotification: "notification/send-push-notifications",
  getNotifications: "notification/getNotifications"
};

export const CONTENT_TYPE = {
  JSON: "application/json",
  FORM_DATA: "multipart/form-data",
};

export const AVAILABILITY = {
  setHours: "/availabilty/setHours",
  getMyAvailability: "/availabilty/getMyAvailability",
  deleteHours: "/availabilty/deleteHours/",
};
