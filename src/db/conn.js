const mongoose = require("mongoose");
const DB = 'mongodb+srv://aryan23:shirodkar10@cluster0.kxxsedt.mongodb.net/?retryWrites=true&w=majority';

    mongoose.set('strictQuery',true);
    mongoose.connect(DB).then(()=>{
        console.log(`Sucessfull`);
    }).catch((err)=>{
        console.log(err);
    });