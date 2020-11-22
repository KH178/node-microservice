var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
const bodyParser = require('body-parser');

import { postUser } from './controllers'
import makeCallback from './express-callback'
import dotenv from 'dotenv';
dotenv.config();
var app = express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        const fileId = Date.now();
        cb(null, req.body.name + '-' + fileId)
        req.body.fileId = fileId;
    }
})

var upload = multer({ storage: storage })


app.use(logger('dev'));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




app.post(`/user`, upload.any(), makeCallback(postUser))

module.exports = app;
