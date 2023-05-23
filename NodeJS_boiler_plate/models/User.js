const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

userSchema.pre('save', function( next ){
    var user = this;
    // salt를 이용하여 비밀번호 암호화 진행

    if (user.isModified('password')){
        // salt 생성 (slatRounds 이용)
        bcrypt.genSalt(saltRounds, function (err, salt){
            // 에러 전달
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                // 에러 전달
                if(err) return next(err);

                user.password = hash;

                next();
            })
        })
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {User};