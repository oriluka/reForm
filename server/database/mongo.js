
const {MongoClient} = require('mongodb')

const db = new MongoClient('mongodb://localhost:27017', {
    userNewUrlParser: true,
    useUnifiedTopology: true
});

db.connect(err => {
    if (err) {
        console.log('An error has occured trying to connect to mongo: ', err)
    }
    console.log('Connection successful!');
})

module.exports = db;