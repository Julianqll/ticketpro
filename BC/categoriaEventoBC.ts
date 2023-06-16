import CategoriaEventoBE from "../BE/categoriaEventoBE";
import CategoriaEventoDALC from "../DALC/categoriaEventoDALC";

const CategoriaEventoBC = {
    listarCategoriasEvento():CategoriaEventoBE[]|undefined{
        return CategoriaEventoDALC.listarCategoriasEvento();
    },
};

export default CategoriaEventoBC;