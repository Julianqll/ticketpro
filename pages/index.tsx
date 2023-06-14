import React from 'react'
import UsuarioBC from  "../BC/usuarioBC";
import { CardsCarousel } from '../components/CardsCarousel';
import { GridDisplay } from '../components/GridDisplay';
import { Hero } from '../components/Hero';


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
    <GridDisplay></GridDisplay>
    <Hero></Hero>

    </div>
    
  );
}

export default HomePage