import { gql } from '@apollo/client';
//Procedure Listar Roles
const GET_CATEGORIA = gql`
  query GetCategoria{
    categoriaEvento{
        categoriaEventoId
        nombre
        descripcion
        estado
    }
  }
`;

export default GET_CATEGORIA;