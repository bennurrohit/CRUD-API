const mongoose = require('mongoose')

const connectDb = async (url) => {
    await mongoose.connect(url)
    .then(res => {
        if (process.env.MODE === "production"){
            console.log(`cloud mongoDb connected`)
        } else if(process.env.MODE === "development"){
                console.log(`local mongoDb connected`)
        }       
    }).catch(err => console.log(err))
}

module.exports = connectDb