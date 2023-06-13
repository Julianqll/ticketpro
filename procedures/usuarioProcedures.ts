import { gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    usuario {
        usuarioId
        nombre
        apellido
      }
  }
`;

export default GET_USERS;