import React from 'react'
import { ApolloProvider} from "@apollo/react-hooks"
import cliente from '../graphql/cliente';
import { useQuery } from '@apollo/client';
import GET_USERS from '../procedures/usuarioProcedures';
import UsuarioBC from  "../BC/usuarioBC";



const DisplayUsers = () => {

  let usuarios = UsuarioBC.listarUsuarios();
  if (usuarios != undefined){
    return (
      <>
        {usuarios.map(usuario => (
          <div key={usuario.usuarioId}>
            <h3>{usuario.nombre} {usuario.apellido}</h3>
          </div>
        ))}
      </>
    );
  }
  else{
    return(
      <div>Cargando usuarios...</div>
    );
  }

}

const HomePage = () => {

  return (
    <ApolloProvider client={cliente}>
    <div>
      <div>Platzi and Next.js!</div>
      <DisplayUsers></DisplayUsers>
    </div>
    </ApolloProvider>
  );
}

export default HomePage