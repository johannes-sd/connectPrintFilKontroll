const fs = require("fs");



let files = async () => {
    return await new Promise((resolve, reject) => {
    fs.readdir("node_modules", (err, files) => {
        
            if (err) return reject(err)
            else {
                console.log("i primise, ", files)
                return resolve(files);
            }
        } )
    })
    console.log(files);
}

console.log(files);