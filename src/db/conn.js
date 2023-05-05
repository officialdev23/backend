const mongoose = require("mongoose");
const DB = 'mongodb://127.0.0.1:27017/gripbank';

    mongoose.set('strictQuery',true);
    mongoose.connect(DB).then(()=>{
        console.log(`Sucessfull`);
    }).catch((err)=>{
        console.log(err);
    });