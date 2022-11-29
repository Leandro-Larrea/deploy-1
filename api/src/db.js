const mongoose = require("mongoose");
 

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
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connected")
    }   catch (error){
        console.error(error);
    } 
};

module.exports = db