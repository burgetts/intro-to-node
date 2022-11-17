const fs = require('fs');

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

cat(path)