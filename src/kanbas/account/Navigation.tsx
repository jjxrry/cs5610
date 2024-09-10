import { Link } from "react-router-dom";
export const AccountNavigation = () => {
  return (
    <div id="wd-account-navigation">
      <Link to={`/kanbas/account/Signin`}  > Signin  </Link> <br/>
      <Link to={`/kanbas/account/Signup`}  > Signup  </Link> <br/>
      <Link to={`/kanbas/account/Profile`} > Profile </Link> <br/>
    </div>
);}
