// method
// $eq = equal
//  $ne = not equal
//  $gt = lebih besar dari
//  $gte = lebih besar dari sama dengan / greater than equal
// $lt = lebih kecil dari
//  $lte = lebih kecil dari sama dengan
//  $in = membandingkan value dengan value yang ada di array
//  $nin = membandingkan value dengan value yang tidak ada di array

// select * from customers where _id = 'khannedy'
db.customers.find({
    _id: {
        $eq: "khannedy"
    }
});

// select * from products where price > 1000
db.products.find({
    price: {
        $gt: 1000
    }
});

// insert product documents
db.products.insertMany([
    {
        _id: 3,
        name: "Pop Mie Rasa Bakso",
        price: new NumberLong(2500),
        category: "food"
    },
    {
        _id: 4,
        name: "Samsung Galaxy S9+",
        price: new NumberLong(10000000),
        category: "handphone"
    },
    {
        _id: 5,
        name: "Acer Precator XXI",
        price: new NumberLong(25000000),
        category: "laptop"
    }
]);

// select * from products where category in ('handphone', 'laptop') and price > 5000000
db.products.find({
    category: {
        $in: ["handphone", "laptop"]
    },
    price: {
        $gt: 5000000
    }
});