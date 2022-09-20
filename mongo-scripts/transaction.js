// TRANSACTIONS ( provides an atimicity on multi-document in a single or multiple collection (atomicity : "all or nothing" )
// we can create a collection and index on transaction ( read preferrence must be "local" when explicitly create a collection or index)
// write/read preferrence is on transaction level ( write/read preferrence on collection level are ignored ) 


// Setting replication
rs.initiate(
  {
    _id : 'my-mongo-set',
    members: [
      { _id : 0, host : "mongo1:27017" },
      { _id : 1, host : "mongo2:27017" },
      { _id : 2, host : "mongo3:27017" }
    ]
  }
)

// Create collection
db.createCollection("products");
db.createCollection("orders");

// Insert products
db.products.insertMany([
    {
        _id: 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong(2000),
        quantity: 10
    },
    {
        _id: 2,
        name: "Mie Sedap",
        price: new NumberLong(2000),
        quantity: 10
    }
]);

// Sample abort transaction
var session = db.getMongo().startSession( { readPreference: { mode: "primary" } } );
session.startTransaction( { readConcern: { level: "majority" }, writeConcern: { w: "majority" } } );
session.getDatabase("test").orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        },
        {
            product_id: 2,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        }
    ]
});
session.getDatabase("test").products.updateOne({
    _id: 1
}, {
    $inc: {
        quantity: -2
    }
});
session.getDatabase("test").products.updateOne({
    _id: 2
}, {
    $inc: {
        quantity: -2
    }
});
session.abortTransaction();
session.endSession();


// Sample commit transaction
var session = db.getMongo().startSession( { readPreference: { mode: "primary" } } );
session.startTransaction( { readConcern: { level: "majority" }, writeConcern: { w: "majority" } } );
session.getDatabase("test").orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        },
        {
            product_id: 2,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        }
    ]
});
session.getDatabase("test").products.updateOne({
    _id: 1
}, {
    $inc: {
        quantity: -2
    }
});
session.getDatabase("test").products.updateOne({
    _id: 2
}, {
    $inc: {
        quantity: -2
    }
});
session.commitTransaction();
session.endSession();
