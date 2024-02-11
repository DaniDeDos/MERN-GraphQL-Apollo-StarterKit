import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

// Importa manualmente cada archivo de resolver y tipo
import SaludoResolver from "./schema/saludo-resolver.js";
import SaludoType from "./schema/saludo-type.js";

// Crea arrays para agrupar los resolvers y typeDefs
const resolversArray = [SaludoResolver];
const typeDefsArray = [SaludoType];

// Realiza el merge de los resolvers y typeDefs
const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);

// Exporta los resultados
export { typeDefs, resolvers };
