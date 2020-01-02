const express = require('express');
const addUser = require('../../models/userTable');
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");
const Bcrypt = require("bcryptjs");


exports.userSignUp = function(req, res) {
    request.body.password = Bcrypt.hashSync(request.body.password, 10);

    const userAdd = new addUser.userTable(req.body);

    userAdd.save(function(err,success){
        if(err){
            res.send("error"+err)
        }else{

            res.send('user created')

        }
    });


};
