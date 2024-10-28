import { Link } from "react-router-dom";
export const Signin = () => {
  return (
    <div id="wd-signin-screen" style={{ width: "400px" }}>
        <h3>Sign in</h3>
        <input id="wd-username" placeholder="username" className="form-control mb-2"/>
        <input id="wd-password" placeholder="password" type="password" className="form-control mb-2"/>
        <Link id="wd-signin-btn" to="/kanbas/dashboard" className="btn btn-primary w-100 mb-2">
            Sign In
        </Link>
        <Link  id="wd-signup-link" to="/kanbas/account/signup">
        Sign up
        </Link>
    </div>
);}
