const mongoose=require('mongoose')

const movieSchema= mongoose.Schema( {
titre:{
    type: String ,
    required : true
},
image: String,
description:String,
rate : Number

})

module.exports = mongoose.model('movieSchema',movieSchema)