const express = require("express");
const hbs = require("hbs");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
//<<<<<<< HEAD
const path = require("path");
const moment = require("moment");
const _ = require("lodash");

const port = process.env.PORT || 8081;
let app = express();

hbs.registerPartials(__dirname + "/views/partials");


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(helmet());
app.use(bodyParser.json({type: 'application/json'}));

//The route
app.get('/filinstillinger', (req, res) => {

        const fildiffernesiator = require("../privateSettings/fildifferentsiatorer.json");
        console.log(Object.keys(fildiffernesiator).length);    
        if (typeof fildiffernesiator === "object" && Object.keys(fildiffernesiator).length > 0){
            res.status(200).send(JSON.stringify(fildiffernesiator, undefined, 2));
        } else {
            res.status(500).send();
        }
    



    });


    app.listen(port, () => {
        console.log(`Serveren startet pÃ¥ port ${port}`);
    }); 