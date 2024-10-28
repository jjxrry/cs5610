import { Link } from "react-router-dom";
export const AccountNavigation = () => {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-3">
      <Link to={`/kanbas/account/signin`}  className="list-group-item active border border-0"> Signin  </Link>
      <Link to={`/kanbas/account/signup`}  className="list-group-item text-danger border border-0"> Signup  </Link>
      <Link to={`/kanbas/account/profile`} className="list-group-item text-danger border border-0"> Profile </Link>
    </div>
);}
