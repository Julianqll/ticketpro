import React from 'react'
import { ApolloProvider} from "@apollo/react-hooks"
import cliente from '../graphql/cliente';
import { useQuery } from '@apollo/client';
import GET_USERS from '../procedures/usuarioProcedures';
import UsuarioBC from  "../BC/usuarioBC";
import { CardsCarousel } from '../components/carousel';
import { FeaturesAsymmetrical } from '../components/cards';
import { HeroBullets } from '../components/hero';
import { FooterLinks } from '../components/footer';
import { Title } from '@mantine/core';


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

    <div>
    <CardsCarousel></CardsCarousel>    
    <FeaturesAsymmetrical></FeaturesAsymmetrical>
    <HeroBullets></HeroBullets>

    </div>
    
  );
}

export default HomePage