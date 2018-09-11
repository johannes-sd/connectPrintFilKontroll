const fs = require("fs-extra");
const path = require("path");

let TESTsti = "./testfiler";

let filerIdir = async (callback) => {
    await fs.readdir(TESTsti, (err, resultat) => {
        if(err) {
            callback(err); // TODO FIX
            return;
            exit();
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
            // "antallFakturaer" : String(tellPosterIfil(resultat[i]))
            // "farge" : String(leggStyleFargeTilFil(resultat[i]))
        });
        
    }
    ResultatMedSider.data = interntObject;
    
    let filObjekt = JSON.stringify(ResultatMedSider);
    //console.log(filObjekt);
    console.log(filObjekt);
});

