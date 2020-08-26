const { ApolloServer, gql } = require('apollo-server');

let students = [
  {
    "id": 1,
    "name": "Shoaib",
    "email": "shoaib@gmail.com",
    "age": 40
  },

  {
    "id": 2,
    "name": "Saeed",
    "email": "saeed@gmail.com",
    "age": 40
  },

  {
    "id": 3,
    "name": "Asif",
    "email": "asif@gmail.com",
    "age": 50
  }
]


const resolvers = {
  Query: {
    students: () => students,
  },

  Mutation: {
    addStudent: (_, { input }) => {

      students.push(
        {
          id: input.id,
          name: input.name,
          email: input.email,
          age: input.age
        }
      )
      return {
        id: input.id,
        name: input.name,
        email: input.email,
        age: input.age
      }
    }
  }
};
const typeDefs = gql`
  
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  input StdInput {
    id: Int
    name: String
    email: String
    age: Int
  }

  
  type Query {
    students: [Student]
  }

  type Mutation {
    addStudent(input: StdInput): Student
  
  }

  `;





const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});