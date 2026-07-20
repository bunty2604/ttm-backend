const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/team_task_manager",)       

.then(() => {
  console.log("Connected");
})
.catch((err) => {
  console.log(err);
});


const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});


const User = mongoose.model('User', schema);

module.exports = User;
