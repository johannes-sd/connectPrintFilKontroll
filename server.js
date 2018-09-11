

const express = require("express");
const hbs = require("hbs");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
//<<<<<<< HEAD
const path = require("path");
const moment = require("moment");
//=======
//const path = require("path");
//>>>>>>> 52e9f03c1f99595dcc4942714e38c4f77b103a83



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
            if(err) {
                callback(err); // TODO FIX
                return;
            }
            
            else {
                console.log("HALLO!!!");
                console.log('Før filter\n' + resultat);
                let filtered = resultat.filter((oneAndoneFile) => {
                    if (oneAndoneFile.includes(".txt")) return oneAndoneFile;
                });
                // resultat = resultat.filter()  FILTER HER! fjern alt som ikke er relevant-
                resultat = filtered;
                console.log('Etter filter\n' + resultat);
                callback(resultat);
            }
        });
    }

    filerIdir(resultat => {
        // console.log("Callbak: " + resultat);
        let ResultatMedSider = {
            "draw" : 1,
            "recordsTotal" : resultat.length,
            "recordsFiltered" : resultat.length,
            "data" : [],
        }
        let i;
        let interntObject = [];
        for (i=0;i<resultat.length;i++) {
            interntObject.push({
                "filnavn" : resultat[i],
                "antallFakturaer" : String(tellPosterIfil(resultat[i]))
                // "farge" : String(leggStyleFargeTilFil(resultat[i]))
            });
            
        }
        ResultatMedSider.data = interntObject;
        
        let filObjekt = JSON.stringify(ResultatMedSider);
        //console.log(filObjekt);
        res.status(200).send(filObjekt);
    });
});

// function leggStyleFargeTilFil (fil) {
//     let differensiator = require("./privateSettings/fildifferentsiatorer.json");
//     let farge = "black"; // Setter standardfargen
//     let inkluderer = false;
//     for (var key in differensiator) {
//         if (key != "kommentar"){
//             // console.log(differensiator[key] + "\n");
//             differensiator[key].forEach((e)=>{
//                 inkluderer = fil.includes(e);
//             console.log(inkluderer + " | " + key + " | " + e + "| " + fil + "\n");
//             //if fil.includes(string(e)) {
//             //     farge = key;
//             // }
//             });

//         }

//     }
    
//     return farge;
// }



function tellPosterIfil (fil) {
    console.log("Filnavn inn " + fil);
    let filen = path.join('testfiler', fil);
    let contents = fs.readFileSync(filen, 'latin1', (err, content) => {
                        if (err) return err;
                        return content;
                    });
    let expr = new RegExp(/^..1/, 'mg');
    let DS1enere = contents.match(expr) || [];
    let antall = DS1enere.length;
    return antall;
}


app.get('/test', (req, res) => {
    res.send("Halloen");
});

app.post("/printe", (req,res) => {
    let filutvidelse;
    console.log(req.body);
    let mottatt = req.body;
    if(mottatt.direkteprint) { 
        filutvidelse = ".direkteprint"; 
        } else {
            filutvidelse = `.${mottatt.printer}`;
        }
    console.log(req.connection.remoteAddress);
    res.status(200).send(JSON.stringify(mottatt));
});




app.get("/fildifferentsiatorer", (req, res) => {
    //This route passes some private settings to the client.
        const fildiffernesiator = require("./privateSettings/fildifferentsiatorer.json");
        console.log(Object.keys(fildiffernesiator).length);    
        if (typeof fildiffernesiator === "object" && Object.keys(fildiffernesiator).length > 0){
            res.status(200).send(JSON.stringify(fildiffernesiator, undefined, 2));
        } else {
            res.status(500).send();
        }
    
});



app.listen(port, () => {
    console.log(`Serveren startet på port ${port}`);
}); 

