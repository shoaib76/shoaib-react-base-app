const { ApolloServer, gql } = require('apollo-server');

const Students = [
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
const typeDefs = gql`
  
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  
  type Query {
    Students: [Student]
  }
`;

const resolvers = {
    Query: {
      Students: () => Students,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});