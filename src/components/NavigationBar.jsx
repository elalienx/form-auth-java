import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" - "}
      <Link to="/login">Login</Link>
      {" - "}
      <Link to="/sign-up">Sign up</Link>
    </nav>
  );
}
