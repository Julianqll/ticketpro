import React from 'react'
import UsuarioBC from  "../BC/usuarioBC";
import { CardsCarousel } from '../components/CardsCarousel';
import { GridDisplay } from '../components/GridDisplay';
import { Hero } from '../components/Hero';
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from '../components/Layout';
import cliente from '../graphql/cliente';

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

const HomePage: NextPageWithLayout  = () => {
  return (
    <div>
    <CardsCarousel></CardsCarousel>    
    <GridDisplay></GridDisplay>
    <Hero></Hero>
    </div>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement){
  return (
        <Layout>
            {page}
        </Layout>
  )
}

export default HomePage