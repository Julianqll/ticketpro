import UsuarioBE from "../BE/usuarioBE";
import { useQuery, useMutation } from '@apollo/client';
import {ADD_USER, GET_USERS} from "../procedures/usuarioProcedures";
import { notifications } from "@mantine/notifications";


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
                  dni: usuario.dni,
                  contrasena: usuario.contrasena,
                  direccion: usuario.direccion,
                  telefono: usuario.telefono,
                  rolId: usuario.rol,
                  estado: usuario.estado
                };
              
                usuarios.push(nuevoUsuario);
              }
          return usuarios;
        }

    },
    añadirUsuario: async (addUser, usuario) => {
      try {
        await addUser({ variables: { input: usuario } });
      } catch (error) {
        if (error.message.includes('duplicate key value violates unique constraint "usuario_dni_email_telefono_key"')) {
          notifications.show({
            title: 'Error',
            message: 'Usted ya está registrado',
          });
        } else {
          notifications.show({
            title: 'Error',
            message: 'Ha ocurrido un error al agregar el usuario',
          });
        }
      }
    },
}

export default UsuarioDALC;