import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import moment from 'moment';

export default function rootResolver() {
  return {
    Query: {
      testQuery(obj, ctx, args, info) { return 'hello world' },
      now() { return moment().toDate() },
      tomorrow() { return moment().add(1, 'days') }
    },
    Date: dateScalar
  }
}

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return moment(value).toDate(); // value from the client
  },
  serialize(value) {
    return moment(value).format(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  }
})