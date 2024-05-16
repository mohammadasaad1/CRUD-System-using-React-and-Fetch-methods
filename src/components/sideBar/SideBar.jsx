import { Link } from "react-router-dom";
import "../../App.css";
function SideBar() {
  return (
    <>
      <div>
        <h1 className="text-center">SideBar</h1>
        <ul className="list-unstyled text-center">
          <li className="my-3 p-3">
            <Link to="/products">get all products</Link>
          </li>
          <li className="my-3 p-3">
            <Link to="/categories">get all categories</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default SideBar;
