import { Link } from "react-router-dom";
// import { useLocation } from "react-router";

export const TOC = () => {
    return (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/labs">Labs</Link>
        </li>
        <li className="nav-item"><Link to="/labs/lab1">Lab 1</Link>
        </li>
        <li className="nav-item"><Link to="/labs/lab2">Lab 2</Link>
        </li>
        <li className="nav-item"><Link to="/labs/lab3">Lab 3</Link>
        </li>
        <li className="nav-item"><Link to="/kanbas">Kanbas</Link>
        </li>
      </ul>
    );
  }
  