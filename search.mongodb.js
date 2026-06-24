use('ecommerce');

db.products.insertOne({
  name: "Wireless Earbuds",
  price: 59.99,
  category: "Electronics",
  stock: 100
});

db.products.find({
    category: "Electronics"
}).sort({price: -1});

db.orders.find(
  { status: "Processing" }, 
  {
    _id: 0,
    orderNumber: 1,
    customerName: 1,
    totalAmount: 1
  }
);

db.products.find({
    price:{ $gte : 50, $lte : 150}
})
.sort({ratings: -1}).limit(5);


db.products.find({},{_id: 0, name: 1, price: 1});


// either from home category or stock less than equal to 50

db.products.find({$or: [{category:"Home"}, {stock: {$lte : 50}}]});

db.products.updateOne({name: "Mechanical Keyboard"}, {$set:{price:229}})

db.products.updateMany({name: "Wireless Mouse"},{$push: {tags:"sleek"}});

db.products.find();























