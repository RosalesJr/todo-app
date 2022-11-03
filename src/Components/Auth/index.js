import { useContext } from "react";
import { When } from "react-if";
import { AuthContext } from "../../Context/Auth/Auth";

const Auth = ({ capability, children }) => {
  const { can, loggedIn } = useContext(AuthContext);

  return (
    <When condition={loggedIn && can(capability)}>
      {children}
    </When>
  )
}

export default Auth;
