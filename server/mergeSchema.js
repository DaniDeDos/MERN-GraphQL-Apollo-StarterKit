import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { glob } from "glob";

let resolversPaths = glob.sync("data/*/*-resolver.js");
let registerResolvers = [];
for (const resolverPath of resolversPaths) {
  registerResolvers = [
    ...registerResolvers,
    (await import("./" + resolverPath)).default,
  ];
}

let typesPaths = glob.sync("data/*/*-type.js");
let registerTypes = [];
for (const typesPath of typesPaths) {
  registerTypes = [...registerTypes, (await import("./" + typesPath)).default];
}

const typeDefs = mergeTypeDefs(registerTypes);
const resolvers = mergeResolvers(registerResolvers);

export { typeDefs, resolvers };
