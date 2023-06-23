import EntradaBE from "../BE/entradaBE";
import { useQuery } from '@apollo/client';
import GET_ENTRADAS from "../procedures/entradaProcedures";

const EntradaDALC = {
    listarEntradas():EntradaBE[]{
        const {error,data} = useQuery(GET_ENTRADAS);
        let entradas: EntradaBE[] = [];
        if(error) return entradas;
        if(data)
        {
            for(const entrada of data.entrada)
            {
                const nuevaEntrada: EntradaBE = {
                    entradaId:entrada.entradaId,
                    eventoId:entrada.eventoId,
                    boletaId:entrada.boletaId,
                    descripcion:entrada.descripcion,
                    precio:entrada.precio,
                    usuarioId:entrada.usuarioId
                };
                entrada.push(nuevaEntrada);
            }
        }
        return entradas;
    }
}

export default EntradaDALC;