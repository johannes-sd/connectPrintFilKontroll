
const fs = require("fs-extra");
const path = require("path");
const folder = "./testfiler";
const destFolder = "./testfiler/arkivmappe";
const testfile = 'BAM_MAIN_3000_20180112_090556_Gravid.txt';
const { COPYFILE_FICLONE } = fs.constants;
let sourcefile = path.join(folder,testfile);
let destfile = path.join(destFolder, testfile);

async function filbehandling(ACTsourceFile, ACTdestfile) {
  try {
    let kildefil = ACTsourceFile; //Vet ikke hvorfor, men den vil ikke ta med seg ACTsourceFile??
     await fs.copy(kildefil.toString(), ACTdestfile, COPYFILE_FICLONE);
     kopierTilStreamServeSpool(kildefil);
  } catch (error) {
    console.log(error);
  }
}

async function slettfil(ACTfiletoDelete) {
  try {
    await fs.remove(ACTfiletoDelete);
  } catch (error) {
    console.log(`feil med sletting av ${ACTfiletoDelete} ${error}`);
  }
}

async function kopierTilStreamServeSpool(ACTfileToStreamserve) {
  try {
    await console.log("Her; Send til streamservespool");
    slettfil(ACTfileToStreamserve);
  } catch (error) {
    console.log(error);
  }
}
