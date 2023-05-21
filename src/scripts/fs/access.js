// import { access, constants } from 'fs';
const fs = require('fs');

const file = "access.js";
fs.access(file, fs.constants.F_OK, (err) =>{
    console.log(`${file} ${err ? 'does not exist' : 'exists' }`);
});
fs.constants.R_OK