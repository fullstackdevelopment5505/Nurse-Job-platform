var mongoose = require('mongoose');
const User = mongoose.model('User');
const Nurse = mongoose.model('Nurse');
const Client = mongoose.model('Client');
const Activity = mongoose.model('Activity');
const EmailConfirmToken = mongoose.model('EmailVerification');
const VerifiyToken = mongoose.model('Verification');
const nodemailer = require('nodemailer'); 
var Config = require('../config/config');

exports.register = async (req, res) =>  {

    let user = await User.findOne({ fullName: req.body.fullName });
    if(user) {
        return res.json({ success: false, errMessage: 'A user with this user name already exists.'});
    }
    
    user = await User.findOne({ email: req.body.email });
    if(user) {
        return res.json({ success: false, errMessage: 'A user with this email address already exists.'});
    }

    //Create new user and set password
    let newUser = new User(req.body);
    newUser.setPassword(req.body.password);
               
    var token = new EmailConfirmToken({
        email: req.body.email,
        token: crypto.randomBytes(16).toString("hex")
    });
    
    var resetUrl = Config.clientUrl + "/confirm-email?token="+token.token;

    token.save(function(err) {
        if (err) {
            return res.json({ success: false, errMessage: err.message});
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: Config.email,
                pass: Config.password
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        var mailOptions = {
            from: 'apitestt26@gmail.com',
            to: req.body.email,
            subject: 'Email Confirm Link',
            //You can use "html:" to send HTML email content. It's magic!
            html: `<h3>Hello ${req.body.fullName}</h3><br> <b>Please click on this link to continue filling out the application and submitting your documents.</b><br>${resetUrl}`,
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });              
    });

    newUser.save(async (err) => {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while new user registering."});
        } else {
            let token = newUser.generateJwt();
            res.json({success: true, role: 1, token: token, user: newUser});
        }
    }); 
};

exports.registerUserAdmin = async (req, res) =>  {

    let user = await User.findOne({ fullName: req.body.fullName });
    if(user) {
        return res.json({ success: false, errMessage: 'A user with this user name already exists.'});
    }
    
    user = await User.findOne({ email: req.body.email });
    if(user) {
        return res.json({ success: false, errMessage: 'A user with this email address already exists.'});
    }

    //Create new user and set password
    let newUser = new User(req.body);
    newUser.setPassword(req.body.password);
               
    var token = new EmailConfirmToken({
        email: req.body.email,
        token: crypto.randomBytes(16).toString("hex")
    });
    
    var resetUrl = Config.clientUrl + "/confirm-email?token="+token.token;

    token.save(function(err) {
        if (err) {
            return res.json({ success: false, errMessage: err.message});
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: Config.email,
                pass: Config.password
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        var mailOptions = {
            from: 'apitestt26@gmail.com',
            to: req.body.email,
            subject: 'Email Confirm Link',
            //You can use "html:" to send HTML email content. It's magic!
            html: `<h3>Hello ${req.body.fullName}</h3><br> <b>Please click on this link to continue filling out the application and submitting your documents.</b><br>${resetUrl}<p>Your Password: Lotus123</p>`,
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });              
    });

    newUser.save(async (err) => {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while new user registering."});
        } else {

            //Generate new activity
            let activityObj = { type: 0, key: newUser.fullName };
            let newActivity = new Activity(activityObj);
            newActivity.generateNewActivity();
            await newActivity.save();

            let users = await User.find();
            let activities = await Activity.find();
            return res.json({success: true, users: users, activities: activities});
        }
    }); 
};

exports.addUser = async (req, res) =>  {

    let user = await User.findOne({ fullName: req.body.fullName });
    if(user) {
        return res.json({ success: false, errMessage: 'A user with this user name already exists.'});
    }
    
    user = await User.findOne({ email: req.body.email });
    if(user) {
        return res.json({ success: false, errMessage: 'A user with this email address already exists.'});
    }

    //Create new user and set password
    let newUser = new User(req.body);
    newUser.setPassword(req.body.password);
               
    newUser.save(async (err) => {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while new user registering."});
        } else {

            //Generate new activity
            let activityObj = { type: 0, key: newUser.fullName };
            let newActivity = new Activity(activityObj);
            newActivity.generateNewActivity();
            await newActivity.save();

            let users = await User.find();
            let activities = await Activity.find();
            return res.json({success: true, users: users, activities: activities});
        }
    }); 
};

exports.allUsers = async (req, res) =>  {
    User.find()
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all users."});
        } else {
            return res.json({success: true, users: users});
        }
    });

};

