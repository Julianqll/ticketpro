import { gql } from '@apollo/client';
//Procedure Listar Roles
const GET_ROLS = gql`
  query GetRols{
    rol{
        rolId
        nombre
        descripcion
    }
  }
`;


//Check
//Create Rol
const POST_ROL = gql`
  mutation PostRol($rolInput: RolInput!) {
    postRol(input: $rolInput) {
      rolId
      nombre
      descripcion
    }
  }
`;
//Update
const PUT_ROL = gql`
  mutation UpdateRol($rolId: ID!, $rolInput: RolInput!) {
    updateRol(id: $rolId, input: $rolInput) {
      rolId
      nombre
      descripcion
    }
  }
`;
//Delete
const DELETE_ROL = gql`
  mutation DeleteRol($rolId: ID!) {
    deleteRol(id: $rolId) {
      rolId
    }
  }
`;




export default GET_ROLS;
