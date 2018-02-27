const fs = require("fs");

// //REFERENCE CODE
// const TESTsti = "./testfiler";

// let filerIdir = async (callback) => {
//     await fs.readdir(TESTsti, (err, resultat) => {
//         callback(resultat);
//     });
// }

// filerIdir(resultat => {
//     let raafilObjekt = {
//         "data" : resultat
//     }; 
//     let filObjekt = JSON.stringify(raafilObjekt);
//     console.log("resultat ",  filObjekt);
// });

const testfile = "./testfiler/EEGSFKRY_01__90537_20170829163250_456.txt";

async function theFileContents (callback) {
    await fs.readFile(testfile, "latin1", (err, data) => {
        if (err) callback(err);
        callback(data);
     });
    
};

theFileContents( async (result) => {
    const antall =  await occurrences(result, "DS1");
    console.log(antall);
});


/** Function that count occurrences of a substring in a string;
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
 *
 * @author Vitim.us https://gist.github.com/victornpb/7736865
 * @see Unit Test https://jsfiddle.net/Victornpb/5axuh96u/
 * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
 */
function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}






