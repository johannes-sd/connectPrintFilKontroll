const express = require("express");
const hbs = require("hbs");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
const path = require("path");

//const buttons = require("datatables.net-buttons");

const port = process.env.PORT || 8081;
let app = express();

hbs.registerPartials(__dirname + "/views/partials");


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(helmet());
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', (req, res) => {
    
    res.render('index.hbs',{
        });
    });

app.post("/filliste", (req, res) => {
    console.log("------");
    console.log(req.body);
    const directory = require("./privateSettings/stier.json");
    let sti = directory.kildesti;
    let TESTsti = "./testfiler";
    console.log("Skal hente filliste");

    let filerIdir = async (callback) => {
        await fs.readdir(TESTsti, (err, resultat) => {
            callback(resultat);
        });
    }

    const fildiffernesiator = require("./privateSettings/fildifferentsiatorer.json");
    console.log(fildiffernesiator);

    filerIdir(resultat => {
        let raafilObjekt = {
            "data" : resultat,
            "differentsiatorer" : fildiffernesiator
        }; //data er filene som listes opp, differensiatorer er metadata (atributter) for filtyper mm.
        let filObjekt = JSON.stringify(raafilObjekt);
        //console.log("resultat ",  filObjekt);
        res.status(200).send(filObjekt);
    });
});

app.get('/test', (req, res) => {
    res.send("Halloen");
});

app.post("/printe", (req,res) => {
    console.log(req.body);
    let mottatt = req.body;
    res.status(200).send(JSON.stringify(mottatt));
})


app.listen(port, () => {
    console.log(`Serveren startet på port ${port}`);
}); 

