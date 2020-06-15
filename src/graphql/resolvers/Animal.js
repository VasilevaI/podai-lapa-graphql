import Animal from "../../models/Animal";
import { response } from "express";

export default {
    Query: {
        animal: (root, args) => {
            return new Promise((resolve, reject) => {
                Animal.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        animals: () => {
            return new Promise((resolve, reject) => {
                Animal.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addAnimal: (root, {name, kind, imageUrl,sex, age, city, author, phone, info}) => {
            const newAnimal = new Animal({name, kind, imageUrl,sex, age, city, author, phone, info});
            return new Promise((resolve, reject) => {
                newAnimal.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteAnimal: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Animal.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error): resolve(response);
                })
            })
        },
        editAnimal: (root, {_id, name, kind,imageUrl, sex, age, city, author, phone, info}) => {
            return new Promise((resolve, reject) => {
                Animal.findByIdAndUpdate({_id}, {$set: {name, kind,imageUrl, sex, age, city, author, phone, info}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}