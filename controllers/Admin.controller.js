var mongoose = require('mongoose');
passport = require('passport');
const Admin = mongoose.model('Admin');
const NurseCategory = mongoose.model('NurseCategory');
const Nurse = mongoose.model('Nurse');
const Client = mongoose.model('Client');
// const Activity = mongoose.model('Activity');
const fileUpload = require("./FileUpload.controller");

exports.register = async (req, res) =>  {
    console.log('--- backend (register) ----')
    console.log(req.body)
    await Admin.findOne({ email: req.body.email }).then(admin => {
        if(admin) {
            return res.json({success: false, errMessage: "Email already exists"});
        } else {
            let admin = new Admin(req.body);
            admin.setPassword(req.body.password);
            admin.save((err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors occurred while new admin registering."});
                } else {
                    res.status(200).json({success:true});
                }
            }); 
        }
    })
};

exports.login = async (req, res) =>  {  
    console.log('--- backend (login) ----')
    console.log(req.body)
    await Admin.findOne({email: req.body.email }).then(admin => {
            let result = admin.validatePassword(req.body.password);
            if(!result) {
                return res.json({success: false, errMessage: "Password is wrong. Please confirm your password again!"});
            } else {
                let token = admin.generateJwt();
                res.json({success: true, role: 0, token: token, user: admin});
            }
        }
    )
};
exports.userlogin = async (req, res) =>  {  
    console.log('--- backend (userlogin) ----')
    console.log(req.body)
    await Nurse.findOne({email: req.body.email }).then(admin => {
        if(!admin) {
           
            Client.findOne({email: req.body.email }).then(user => {
                if(!user) {
                    return res.json({success: false, errMessage: "Email not found. Please confirm your email again!"});
                } else {
                    let result = user.validatePassword(req.body.password);
                    if(!result) {
                        return res.json({success: false, errMessage: "Password is wrong. Please confirm your password again!"});
                    } else {

                        // if(!user.accountActive) {
                        //     return res.json({success: false, errMessage: "You didn't confirm your email. Please confirm your email !"});
                        // } else {
                            let token = user.generateJwt();
                            res.json({success: true, role: 1, token: token, user: user});
                        // }
                    }
                }
            })
        } else {
            let result = admin.validatePassword(req.body.password);
            if(!result) {
                return res.json({success: false, errMessage: "Password is wrong. Please confirm your password again!"});
            } else {
                let token = admin.generateJwt();
                res.json({success: true, role: 2, token: token, user: admin});
            }
        }
    }
    )

};
exports.updateAdmin = async (req, res) =>  {  

    var jsonAdmin = JSON.parse(req.body.jsonAdmin);
    let adminObj = new Admin(jsonAdmin);
    adminObj.setPassword(jsonAdmin.password);
    Admin.findOneAndUpdate({}, {
        email: adminObj.email,
        password: adminObj.password,
        avatar: adminObj.avatar,
        incomeLedger: adminObj.incomeLedger,
        expensiveLedger: adminObj.expensiveLedger
    }, {
        new: true,
        useFindAndModify: false
    }, async function(err, admin){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while updating admin."});
        } else {
            //Generate new activity
            let activityObj = { type: 3, key: "You" };
            let newActivity = new Activity(activityObj);
            newActivity.generateNewActivity();
            await newActivity.save();

            let activities = await Activity.find();
            return res.json({success: true, admin: admin, activities: activities});
        }
    });
};
exports.addCategory=  (req, res) =>  {  
    console.log('--- AddCategory - Backend ---')
    console.log(req.body)
    NurseCategory.findOne({name: req.body.name }).then((cate) => {
        if(cate){
            res.json({success: false, errMessage: "Already used same name"});
        }else{
            let newCategory = new NurseCategory(req.body);
            newCategory.save(async(err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    let ledgers = await NurseCategory.find();
                    res.status(200).json({success:true, allcategories: ledgers});
                }
            }); 
        }
    })
}
exports.updateCategory = (req, res) =>  {
    console.log('-backend update category -')
    console.log(req.body)
    NurseCategory.findOne({_id: req.body._id }).then((cate) => {
        if(!cate){
            res.json({success: false, errMessage: "Don't exist this Category"});
        }else{
            cate.name=req.body.name;
            cate.description = req.body.description;
            cate.save(async(err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    let ledgers = await NurseCategory.find();
                    res.status(200).json({success:true, allcategories: ledgers});
                }
            }); 
        }
    })
    // NurseCategory.findOneAndUpdate({_id: req.body._id}, {
    //     name: req.body.name,
    //     description: req.body.description
    // }, {
    //     new: true,
    //     useFindAndModify: false
    // }, async function(err, ledger){
    //     if(err) {
    //         return res.json({success: false, errMessage: "Unknown errors occurred Updating Categories"});
    //     } else {
    //         let ledgers = await NurseCategory.find();
    //         return res.json({success: true, allcategories: ledgers});
    //     }
    // });
};

exports.deleteCategory = (req,res) => {
    console.log('-delete category-')
    console.log(req.body.id)
    var id = req.body.id;
    NurseCategory.findByIdAndRemove(id, {
        new: true,
        useFindAndModify: false
    }, async function(err, ledger){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while deleting Categories."});
        } else {

            let ledgers = await NurseCategory.find();
            return res.json({success: true, allcategories: ledgers});
        }
    });

};
exports.deletesCategory = (req,res) => {
    console.log('-deletes category-')
    var arrId = req.body.str;
    console.log(req.body.str)
    arrId.forEach(async(element,index) => {
        await NurseCategory.findByIdAndRemove(element, {
            new: true,
            useFindAndModify: false
        }, async function(err, ledger){
            if(err) {
               return res.json({success: false, errMessage: "Unknown errors occurred while deleting Categories."});
            } else {
                if(arrId.length == (index+1)){
                    let ledgers = await NurseCategory.find();
                    return res.json({success: true, allcategories: ledgers});
                }
               
            }
        });
    });
    

};
exports.getAllCategory = async (req, res) =>  {
    await NurseCategory.find()
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all Categories."});
        } else {
            return res.json({success: true, allcategories: users});
        }
    });

};

// Password
exports.updateHash = async(req, res) =>{
    if(req.body.role == 2){
        Nurse.findOne({_id: req.body._id }).then((cate) => {
            if(!cate){
                res.json({success: false, errMessage: "Don't exist this Nurse"});
            }else{
                cate.setPassword(req.body.password)
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
    }else{
        Client.findOne({_id: req.body._id }).then((cate) => {
            if(!cate){
                res.json({success: false, errMessage: "Don't exist this Client"});
            }else{
                cate.setPassword(req.body.password)
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
    }
    
}