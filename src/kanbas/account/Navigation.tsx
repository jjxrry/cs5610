import { Link } from "react-router-dom";
export const AccountNavigation = () => {
  return (
    <div id="wd-account-navigation">
      <Link to={`/kanbas/account/signin`}  > Signin  </Link> <br/>
      <Link to={`/kanbas/account/signup`}  > Signup  </Link> <br/>
      <Link to={`/kanbas/account/profile`} > Profile </Link> <br/>
    </div>
);}
