var mongoose = require('mongoose');
const Job = mongoose.model('Job');
const nodemailer = require('nodemailer'); 
var Config = require('../config/config');
const NurseCategory = mongoose.model('NurseCategory');
const Nurse = mongoose.model('Nurse');
const Client = mongoose.model('Client');
const Bid = mongoose.model('Bid');
// Job Management
exports.addJob=  (req, res) =>  {  
    console.log('--- AddJob - Backend ---')
    console.log(req.body)
    Job.findOne({}).then((cate) => {
            let newNurse = new Job(req.body);
            newNurse.startDate = new Date();
            newNurse.modifyDate = new Date();
            newNurse.save(async(err) => {
                if (err) {
            return res.json({success: false, errMessage: "Unknown errors"});
                } else {
            let ledgers = await Job.find().populate(['category','client','nurse']).sort({ 'modifyDate': 1 });
                    res.status(200).json({success:true, jobs: ledgers});
                }
            }); 
    })
}
exports.updateJob = (req, res) =>  {
    console.log('-backend update category -')
    console.log(req.body)
    Job.findOne({_id: req.body._id }).then((cate) => {
        if(!cate){
            res.json({success: false, errMessage: "Don't exist this Job"});
        }else{
            cate.modifyDate = new Date();
            Object.assign(cate,req.body);
            cate.save(async(err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    let ledgers = await Job.find().populate(['category','client','nurse']).sort({ 'modifyDate': 1 });
                    res.status(200).json({success:true, jobs: ledgers,curjob:cate});
                }
            }); 
        }
    })
};
exports.updateJobStatus = (req, res) =>  {
    console.log('-backend update Status -')
    console.log(req.body._id)
    // console.log(req.body)
    Job.findOne({_id: req.body._id }).then((cate) => {
        if(!cate){
            res.json({success: false, errMessage: "Don't exist this Job"});
        }else{
            cate.modifyDate = new Date();
            // Object.assign(cate,req.body);
            if(cate.status =='Pending')
                cate.status ='In Progress';
            else if(cate.status == 'In Progress')
                cate.status ='Cancelled';
            else
                cate.status ='Pending';
            cate.save(async(err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    let ledgers = await Job.find().populate(['category','client','nurse']);
                    res.status(200).json({success:true, jobs: ledgers,curjob:cate});
                }
            }); 
        }
    })
};
exports.setAward = (req,res) =>{
    console.log('-backend update Status -')
    console.log(req.body._id)
    // console.log(req.body)
    Job.findOne({_id: req.body.job }).then((cate) => {
        if(!cate){
            res.json({success: false, errMessage: "Don't exist this Job"});
        }else{
            cate.modifyDate = new Date();
            // Object.assign(cate,req.body);
            cate.nurse = req.body.nurse;
            cate.save(async(err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    let ledgers = await Job.find().populate(['category','client','nurse']);
                    res.status(200).json({success:true, jobs: ledgers,curjob:cate});
                }
            }); 
        }
    }) 
}
exports.deleteJob = (req,res) => {
    console.log('-delete Job-')
    console.log(req.body.id)
    var id = req.body.id;
    Job.findByIdAndRemove(id, {
        new: true,
        useFindAndModify: false
    }, async function(err, ledger){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while deleting Job."});
        } else {

            let ledgers = await Job.find().populate(['category','client','nurse']).sort({ 'modifyDate': 1 });
            return res.json({success: true, jobs: ledgers});
        }
    });

};
exports.deletesJob = (req,res) => {
    console.log('-deletes Job-')
    var arrId = req.body.str;
    console.log(req.body.str)
    arrId.forEach(async(element,index) => {
        await Job.findByIdAndRemove(element, {
            new: true,
            useFindAndModify: false
        }, async function(err, ledger){
            if(err) {
               return res.json({success: false, errMessage: "Unknown errors occurred while deleting Jobs."});
            } else {
                if(arrId.length == (index+1)){
                    let ledgers = await Job.find().populate(['category','client','nurse']).sort({ 'modifyDate': 1 });
                    return res.json({success: true, jobs: ledgers});
                }
               
            }
        });
    });
    

};
exports.getAllJob = async (req, res) =>  {
    await Job.find()
         .populate(['category', 'client'])
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all Jobs."});
        } else {
            return res.json({success: true, jobs: users});
        }
    });

};
exports.getAllJobShow = async (req, res) =>  {
    await Job.find({ status:'In Progress' })
         .populate(['category', 'client'])
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all Jobs."});
        } else {
            return res.json({success: true, jobs: users});
        }
    });

}; 
exports.getSelJob = async (req, res) =>  {
    await Job.findOne({ email: req.body.email })
         .populate(['category', 'client'])
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all Jobs."});
        } else {
            return res.json({success: true, jobs: users});
        }
    });

};

