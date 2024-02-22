const express = require("express")
const store_route = express()

const bodyParser = require("body-parser")
store_route.use(bodyParser.json())
store_route.use(bodyParser.urlencoded({extended: true}))

const multer = require("multer")
const path = require("path")

store_route.use(express.static("public"))

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname, "../../public/storedimages"), function(error){
            if(error) throw error
        })
    },
    filename: function(re,file,cb){
        const name= Date.now()+'-'+file.originalname
        cb(null, name, function(error, success){
            if (error) throw error
        })
    }
})
const upload = require("upload")

const auth = require()