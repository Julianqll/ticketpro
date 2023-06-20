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


const EventsTypePage: NextPageWithLayout  = () => {
  return (
    <div>
    <GridDisplay></GridDisplay>
    </div>
  );
}

EventsTypePage.getLayout = function getLayout(page: ReactElement){
  return (
    <ApolloProvider client={cliente}>
        <Layout>
            {page}
        </Layout>
    </ApolloProvider>
  )
}

export default EventsTypePage