import RolBE from "../BE/rolBe";
import { useQuery } from '@apollo/client';
import GET_ROLS from "../procedures/rolProcedures";

const RolDALC = {
    listarRoles(): RolBE[]{
        const {error,data} = useQuery(GET_ROLS);
        let roles: RolBE[] = [];
        if(error) return roles;
        if(data)
        {
            for(const rol of data.rol)
            {
                const nuevoRol: RolBE = {
                    rolId: rol.rolId,
                    nombre: rol.nombre,
                    descripcion: rol.descripcion,
                    estado: rol.estado
                };

                roles.push(nuevoRol);
            }
        }
        return roles;
    }
}

export default RolDALC;