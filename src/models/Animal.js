import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    }
})

const Animal = mongoose.model("Animal", AnimalSchema);

export default Animal;