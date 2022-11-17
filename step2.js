const fs = require('fs');
const axios = require('axios');

const path = process.argv[2]

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        console.log(data)
        process.exit(0)
    })
}

async function webCat(path) {
    try {
        resp = await axios.get(path)
        console.log(resp.data)
        process.exit(0)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

if (path.startsWith('http')) {
    webCat(path)
}
else {
    cat(path)
}
