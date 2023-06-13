import UsuarioBE from "../BE/usuarioBE";
import UsuarioDALC from "../DALC/usuarioDALC";

const UsuarioBC = {
     listarUsuarios(): UsuarioBE[] | undefined {
        return UsuarioDALC.listarUsuarios();
    },
  };

export default UsuarioBC;