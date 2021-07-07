var user = require("../controllers/User.controller");

module.exports = (app) => {
    app.post("/auth/registerUser", user.register);
    app.post("/auth/registerUserAdmin", user.registerUserAdmin);
    app.post("/user/allUsers", user.allUsers);
    app.post("/user/addUser", user.addUser);
    app.post("/user/updateUser", user.updateUser);
    app.post("/user/updateRealUser", user.updateRealUser);
    app.post("/user/updateUserOneItem", user.updateUserOneItem);
    app.post("/user/confirm-email", user.confirmEmail);
    app.post("/user/forgotPassword", user.forgotPassword);
    app.post("/user/savepasswordwithverify", user.savePasswordWithVerify);

    app.delete("/user/deleteUser/:id", user.deleteUser);

    app.post('/nurse/add', user.addNurse)
    app.post('/nurse/update', user.updateNurse)
    app.post('/nurse/delete', user.deleteNurse)
    app.post('/nurse/deletes', user.deletesNurse)
    app.post("/nurse/get",user.getAllNurse)

    app.post('/client/add', user.addClient)
    app.post('/client/update', user.updateClient)
    app.post('/client/delete', user.deleteClient)
    app.post('/client/deletes', user.deletesClient)
    app.post("/client/get",user.getAllClient)
};
