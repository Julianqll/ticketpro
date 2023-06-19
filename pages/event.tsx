import React from 'react'
import UsuarioBC from  "../BC/usuarioBC";
import { CardsCarousel } from '../components/CardsCarousel';
import { GridDisplay } from '../components/GridDisplay';
import { HeroTicket } from '../components/HeroTicket';
import { HeroInfo } from '../components/HeroInfo';
import { HeroPrices } from '../components/HeroPrices';
import { HeroConditions } from '../components/HeroConditions';


const TicketPage = () => {

  return (

    <div>
    <HeroTicket></HeroTicket>
    <HeroInfo></HeroInfo>
    <HeroPrices></HeroPrices>
    <HeroConditions></HeroConditions>

    </div>
    
  );
}

export default TicketPage