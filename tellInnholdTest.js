// testfiler\AA_Konvoluttering__20170504083019_433.txt

const fs = require('fs-extra');
const path = require("path");


function tellPosterIfil (fil) {
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

let antall = tellPosterIfil("BAM_REST_8000_20180112_090652_Rester.txt");
console.log(antall);