exports.updateUser = async (req, res) =>  {

    let userObj = new User(req.body);
    userObj.setPassword(req.body.password);

    User.findByIdAndUpdate(userObj._id, {
        fullName: userObj.fullName,
        address: userObj.address,
        phoneNumber: userObj.phoneNumber,
        email: userObj.email,
        password: userObj.password,
        companyName: userObj.companyName,
        fico: userObj.fico,
        bankName: userObj.bankName,
        accountNumber: userObj.accountNumber,
        routingNumber: userObj.routingNumber,
        zelle: userObj.zelle,
        driverLicense: {
            file: userObj.driverLicense.file,
            state: userObj.driverLicense.state
        },
        social: {
            file: userObj.social.file,
            state: userObj.social.state
        },
        passport: {
            file: userObj.passport.file,
            state: userObj.passport.state
        },
        tax: {
            files: userObj.tax.files,
            state: userObj.tax.state,
        },
        statement: {
            files: userObj.statement.files,
            state: userObj.statement.state,
        },
        utility: {
            file: userObj.utility.file,
            state: userObj.utility.state
        },
        phoneBill: {
            file: userObj.phoneBill.file,
            state: userObj.phoneBill.state
        },
        additionalDoc: {
            files: userObj.additionalDoc.files,
            state: userObj.additionalDoc.state,
        },
        amountMonth: userObj.amountMonth,
        managementFee: userObj.managementFee,
        referer: userObj.referer,
        notes: userObj.notes,
        status: userObj.status,
    }, {
        new: true,
        useFindAndModify: false
    }, async function(err, user){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while updating user."});
        } else {

            //Generate new activity
            let activityObj = { type: 1, key: user.fullName };
            let newActivity = new Activity(activityObj);
            newActivity.generateNewActivity();
            await newActivity.save();

            let users = await User.find();
            let activities = await Activity.find();
            return res.json({success: true, users: users, activities: activities});
        }
    });
};

exports.updateRealUser = async (req, res) => {
    
    let userObj = new User(req.body);
    userObj.setPassword(req.body.password);
    User.findByIdAndUpdate(userObj._id, {
        fullName: userObj.fullName,
        address: userObj.address,
        phoneNumber: userObj.phoneNumber,
        email: userObj.email,
        password: userObj.password,
        companyName: userObj.companyName,
        fico: userObj.fico,
        bankName: userObj.bankName,
        accountNumber: userObj.accountNumber,
        routingNumber: userObj.routingNumber,
        zelle: userObj.zelle,
        driverLicense: {
            file: userObj.driverLicense.file,
            state: userObj.driverLicense.state
        },
        social: {
            file: userObj.social.file,
            state: userObj.social.state
        },
        passport: {
            file: userObj.passport.file,
            state: userObj.passport.state
        },
        tax: {
            files: userObj.tax.files,
            state: userObj.tax.state,
        },
        statement: {
            files: userObj.statement.files,
            state: userObj.statement.state,
        },
        utility: {
            file: userObj.utility.file,
            state: userObj.utility.state
        },
        phoneBill: {
            file: userObj.phoneBill.file,
            state: userObj.phoneBill.state
        },
        additionalDoc: {
            files: userObj.additionalDoc.files,
            state: userObj.additionalDoc.state,
        },
        amountMonth: userObj.amountMonth,
        managementFee: userObj.managementFee,
        referer: userObj.referer,
        notes: userObj.notes,
    }, {
        new: true,
        useFindAndModify: false
    }, async function(err, user){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while updating user."});
        } else {
            return res.json({success: true, user: user});
        }
    });
}

exports.updateUserOneItem = (req, res) => {
    let userObj = req.body;
    User.findByIdAndUpdate(userObj._id, {
        [userObj.key]: userObj.value
    }, {
        new: true,
        useFindAndModify: false
    }, async function(err, user){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while updating user."});
        } else {

            //Generate new activity
            let activityObj = { type: 1, key: user.fullName };
            let newActivity = new Activity(activityObj);
            newActivity.generateNewActivity();
            await newActivity.save();

            let users = await User.find();
            let activities = await Activity.find();
            return res.json({success: true, users: users, activities: activities});
        }
    });
}

exports.deleteUser = (req,res) => {
    var id = req.params.id;
    User.findByIdAndRemove(id, {
        new: true,
        useFindAndModify: false
    }, async function(err, user){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while deleting user."});
        } else {

            //Generate new activity
            let activityObj = { type: 2, key: user.fullName };
            let newActivity = new Activity(activityObj);
            newActivity.generateNewActivity();
            await newActivity.save();

            let users = await User.find();
            let activities = await Activity.find();
            return res.json({success: true, users: users, activities: activities});
        }
    });

};

