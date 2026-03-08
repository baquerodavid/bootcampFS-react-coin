import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;