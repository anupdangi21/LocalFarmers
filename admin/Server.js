// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect("mongodb+srv://anupdangi28:Anup987%40654%40321@farmerapp.wvtyycy.mongodb.net/FarmerApp");
 
// // Creating the data schema
// const notesSchema = {
//     username: String,
//     password: String
// };
// const Note = mongoose.model("Note", notesSchema);

// // Serving the HTML file
// app.get("/customer/signin.html", function(req, res){
//     res.sendFile(__dirname + '/signin.html');   
// });

// // Handling form submission
// app.post("/", function(req, res){
//     let newNote = new Note({
//         username: req.body.username,
//         password: req.body.password
//     });
//     newNote.save()
//         .then(() => {
//             res.send('Data saved successfully');
//         })
//         .catch((err) => {
//             res.status(500).send('Error saving data: ' + err);
//         });
// });

// // Start the server
// const port = 5501;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
