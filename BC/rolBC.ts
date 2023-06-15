import RolBE from "../BE/rolBe";
import RolDALC from "../DALC/rolDALC";

const RolBC = {
    listarRoles(): RolBE[] | undefined{
        return RolDALC.listarRoles();
    },
};

export default RolBC;