var Guichet = require('../models/guichet');
const fs = require('fs');
const path = require("path");


exports.guichet_details = function(req, res){
    const rawdata = fs.readFileSync(path.resolve(__dirname, "../../database/guichet/especes.json"));
    const especes = JSON.parse(rawdata);
    console.log('especes', especes);
    res.send(especes);
}

exports.guichet_total = function(req, res){
    const rawdata = fs.readFileSync(path.resolve(__dirname, "../../database/guichet/especes.json"));
    const especes = JSON.parse(rawdata);
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
    console.log("guichet_add req", req.body);
    //const data = req.body;
    const data = JSON.stringify(req.body);
    fs.writeFileSync(path.resolve(__dirname, "../../database/guichet/especes.json"), data);
    res.send("NOT IMPLEMENTED : guichet add")
}