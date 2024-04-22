const { User, Saved, History } = require('../models')

exports.getUsers = (req, res) =>{
    const users = User.find()
    res.json({success : true, data: users})
}

exports.getApiHistory = (req, res) =>{
    const history = History.find()
    res.json({success: true, data: history})
}

