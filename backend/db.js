const mongoose =require('mongoose');
const mongoURL="mongodb://127.0.0.1:27017/Project"

const connectToMongo=async()=>{
    try{
        await mongoose.connect(mongoURL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Connection Successfully");

    }
    catch(error){
        console.error('Error connecting to MongoDB:',error);
    }
}
module.exports=connectToMongo;