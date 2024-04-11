// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const path = require('path');

// let app = express();

// // mongoose.connect("mongodb+srv://anupdangi28:Anup@987@654@321@farmerapp.wvtyycy.mongodb.net/FarmerApp");
 
// // Creating the data schema
// const notesSchema = {
//     username: String,
//     password: String
// };
// const Note = mongoose.model("Note", notesSchema);

// let publicPath = path.join(__dirname, 'customer');
// console.log(publicPath);

// // Serve static files from the 'public' directory
// app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.sendFile(`${publicPath}/customer.html`);
// }); 

// app.get('/catagories ', (req, res) => {
//     res.sendFile(`${publicPath}/catagories.html`);
// });
// app.get('/about ', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// });
// // app.get('/catagories ', (req, res) => {
// //     res.sendFile(`${publicPath}/.html`);
// // });

// app.get('/Become a Supplier', (req, res) => {
//     res.sendFile(`${publicPath}/supp.html`);
// });
// app.listen(2201);