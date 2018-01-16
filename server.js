const express = require("express");
const hbs = require("hbs");
const helmet = require("helmet");
const bodyParser = require("body-parser");

//const buttons = require("datatables.net-buttons");



const port = process.env.PORT || 8081;
let app = express();

hbs.registerPartials(__dirname + "/views/partials");


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(helmet());
app.use(bodyParser.json({type: 'application/*+json'}));

// app.use((req, resp, next) => {
//     var now = new Date().toString();
//     var log = `${now}: ${req.method} ${req.url}`;
//     console.log(log);
//     fs.appendFile('server.log' , log + "\n", (err) => {
//         if(err){
//             console.log("Problemer med å skrive til logg");
//         }
//     });
//         next();
    
// });



app.get('/', (req, res) => {
    
    // hbs.registerHelper('getCurrentYear',() => {
    //     return new Date().getFullYear();
    // });
    res.render('index.hbs',{
        });
    });

app.post("/filliste", (req, res) => {
    console.log(req);
    res.send({"data":"nada"});
});


app.get('/test', (req, res) => {
    res.send("Halloen");
});

app.listen(port, () => {
    console.log(`Serveren startet på port ${port}`);
}); 

