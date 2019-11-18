const StaffModel = require('../models/StaffModel');

class StaffController {
   async Create(req, res) {
       try {
           const newStaff = await StaffModel.create({
               ...req.body,
               userId: req.user
            });           
           res.status(200).json({status: 'success', data: newStaff});
       } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
              status: 'error',
              message: 'this email already exist'
            })
          } else {
            res.status(500).json({
              status: 'error',
              message: err,
            });
          }
       }
    }
}


module.exports = new StaffController;