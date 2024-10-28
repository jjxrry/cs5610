// import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export const TOC = () => {
    const { pathname } = useLocation();
    return (

      <ul className="nav nav-pills">
        <li className="nav-item">
            <a id="wd-a" href="#/Labs" className="nav-link">
            Labs
            </a>
        </li>
        <li className="nav-item">
            <a id="wd-a1" href="#/labs/lab1"
            className={`nav-link ${pathname.includes("lab1") ? "active" : ""}`}>
            Lab 1
            </a>
        </li>
        <li className="nav-item">
            <a id="wd-a2" href="#/labs/lab2"
            className={`nav-link ${pathname.includes("lab2") ? "active" : ""}`}>
            Lab 2
            </a>
        </li>
        <li className="nav-item">
            <a id="wd-a3" href="#/labs/lab3"
            className={`nav-link ${pathname.includes("lab3") ? "active" : ""}`}>
            Lab 3
            </a>
        </li>
        <li className="nav-item">
            <a id="wd-k" href="#/kanbas" className="nav-link">
            Kanbas
            </a>
        </li>
        <li className="nav-item">
          <a id="wd-github" href="https://github.com/jjxrry/cs5610" className="nav-link">Github Source</a>
        </li>
      </ul>
    );
  }
  