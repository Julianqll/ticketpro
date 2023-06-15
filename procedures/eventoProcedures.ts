import { gql } from '@apollo/client';
//Procedure Listar Roles
const GET_EVENTS = gql`
  query GetEvents{
    eventos{
        eventoId
        nombre
        fecha
        descripcion
        lugar
        promotoraId
        categoriaId
        estado
    }
  }
`;

export default GET_EVENTS;