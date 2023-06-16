import EntradaBE from "../BE/entradaBE";
import EntradaDALC from "../DALC/entradaDALC";

const EntradaBC = {
    listarEntradas():EntradaBE[]|undefined{
        return EntradaDALC.listarEntradas();
    },
};
export default EntradaBC;