const { MongoClient } = require("mongodb");
const config = require("../../config.json");
const url = config.mongoDBUrl || "";
const basicClient = new MongoClient(url);

const getCollection = async (collectionName, dbName = config.dbName || "") => {
    await basicClient.connect();
    const db = basicClient.db(dbName);
    const collection = db.collection(collectionName);

    return collection;
};

module.exports = { basicClient, getCollection };
