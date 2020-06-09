import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Animal from "./Animal";

const typeDefs = [User, Animal];

export default mergeTypes(typeDefs, {all: true});