/*
{ filer:
    [ { filnavn: 'EEGSFKRY_01__90537_20170829163250_456.txt',
        antallFakturaer: '47' },
      { filnavn: 'BAM_REST_9000_20180112_090652_Rester.txt',
        antallFakturaer: '42' },
      { filnavn: 'BAM_REST_2000_20180112_090652_Rester.txt',
        antallFakturaer: '39' },
      { filnavn: 'BAM_REST_7000_20180112_090652_Rester.txt',
        antallFakturaer: '39' },
      { filnavn: 'BAM_REST_3000_20180112_090652_Rester.txt',
        antallFakturaer: '37' },
      { filnavn: 'BAM_REST_4000_20180112_090652_Rester.txt',
        antallFakturaer: '31' },
      { filnavn: 'BAM_REST_8000_20180112_090652_Rester.txt',
        antallFakturaer: '30' },
      { filnavn: 'BAM_REST_1000_20180112_090652_Rester.txt',
        antallFakturaer: '25' },
      { filnavn: 'BAM_MAIN_1000_20180112_090556_Spedbarn.txt',
        antallFakturaer: '20' },
      { filnavn: 'BAM_MAIN_5000_20180112_090556_Spedbarn.txt',
        antallFakturaer: '18' },
      { filnavn: 'BAM_MAIN_5000_20180112_090556_Gravid.txt',
        antallFakturaer: '17' },
      { filnavn: 'BAM_MAIN_3000_20180112_090556_Gravid.txt',
        antallFakturaer: '14' } ],
   printer: 'Canberra',
   direkteprint: true }
 ::1
 */

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

filbehandling(sourcefile, destfile);