exports.confirmEmail = async (req, res) =>  {
    var token = req.body.token;
    EmailConfirmToken.findOne({
        token: token
    })
        .then(verifyToken => {
            if (verifyToken) {
                User.findOne({
                    email: verifyToken.email
                })
                    .then(user => {
                        if (user) { 
                                var myquery = { email: user.email };
                                var newvalues = { $set: {accountActive: true} };
                                User.updateOne(myquery, newvalues) 
                                .then(us => {
                                    res.json({  success: true, data: user.email + ' updated!' })
                                })
                                .catch(err => {
                                    res.json({ success: false, errMessage: "Wrong" })
                                });                          
                     
                        } else {
                            res.json({  success: false, errMessage: "User does not exist" })
                        }
                    })
                    .catch(err => {
                        res.json({  success: false, errMessage: "User does not exist" })
                    })
            } else {
                res.json({  success: false, errMessage: "User does not exist" })
            }
        })
        .catch(err => {
            res.json({  success: false, errMessage: "User does not exist" })
        })
}

exports.forgotPassword = async (req, res) =>  {  
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if (user) {
            var token = new VerifiyToken({
                _userId: user._id,
                token: crypto.randomBytes(16).toString("hex")
            });
            
            var resetUrl = Config.clientUrl + `/password-reset?token=`+token.token

            token.save(function(err) {
                if (err) {
                    return res.json({ success: false, errMessage: err.message});
                }

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    secure: false,
                    port: 25,
                    auth: {
                        user: Config.email,
                        pass: Config.password
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                })
                var mailOptions = {
                    from: 'apitestt26@gmail.com',
                    to: req.body.email,
                    subject: 'Email Confirm Link',
                    //You can use "html:" to send HTML email content. It's magic!
                    html: '<h3>Hello!</h3><br> <b>To change your password, please visit the following url</b><br>' + resetUrl,
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                    console.log(error);
                    } else {
                    console.log('Email sent: ' + info.response);
                    }
                });
                res.json({ success: true})
            });
        } else {
            res.json({ success: false, errMessage: "User does not exist" })
        }
    })
    .catch(err => {
        res.json({ success: false, errMessage: err})
    })
}

exports.savePasswordWithVerify = async (req, res) =>  {  
    var token = req.body.token;
    //console.log(decoced._id);
    VerifiyToken.findOne({
        token: token
    })
    .then(verifyToken => {
        if (verifyToken) {
            User.findOne({
                _id: verifyToken._userId
            })
                .then(user => {
                    if (user) {
                        if(req.body.newPass !== "") {
                            // bcrypt.hash(req.body.newPass, 10, (err, hash) => {
                                let tempUser = new User({});
                                tempUser.setPassword(req.body.newPass);
                                
                                var myquery = { email: user.email };
                                var newvalues = { $set: {password: tempUser.password} };
                                User.updateOne(myquery, newvalues) 
                                    .then(us => {
                                        console.log(us)
                                        res.json({ success: true, status: user.email + ' updated!' })
                                    })
                                    .catch(err => {
                                        res.json({ successs: false, errMessage: "Wrong password" })
                                    });
                            // })
                        } else {
                            res.json({ success: false, errMessage: "Enpty passowrd" })
                        }
                    } else {
                        res.json({ success: false, errMessage: "User does not exist" })
                    }
                })
                .catch(err => {
                    res.json({ success: false, errMessage: "User does not exist" })
                })
        } else {
            res.json({ success: false, errMessage: "User does not exist" })
        }
    })
    .catch(err => {
        res.json({ success: false, errMessage: "User does not exist" })
    })
}


// Nurse Management
exports.addNurse=  (req, res) =>  {  
    console.log('--- AddNurse - Backend ---')
    console.log(req.body)
    Nurse.findOne({email: req.body.email }).then((cate) => {
        if(cate){
            res.json({success: false, errMessage: "Already used same email"});
        }else{
            let newNurse = new Nurse(req.body);
            newNurse.setPassword(req.body.password);
            newNurse.createDate = new Date();
            newNurse.modifyDate = new Date();
            console.log('1')
            console.log(newNurse)
            newNurse.save(async(err) => {
                if (err) {
            console.log('2')
            console.log(err)
            return res.json({success: false, errMessage: "Unknown errors"});
                } else {
            console.log('3')
            let ledgers = await Nurse.find().populate(['category']).sort({ 'modifyDate': 1 });
                    res.status(200).json({success:true, nurses: ledgers});
                }
            }); 
        }
    })
}
exports.updateNurse = (req, res) =>  {
    console.log('-backend update Nurse -')
    console.log(req.body)
    Nurse.findOne({_id: req.body._id }).then((cate) => {
        if(!cate){
            res.json({success: false, errMessage: "Don't exist this Nurse"});
        }else{
            var tempPass;
            if(!req.body.password)
                tempPass = cate.password;
            Object.assign(cate, req.body);
            if(req.body.password)
                cate.setPassword(req.body.password)
            if(!req.body.password)
                cate.password = tempPass;
            cate.modifyDate = new Date();
            cate.save(async(err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    let ledgers = await Nurse.find().populate(['category']).sort({ 'modifyDate': 1 });
                    res.status(200).json({success:true, nurses: ledgers,curuser:cate});
                }
            }); 
        }
    })
};

