import UsuarioBE from "../BE/usuarioBE";
import UsuarioDALC from "../DALC/usuarioDALC";

const UsuarioBC = {
     listarUsuarios(): UsuarioBE[] | undefined {
        return UsuarioDALC.listarUsuarios();
    },

    añadirUsuario: (addUser, usuario) => {
      UsuarioDALC.añadirUsuario(addUser, usuario);
    },

    login(loginUser, email, password) {
      return UsuarioDALC.login(loginUser, email, password);
  },
  };

export default UsuarioBC;