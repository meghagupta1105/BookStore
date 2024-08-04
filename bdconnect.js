const mongoose=require('mongoose')

 const mongodburl=process.env.MONGODB_URL
 const bdconnect= async()=>{
    try {
        await mongoose.connect(mongodburl)
        console.log("database is connected");
    } catch (error) {
        console.log(error);
    }

}

module.exports=bdconnect;