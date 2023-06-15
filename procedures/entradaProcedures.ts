import { gql } from '@apollo/client';
//Procedure Listar Roles
const GET_ENTRADAS = gql`
  query GetEntradas{
    entrada{
        entradaId
        eventoId
        boletaId
        descripcion
        precio
        usuarioId
    }
  }
`;

export default GET_ENTRADAS;