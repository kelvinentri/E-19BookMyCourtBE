const mongoose =require('mongoose')

const connectDB=async()=>{
    try {
        // mongodb://127.0.0.1:27017/bookmycourte19
    await mongoose.connect(`mongodb+srv://kelvingeorge:BxJNJB65l6n1r9kz@cluster0.aou7wev.mongodb.net/bookmycourte19`)
console.log('MongoDb database conection established');
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB


