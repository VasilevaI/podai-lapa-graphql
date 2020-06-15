export default `

    input AnimalInput {
        _id: String!
        name: String!
        kind: String!
        imageUrl:String!
        sex: String!
        age: Float!
        city: String!
        author: String!
        phone: String!
        info: String!
    }

    type Animal {
        _id: String!
        name: String!
        kind: String!
         imageUrl:String!
        sex: String!
        age: Float!
        city: String!
        author: String!
        phone: String!
        info: String!
    }

    type Query {
        animal(_id: String!): Animal
        animals: [Animal]
    }

    type Mutation {
        addAnimal( name: String!, kind: String!,imageUrl:String!, sex: String!, age: Float!, city: String!, author: String!,  phone: String!, info: String!): Animal
        deleteAnimal(_id: String!): Animal
        editAnimal(_id: String!, name: String!, kind: String!,imageUrl:String!, sex: String!, age: Float!, city: String!, author: String!,  phone: String!, info: String!): Animal
    }

`