const app = require('./app/app.js');
const mongoose = require('mongoose');

const port = 3000;


mongoose.connect('mongodb+srv://AllYouCanOrder:ilnostrosito@cluster0.qjbuz.mongodb.net/AllYouCanOrder?retryWrites=true&w=majority')
.then ( () => {
    
    console.log("Connected to Database");
    
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
    
});