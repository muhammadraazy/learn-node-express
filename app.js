const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

const dbUrl = 'mongodb://localhost:27017/learning';

class BackEnd {
    constructor(lang, time) {
        this.lang = lang;
        this.time = time
    }

}

const 