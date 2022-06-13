// select * from products where category in ('laptop', 'handphone') and price > 20000000
// $and = kedua value harus true utk hasil yang true
//  $or = salah satu value bernilai true maka hasilnya true

db.products.find({
    $and: [
        {
            category: {
                $in: ["laptop", "handphone"]
            }
        },
        {
            price: {
                $gt: 20000000
            }
        }
    ]
});

// select * from products where category not in ('laptop', 'handphone')
db.products.find({
    category: {
        $not: {
            $in: ["laptop", "handphone"]
        }
    }
});

// select * from products where price between 10000000 and 20000000 and category != 'food'
db.products.find({
    $and: [
        {
            price: {
                $gte: 10000000,
                $lte: 20000000
            }
        },
        {
            category: {
                $ne: 'food'
            }
        }
    ]
});