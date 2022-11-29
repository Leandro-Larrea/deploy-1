const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;

// mongoose.connect(connectionsString,{
//     useNewUrlParser: true,
//     useUnifieTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true})
// .then(()=> {
//     console.log("database connected")
// }).catch(err =>{
//     console.error(err)
// })

const db = async () =>{
    try {
        const db = await mongoose.connect(connectionString)
        console.log("db connected")
    }   catch (error){
        console.error(error);
    } 
};

module.exports = db