import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema'
import rootResolver from './resolvers'
import directives from './directives'

export default function schema() {
  return makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: rootResolver(),
    schemaDirectives: directives
  })
}
