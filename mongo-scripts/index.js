// time-to-live index can be use for remove document from a collection after a certain amount of time specified
// only works for date types field
db.eventlog.createIndex( { "lastModifiedDate": 1 }, { expireAfterSeconds: 3600 } )

// working with unique index
db.restaurants.createIndex(
   { cuisine: 1, name: 1 },
   { unique: true }
)

// sparse index
// Sparse indexes only contain entries for documents that have the indexed field, even if the index field contains a null value. 
// The index skips over any document that is missing the indexed field. The index is "sparse" because it does not include all documents of a collection
db.addresses.createIndex( { "xmpp_id": 1 }, { sparse: true } )

// only index the document that meet the filter condition
// working with partial index
db.restaurants.createIndex(
   { cuisine: 1, name: 1 },
   { partialFilterExpression: { rating: { $gt: 5 } } }
)

// query with partial index
db.restaurants.find( { cuisine: "Italian", rating: { $gte: 8 } } )

// Create index at category in products collection
db.products.createIndex({
    category: 1
});

// Get all indexes in products collection
db.products.getIndexes();

// Find products by category (will use index)
db.products.find({
    category: "food"
});

// Debugging query optimization
db.products.find({
    category: "food"
}).explain();
db.products.find({}).sort({
    category:1
}).explain();

// Create index at price and tags in products collection
db.products.createIndex({
    stock: 1,
    tags: 1
});

// Find products by stock and tags (will use index)
db.products.find({
    stock: 10,
    tags: "popular"
});

// Debugging query optimization
db.products.find({
    stock: 10
}).explain();
db.products.find({
    stock: 10,
    tags: "popular"
}).explain();
db.products.find({
    tags: "popular"
}).explain();
