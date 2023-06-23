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
import { HeroBuy } from '../components/HeroBuy';


const BuyPage: NextPageWithLayout  = () => {
  return (
    <div>
    <HeroBuy></HeroBuy>
    </div>
  );
}

BuyPage.getLayout = function getLayout(page: ReactElement){
  return (
    
        <Layout>
            {page}
        </Layout>
  )
}

export default BuyPage