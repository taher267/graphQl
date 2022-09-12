import { gql } from '@apollo/client';

export const PRODUCTS_QRY = gql`
  query getProducts($page: Int!, $limit: Int!) {
    products(page: $page, limit: $limit) {
      id
      name
      slug
      permalink
      date_created
      sku
      price
      regular_price
      sale_price
      description
      stock_status
      tags {
        id
        name
        slug
      }
      categories {
        id
        name
        slug
      }
      images {
        id
        src
        name
      }
      attributes {
        id
        visible
        options
      }
      _links {
        self {
          href
        }
        collection {
          href
        }
      }
    }
  }
`;

export const CATEGORIES_QRY = gql`
  {
    categories {
      id
      name
      slug
      parent
      description
      display
      image
      menu_order
      count
    }
  }
`;
