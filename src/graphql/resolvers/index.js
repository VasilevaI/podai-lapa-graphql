import {mergeResolvers} from "merge-graphql-schemas";
import User from "./User";
import Animal from "./Animal";

const resolvers = [User, Animal];

export default mergeResolvers(resolvers);