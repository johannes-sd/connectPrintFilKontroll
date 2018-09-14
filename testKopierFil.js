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
 try {
     fs.copyFileSync(path.join(folder,testfile),path.join(destFolder, testfile), COPYFILE_FICLONE);
     console.log("Filen " + testfile + " er kopiert");
 } catch (error) {
     console.log("kopiering feiler " + error)
 }