import { gql, useQuery } from '@apollo/client';

export const ANIMAL_QRY = gql`
  query ($id: Int!) {
    animal(id: $id) {
      id
      title
      image
      rating
      price
      description
      stock
      onSale
    }
  }
`;

export const ANIMALS_QRY = gql`
  {
    animals {
      id
      title
      image
      rating
      price
      description
      stock
      onSale
    }
  }
`;
