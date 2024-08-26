const port = 4002;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const { request } = require("http");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database Connection 
mongoose.connect("mongodb+srv://gratstackdev:a044848100@cluster0.1mvgr.mongodb.net/e-commerce");
// API Creation

app.get("/", (req, res) => {
    res.send("Express App is Running")
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: '/.upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

// Creating Upload Endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for Creating Products

const Product = mongoose.model("product", {
    id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    new_price: {
        type: Number,
        require: true,
    },
    old_price: {
        type: Date,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    avilable: {
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async(req, res) => {
    const product = new Product
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Service Running on Port" + port)
    } else {
        console.log("Error : " + error)
    }
})