var Guichet = require('../models/guichet');
const fs = require('fs');
const path = require("path");

exports.guichet_details = function(req, res){
    let rawdata = fs.readFileSync(path.resolve(__dirname, "../../database/guichet/especes.json"));
    let especes = JSON.parse(rawdata);
    console.log('especes', especes);
    res.send(especes);
}

exports.guichet_total = function(req, res){
    let rawdata = fs.readFileSync(path.resolve(__dirname, "../../database/guichet/especes.json"));
    let especes = JSON.parse(rawdata);
    console.log("test", Object.entries(especes).map((test) => test[1]));
    const total =  Object
    .entries(especes).map((test) => test[1])
    .map((typeLiquide) => 
            typeLiquide
                .map((current) => current.value * current.number)
                .reduce((acc, current) => acc + current)
        )
    .reduce((acc, current) => acc + current);
    console.log("total", total);
    res.send(total.toString());
}

exports.guichet_add = function(req, res){
    res.send("NOT IMPLEMENTED : guichet add")
}