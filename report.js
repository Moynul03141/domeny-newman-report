const newman = require('newman'); 
require('dotenv').config();
newman.run({
//collection: require('./collection/dmoney.json'),
collection: `https://api.postman.com/collections/32547093-b313f458-157f-4e75-af98-f621dd306010?access_key=${process.env.ACCESS_KEY}`,

reporters: 'htmlextra',
iterationCount: 1,
reporter: {
    htmlextra: {
        export: './Reports/report.html'
        },
}
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});