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
    filerIdir(resultat => {
        
        // let ResultatMedSider = resultat;

        // resultat.forEach(element => {
        //     ResultatMedSider.push(tellPosterIfil(element));
        // });
        let ResultatMedSider = {
            "draw" : 1,
            "recordsTotal" : resultat.length,
            "recordsFiltered" : resultat.length,
            "data" : []
        }
        let i;
        let interntObject = [];
        for (i=0;i<resultat.length;i++) {
            interntObject.push({
                "filnavn" : resultat[i],
                "antallSider" : String(tellPosterIfil(resultat[i]))
            });
            
        }
        ResultatMedSider.data = interntObject;
        //console.log(ResultatMedSider);

        let raafilObjekt = {
            "data" : resultat
        }; //data er filene som listes opp, differensiatorer er metadata (atributter) for filtyper mm.
        
        //let filObjekt = JSON.stringify(raafilObjekt);
        let filObjekt = JSON.stringify(ResultatMedSider);
        //console.log(filObjekt);
        res.status(200).send(filObjekt);
        //res.status(200).send(JSON.stringify(ResultatMedSider));
    });
});

function tellPosterIfil (fil) {

    // let filerIdir = async (callback) => {
    //     await fs.readdir(TESTsti, (err, resultat) => {
    //         callback(resultat);
    //     });
    // }

    function readContent(callback) {
        fs.readFile("./testfiler/" + fil, 'utf8', (err, content) => {
            if (err) return callback(err);
            callback(null, content);
        });
    }
    
    let antall = readContent((err,content) => {
        console.log(content);
        return content;
    });


    // let antall = fs.readFile("./testfiler/" + fil , 'utf8', (err, data) => {
    //     if(err) return("Fikk ikke tak i antallet");
    //     return "noe";
    // });
    //var count = (temp.match(/is/g) || []).length;
    console.log(antall);
    return 10000;
}


app.get('/test', (req, res) => {
    res.send("Halloen");
});

app.post("/printe", (req,res) => {
    console.log(req.body);
    let mottatt = req.body;
    res.status(200).send(JSON.stringify(mottatt));
})

app.post("/fildifferentsiator", (req, res) => {
    //This route passes some private settings to the client.
        const fildiffernesiator = require("./privateSettings/fildifferentsiatorer.json");
        console.log(Object.keys(fildiffernesiator).length);    
        if (typeof fildiffernesiator === "object" && Object.keys(fildiffernesiator).length > 0){
            res.status(200).send(fildiffernesiator);
        } else {
            res.status(500).send();
        }
    
});

app.listen(port, () => {
    console.log(`Serveren startet på port ${port}`);
}); 

