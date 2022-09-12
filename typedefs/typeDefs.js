import { gql } from 'apollo-server-express';
export default gql`
  type LinkHref {
    href: String
  }
  type Links {
    self: [LinkHref]
    collection: [LinkHref]
  }
  type Images {
    id: ID
    src: String
    name: String
  }

  type Attrs {
    id: ID
    visible: Boolean
    options: [String]
  }
  type ArrOfObj {
    id: ID
    name: String
    slug: String
  }
  type MainCard {
    title: String
    image: String
  }

  type Animal {
    id: ID!
    title: String!
    image: String!
    rating: Float
    price: Float!
    description: [String!]!
    stock: Int!
    onSale: Boolean
  }
  type Category {
    id: ID
    name: String!
    slug: String!
    parent: Int!
    description: String
    display: String
    image: String
    menu_order: Int!
    count: Int!
  }
  type Product {
    id: ID!
    name: String!
    slug: String
    permalink: String!
    date_created: String
    sku: String
    price: Float!
    regular_price: String
    sale_price: String
    description: String
    stock_status: String
    categories: [ArrOfObj]
    tags: [ArrOfObj]
    images: [Images]
    attributes: [Attrs]
    _links: Links
  }
  type Query {
    products(page: Int, limit: Int): [Product]
    categories: [Category]
    category(id: Int): Category
    singleProduct(id: Int!): Product
    mainCards: [MainCard]
    animals: [Animal]!
    animal(id: Int!): Animal
  }
`;
