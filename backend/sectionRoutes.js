const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;

let sectionRoutes = express.Router();

// Get all sections

sectionRoutes.route("/sections").get(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection("sections").find({}).toArray();
    if(data.length > 0) {
        res.json(data);
    }
    else {
        throw new Error("No sections found");
    }
});

// Get one section
sectionRoutes.route("/sections/:id").get(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection("sections").findOne({ _id: new ObjectId(req.params.id) });
    if(Object.keys(data).length > 0) {
        res.json(data);
    }
    else {
        throw new Error("No sections found");
    }
});

module.exports = sectionRoutes;