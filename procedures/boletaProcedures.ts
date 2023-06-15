import { gql } from '@apollo/client';
//Procedure Listar Roles
const GET_BOLETAS = gql`
  query GetBoletas{
    boleta{
        boletaId
        numeroBoleta
        fechaCompra
        totalPagar
        estado
        usuarioId
    }
  }
`;

export default GET_BOLETAS;