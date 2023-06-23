import EventoBE from "../BE/eventoBE";
import { useQuery } from '@apollo/client';
import GET_EVENTS from "../procedures/eventoProcedures";

const EventoDALC = {
    listarEventos():EventoBE[]{
        const {error,data} = useQuery(GET_EVENTS);
        let eventos: EventoBE[] = [];
        if(error) return eventos;
        if(data)
        {
            for(const evento of data.evento)
            {
                const nuevoEvento: EventoBE = {
                    eventoId:evento.eventoId,
                    nombre:evento.nombre,
                    fecha:evento.fecha,
                    descripcion:evento.descripcion,
                    lugar:evento.lugar,
                    promotoraId:evento.promotoraId,
                    categoriaId:evento.categoriaId,
                    estado:evento.estado

                };
                evento.push(nuevoEvento);
            }
        }
        return eventos;
    }
}

export default EventoDALC;