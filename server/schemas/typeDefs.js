const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCont: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String] description: String! bookId: ID!, image: String! link: String!): User
    deleteBook(book: String!): User
  }
`;

module.exports = typeDefs;