// BID
exports.addBid=  (req, res) =>  {  
    console.log('--- AddJob - Backend ---')
    console.log(req.body)
    Bid.findOne({}).then((cate) => {
            let newNurse = new Bid(req.body);
            newNurse.startDate = new Date();
            newNurse.modifyDate = new Date();
            newNurse.save(async(err) => {
                if (err) {
            return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    Job.findOne({_id: req.body.job }).then((cate1) => {
                        if(!cate1){
                            
                        }else{
                            cate1.modifyDate = new Date();
                            cate1.count ++;
                            cate1.save(async(err) => {
                            }); 
                        }
                    })
            let ledgers = await Bid.find().populate(['job','nurse']).sort({ 'modifyDate': 1 });
                    res.status(200).json({success:true, bids: ledgers});
                }
            }); 
    })
}
exports.updateBid = (req, res) =>  {
    console.log('-backend update category -')
    console.log(req.body)
    Bid.findOne({_id: req.body._id }).then((cate) => {
        if(!cate){
            res.json({success: false, errMessage: "Don't exist this Job"});
        }else{
            cate.modifyDate = new Date();
            Object.assign(cate,req.body);
            cate.save(async(err) => {
                if (err) {
                    return res.json({success: false, errMessage: "Unknown errors"});
                } else {
                    let ledgers = await Bid.find().populate(['job','nurse']).sort({ 'modifyDate': 1 });
                    res.status(200).json({success:true, bids: ledgers,curbid:cate});
                }
            }); 
        }
    })
};
exports.deleteBid = (req,res) => {
    console.log('-delete Job-')
    console.log(req.body.id)
    var id = req.body.id;
    Bid.findByIdAndRemove(id, {
        new: true,
        useFindAndModify: false
    }, async function(err, ledger){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while deleting Job."});
        } else {

            let ledgers = await Bid.find().populate(['job','nurse']).sort({ 'modifyDate': 1 });
            return res.json({success: true, bids: ledgers});
        }
    });

};
exports.deletesBid = (req,res) => {
    console.log('-deletes Bid-')
    var arrId = req.body.str;
    console.log(req.body.str)
    arrId.forEach(async(element,index) => {
    await Bid.findByIdAndRemove(element, {
            new: true,
            useFindAndModify: false
        }, async function(err, ledger){
            if(err) {
               return res.json({success: false, errMessage: "Unknown errors occurred while deleting Jobs."});
            } else {
                if(arrId.length == (index+1)){
                    let ledgers = await Bid.find().populate(['job','nurse']).sort({ 'modifyDate': 1 });
                    return res.json({success: true, bids: ledgers});
                }
               
            }
        });
    });
    

};
exports.getAllBid = async (req, res) =>  {
    await Bid.find()
         .populate(['job', 'nurse'])
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all Jobs."});
        } else {
            return res.json({success: true, bids: users});
        }
    });

};
exports.getBid = async (req, res) =>  {
    await Bid.findOne({job: req.body.job })
         .populate(['category', 'client'])
        .exec(function(err, users) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all Jobs."});
        } else {
            return res.json({success: true, bids: users});
        }
    });

};