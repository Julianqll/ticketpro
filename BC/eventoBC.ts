import EventoBE from "../BE/eventoBE";
import EventoDALC from "../DALC/eventoDALC";

const EventoBC = {
    listarEventos():EventoBE[]| undefined{
        return EventoDALC.listarEventos();
    },
};

export default EventoBC;