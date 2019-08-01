var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    email: {type: String, required:true},
    password:{type:String, required:true}
});

userSchema.methods.encryptPassword = (password)=>{
return bcrypt.hashSync(password, bcrypt.genSaltSync(5),null )
};

userSchema.methods.validPassword = function(password){
    if(this.password != null){
        return bcrypt.compareSync(password, this.password);
    }
    else{
        return false;
    }
};

module.exports = mongoose.model('user', userSchema);