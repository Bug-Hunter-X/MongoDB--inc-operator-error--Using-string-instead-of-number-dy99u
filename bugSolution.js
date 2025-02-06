```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne( { "_id": ObjectId("650b1992f15817e1a79a57c2") }, { $inc: { "counter": 10 } });
```