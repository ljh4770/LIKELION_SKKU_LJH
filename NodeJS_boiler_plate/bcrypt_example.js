const bcrypt = require('bcrypt');
const saltRounds = 5;
// console.dir(process)


bcrypt.genSalt(saltRounds, (err, salt) => {
    console.log(salt);
    bcrypt.hash('HELLO World!', salt, (err, hash) =>{
        console.log(hash);
        a = hash.slice(7);
        console.log(a);
    })
})