import BoletaBE from "../BE/boletaBE";
import BoletaDALC from "../DALC/boletaDALC";

const BoletaBC = {
    listarBoletas():BoletaBE[]|undefined{
        return BoletaDALC.listarBoletas();
    },
};

export default BoletaBC;