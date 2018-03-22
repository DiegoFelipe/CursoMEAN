const fs = require('fs')
const files = fs.readdirSync("/")

files.forEach(f => console.log(f))
