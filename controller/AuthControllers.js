//const User = require('../models/User')

const user = [
    {
        nome:"Aldomar",
        email:"teste@teste",
        senha:"123"
    }
 ]

const bcrypt = require('bcryptjs')

module.exports = class AuthController{

    static async login(req,res){
        res.render('admin/login')
    }

}