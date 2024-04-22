const { User, Saved, History } = require('../models')

exports.getSaved = (req, res) =>{
    const saved = Saved.find({ user : req.user})
    res.json({success : true, data: saved})
}

exports.getHistory = (req, res) =>{
    const history = History.find({ user: req.user})
    res.json({success: true, data: history})
}

