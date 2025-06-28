const { Schema, default: mongoose } = require("mongoose");

const userSchema = Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = Schema({
    email: { type: email, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = Schema({
    title: String,
    descriptiom: String,
    price: Number,
    imageURL: String,
    creatorID: ObjectID
});

const purchaseSchema = Schema({

});

const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const courseModel = mongoose.Model("course", courseSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);