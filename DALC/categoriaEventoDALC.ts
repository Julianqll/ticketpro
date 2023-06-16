import CategoriaEventoBE from '../BE/categoriaEventoBE';
import { useQuery } from '@apollo/client';
import GET_CATEGORIA from '../procedures/CategoriaEventoProcedures';

const CategoriaEventoDALC = {
    listarCategoriasEvento():CategoriaEventoBE[]{
        const {error,data} = useQuery(GET_CATEGORIA);
        let categoriasEvento: CategoriaEventoBE[] = [];
        if(error) return categoriasEvento;
        if(data)
        {
            for(const categoriaEvento of data.categoriaEvento)
            {
                const nuevaCategoriaEvento: CategoriaEventoBE = {
                    categoriaEventoId:categoriaEvento.categoriaEventoId,
                    nombre:categoriaEvento.nombre,
                    descripcion:categoriaEvento.descripcion,
                    estado:categoriaEvento.estado
                };
                categoriaEvento.push(nuevaCategoriaEvento);
            }
        }
        return categoriasEvento;
    }
}

export default CategoriaEventoDALC;