exports.deleteNurse = (req,res) => {
    console.log('-delete Nurse-')
    console.log(req.body.id)
    var id = req.body.id;
    Nurse.findByIdAndRemove(id, {
        new: true,
        useFindAndModify: false
    }, async function(err, ledger){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while deleting Nurses."});
        } else {

            let ledgers = await Nurse.find().populate(['category']).sort({ 'modifyDate': 1 });
            return res.json({success: true, nurses: ledgers});
        }
    });

};
exports.deletesNurse = (req,res) => {
    console.log('-deletes Nurse-')
    var arrId = req.body.str;
    console.log(req.body.str)
    arrId.forEach(async(element,index) => {
        await Nurse.findByIdAndRemove(element, {
            new: true,
            useFindAndModify: false
        }, async function(err, ledger){
            if(err) {
               return res.json({success: false, errMessage: "Unknown errors occurred while deleting Nurses."});
            } else {
                if(arrId.length == (index+1)){
                    let ledgers = await Nurse.find().populate(['category']).sort({ 'modifyDate': 1 });
                    return res.json({success: true, nurses: ledgers});
                }
               
            }
        });
    });
    

};
exports.getAllNurse = async (req, res) =>  {
    await Nurse.find().populate(['category']).sort({ 'reviewRating': 1 })
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all Nurses."});
        } else {
            return res.json({success: true, nurses: users});
        }
    });

};

// Client Management
exports.addClient=  (req, res) =>  {  
    console.log('--- AddClient - Backend ---')
    console.log(req.body)
    Client.findOne({email: req.body.email }).then((cate) => {
        if(cate){
            res.json({success: false, errMessage: "Already used same email"});
        }else{
            let newNurse = new Client(req.body);
            newNurse.setPassword(req.body.password);
            newNurse.createDate = new Date();
            newNurse.modifyDate = new Date();
            newNurse.save(async(err) => {
                if (err) {
            return res.json({success: false, errMessage: "Unknown errors"});
                } else {
            let ledgers = await Client.find().sort({ 'modifyDate': 1 });
                    res.status(200).json({success:true, clients: ledgers});
                }
            }); 
        }
    })
}
exports.updateClient = (req, res) =>  {
    console.log('-backend update category -')
    console.log(req.body)
    Client.findOne({_id: req.body._id }).then((cate) => {
        if(!cate){
            res.json({success: false, errMessage: "Don't exist this Client"});
        }else{
            var tempPass;
            if(!req.body.password)
                tempPass = cate.password;
            Object.assign(cate, req.body);
            if(req.body.password)
                cate.setPassword(req.body.password)
            if(!req.body.password)
                cate.password = tempPass;
            cate.modifyDate = new Date();
            cate.save(async(err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    let ledgers = await Client.find().sort({ 'modifyDate': 1 });
                    res.status(200).json({success:true, clients: ledgers,curuser:cate});
                }
            }); 
        }
    })
};

exports.deleteClient = (req,res) => {
    console.log('-delete Client-')
    console.log(req.body.id)
    var id = req.body.id;
    Client.findByIdAndRemove(id, {
        new: true,
        useFindAndModify: false
    }, async function(err, ledger){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while deleting Client."});
        } else {

            let ledgers = await Client.find().sort({ 'modifyDate': 1 });
            return res.json({success: true, clients: ledgers});
        }
    });

};
exports.deletesClient = (req,res) => {
    console.log('-deletes Client-')
    var arrId = req.body.str;
    console.log(req.body.str)
    arrId.forEach(async(element,index) => {
        await Client.findByIdAndRemove(element, {
            new: true,
            useFindAndModify: false
        }, async function(err, ledger){
            if(err) {
               return res.json({success: false, errMessage: "Unknown errors occurred while deleting Clients."});
            } else {
                if(arrId.length == (index+1)){
                    let ledgers = await Client.find().sort({ 'modifyDate': 1 });
                    return res.json({success: true, clients: ledgers});
                }
               
            }
        });
    });
    

};
exports.getAllClient = async (req, res) =>  {
    await Client.find()
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all Clients."});
        } else {
            return res.json({success: true, clients: users});
        }
    });

};