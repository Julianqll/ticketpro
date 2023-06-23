import BoletaBE from "../BE/boletaBE";
import { useQuery } from "@apollo/client";
import GET_BOLETAS from "../procedures/boletaProcedures";

const BoletaDALC = {
    listarBoletas():BoletaBE[]{
        const {error,data} = useQuery(GET_BOLETAS);
        let boletas: BoletaBE[] = [];
        if(error) return boletas;
        if(data)
        {
            for(const boleta of data.boleta)
            {
                const nuevaBoleta: BoletaBE = {
                    boletaId:boleta.boletaId,
                    numeroBoleta:boleta.numeroBoleta,
                    fechaCompra:boleta.fechaCompra,
                    totalPagar:boleta.totalPagar,
                    estado:boleta.estado,
                    usuarioId:boleta.usuarioId
                };
            }
        }
        return boletas;
    }
}

export default BoletaDALC;