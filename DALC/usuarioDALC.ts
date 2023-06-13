import UsuarioBE from "../BE/usuarioBE";
import { useQuery } from '@apollo/client';
import GET_USERS from "../procedures/usuarioProcedures";


const UsuarioDALC = {
    listarUsuarios(): UsuarioBE[] {
        const {error, data } = useQuery(GET_USERS);
        let usuarios: UsuarioBE[] = [];
        if (error) return usuarios;
        if (data){
            for (const usuario of data.usuario) {
                const nuevoUsuario: UsuarioBE = {
                  usuarioId: usuario.usuarioId,
                  nombre: usuario.nombre,
                  apellido: usuario.apellido,
                  email: usuario.email,
                  contrasena: usuario.contrasena,
                  direccion: usuario.direccion,
                  telefono: usuario.telefono,
                  rol: usuario.rol,
                  estado: usuario.estado
                };
              
                usuarios.push(nuevoUsuario);
              }
          return usuarios;
        }

    },
}

export default UsuarioDALC;