const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provid name"],
    minlength: 3,
    maxlength: 40,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "please provid email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provid password"],
    minlength: 4,
  },
});

TaskSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next()
});

TaskSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
  
}

TaskSchema.methods.comparePassword = async function (candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model("user", TaskSchema);
