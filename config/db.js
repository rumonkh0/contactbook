const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb+srv://rumon:ppppppp0@cluster0.19bi9.mongodb.net/?retryWrites=true&w=majority');

        console.log('Database Connected');
    }catch{
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;