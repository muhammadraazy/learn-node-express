const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

const dbUrl = 'mongodb://localhost:27017/learning';

MongoClient.connect(dbUrl, (err, db) => {
    const dbs = db.db('learning');
    const students = dbs.collection('students');

    // students.updateMany({}, { $set: { rating: [20, 30, 40] } });
    // students.updateMany({ rating: 20 }, { $set: { "rating.$": 100 } })
    students.updateMany({ }, { $set: { 'rating.$[]': 50 } })

    console.log("db succesfully connected")
})