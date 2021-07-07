var payment = require("../controllers/Payment.controller");

module.exports = (app) => {
    app.post('/payment/add', payment.addPayment)
    app.post('/payment/token', payment.createToken)
    app.post('/payment/create', payment.createCustomer)
    app.post('/payment/verify', payment.verifySource)
    app.post('/payment/charge', payment.createCharge)
};
