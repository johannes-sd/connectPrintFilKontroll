const fs = require("fs-extra");

let fildir = async (callback) => {
    let filene = await fs.readdir("./testfiler", (err, resultat) => {
        //console.log(resultat);
        callback(resultat);
    });
}

fildir(resultat => {
    console.log(resultat);
});

// 6UnO98zW

