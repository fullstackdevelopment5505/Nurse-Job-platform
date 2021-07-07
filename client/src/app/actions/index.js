import http from "./http-common";
const configFormData = {     
    headers: { 'content-type': 'multipart/form-data' }
}
export const register = (userData) => {
    return http.post("/auth/registerUser", userData);
}

export const login = (userData) => {
    console.log('---  axios login ---')
    console.log(http.baseURL)
    return http.post('/auth/login',userData);
}
export const userlogin = (userData) => {
    return http.post('/auth/userlogin',userData);
}
export const logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");

    window.location = "/";
}

export const allUsers = () => {
    return http.post("/user/allUsers");
}

export const addUser = (userData) => {
    return http.post("/user/addUser", userData);
}

export const registerUserAdmin = (userData) => {
    return http.post("/auth/registerUserAdmin", userData);
}

export const updateUser = (userData) => {
    return http.post("/user/updateUser", userData);
}

export const updateRealUser = (userData) => {
    return http.post("/user/updateRealUser", userData);
}

export const updateUserOneItem = (userData) => {
    return http.post("/user/updateUserOneItem", userData);
}

export const deleteUser = (id) => {
    return http.delete(`/user/deleteUser/${id}`);
}

export const allActivities = () => {
    return http.post("/activity/allActivities");
}

export const allShortCuts = () => {
    return http.post("/shortcut/allShortCuts");
}

export const addShortCut = (shortcut) => {
    return http.post("/shortcut/addShortCut", shortcut);
}

export const updateShortCut = (shortcut) => {
    return http.post("/shortcut/updateShortCut", shortcut);
}

export const deleteShortCut = (id) => {
    return http.delete(`/shortcut/deleteShortCut/${id}`);
}

export const fileUpload = (files) => {
    return http.post("/upload/fileUpload", files, configFormData);
}

export const updatePageLink = (pageIndex, content) => {
    return http.post("/pageLink/updatePageLink", {pageIndex: pageIndex, content: content});
}

export const allPageLinks = () => {
    return http.post("/pageLink/allPageLinks");
}

export const updateAdmin = (adminObj) => {
    return http.post("/auth/updateAdmin", adminObj, configFormData);
}

export const updateAdminAvatar = (adminObj) => {
    return http.post("/upload/updateAdminAvatar", adminObj, configFormData);
}

export const updateBannerImage = (bannerObj) => {
    return http.post("/upload/updateBannerImage", bannerObj, configFormData);
}

export const allLedgers = () => {
    return http.post("/ledger/allLedgers");
}

export const addLedger = (ledgerData) => {
    return http.post("/ledger/addLedger", ledgerData);
}

export const updateLedger = (ledgerData) => {
    return http.post("/ledger/updateLedger", ledgerData);
}

export const deleteLedger = (id) => {
    return http.delete(`/ledger/deleteLedger/${id}`);
}

export const confirmPass = (data) => {
    return http.post('/user/confirm-email',data);
}

export const forgotPassword = (email) => {
    return http.post('/user/forgotPassword',{email:email});
}

export const passwordReset = (userData) => {
    return http.post('/user/savepasswordwithverify',userData);
}
// Category
export const addCategory = (userData) => {
    return http.post('/category/add',userData);
}
export const updateCategory = (userData) => {
    return http.post('/category/update',userData);
}
export const deleteCategory = (userData) => {
    return http.post('/category/delete',{id:userData});
}
export const deleteCategories = (userData) =>{
    return http.post('/category/deletes',{str:userData});

}
export const getAllCategory = () => {
    return http.post('/category/get',{});
}
// Nurse
export const addNurse = (userData) => {
    return http.post('/nurse/add',userData);
}
export const updateNurse = (userData) => {
    return http.post('/nurse/update',userData);
}
export const deleteNurse = (userData) => {
    return http.post('/nurse/delete',{id:userData});
}
export const deleteNurses = (userData) =>{
    return http.post('/nurse/deletes',{str:userData});
}
export const getAllNurse = () => {
    return http.post('/nurse/get',{});
}
// Client
export const addClient = (userData) => {
    console.log('---  axios addclient ---')
    return http.post('/client/add',userData);
}
export const updateClient = (userData) => {
    console.log('---  axios updateclient ---')
    return http.post('/client/update',userData);
}
export const deleteClient = (userData) => {
    console.log('---  axios deleteclient ---')
    return http.post('/client/delete',{id:userData});
}
export const deleteClients = (userData) =>{
    return http.post('/client/deletes',{str:userData});
}
export const getAllClient = () => {
    console.log('---  axios getAllclient ---')
    return http.post('/client/get',{});
}
// Password
export const passUpdate = (userData)=>{
  return http.post('/auth/pass',userData);
}

// Job
export const addJob = (userData) => {
    return http.post('/job/add',userData);
}
export const updateJob = (userData) => {
    return http.post('/job/update',userData);
}
export const updateJobStatus = (userData) =>{
    return http.post('/job/update-status',userData);

}
export const deleteJob = (userData) => {
    return http.post('/job/delete',{id:userData});
}
export const deleteJobs = (userData) =>{
    return http.post('/job/deletes',{str:userData});
}
export const getAllJob = () => {
    console.log('---  axios getAllclient ---')
    return http.post('/job/get',{});
}
export const getAllJobShow = () =>{
    return http.post('/job/getshow',{});
}
export const getSelJob = () => {
    console.log('---  axios getSelJob ---')
    return http.post('/job/getsel',{});
}
export const setAward = (userData) =>{
    return http.post('/job/award',userData)
}
// Bid
export const addBid = (userData) => {
    return http.post('/bid/add',userData);
}
export const updateBid = (userData) => {
    return http.post('/bid/update',userData);
}
export const deleteBid = (userData) => {
    return http.post('/bid/delete',{id:userData});
}
export const deleteBids = (userData) =>{
    return http.post('/bid/deletes',{str:userData});
}
export const getAllBid = () => {
    return http.post('/bid/getAll',{});
}
export const getBid = () => {
    return http.post('/bid/get',{});
}
// History
export const addHistory = (userData) => {
    return http.post('/history/add',userData);
}
export const updateHistory = (userData) => {
    return http.post('/history/update',userData);
}
export const deleteHistory = (userData) => {
    return http.post('/history/delete',{id:userData});
}
export const deleteHistorys = (userData) =>{
    return http.post('/history/deletes',{str:userData});
}
export const getAllHistory = () => {
    console.log('---  axios getAllclient ---')
    return http.post('/history/get',{});
}
// Chat 
export const addRoom =(userData) =>{
    return http.post('/room/add',userData);
}