import './style.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/settings" className="nav-link">Settings</Link>
    </>
  )
}
export default Header;