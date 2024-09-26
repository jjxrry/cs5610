import { FaCircle } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
export const CrossedOut = () => {
  return (
    <span className="me-1 position-relative">
      <ImCancelCircle style={{ top: "2px" }}
        className=" me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
);}