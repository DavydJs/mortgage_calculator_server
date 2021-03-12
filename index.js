const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const mongoose = require('mongoose');
const PORT = config.get('port') || 3012;

const app = express();
app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/bank', require('./routes/bank'));


async function start ( ) {
    try {
       await mongoose.connect(config.get('mongoUri'),{useNewUrlParser:true, useUnifiedTopology:true});
       app.listen(PORT,() => console.log(`Server has been started on port ${PORT}`));
    } catch (e) {
            console.log('Server Error',e.message);
            process.exit(1);
        } 
}
start();
// app.delete('/cars/:id',(req,res) => {
//     cars = cars.filter((car) => car.id !== Number(req.params.id));
//     res.sendStatus(200);
// });
// app.get('/cars/:id',(req,res) =>res.send(cars.find((car) => car.id === Number(req.params.id ))));