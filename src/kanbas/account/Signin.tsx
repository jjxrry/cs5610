import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../database"

export const Signin = () => {
    const [credentials, setCredentials] = useState<any>({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signin = () => {
        const user = db.users.find(
            (u: any) => u.username === credentials.username && u.password === credentials.password
        )
        if (!user) return
        dispatch(setCurrentUser(user))
        navigate("/kanbas/dashboard")
    }

    return (
        <div id="wd-signin-screen" style={{ width: "400px" }}>
            <h3>Sign in</h3>
            <input defaultValue={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                id="wd-username" placeholder="username" className="form-control mb-2" />
            <input defaultValue={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                id="wd-password" placeholder="password" type="password" className="form-control mb-2" />
            <button onClick={signin} id="wd-signin-btn" to="/kanbas/dashboard" className="btn btn-primary w-100 mb-2">
                Sign In
            </button>
            <Link id="wd-signup-link" to="/kanbas/account/signup">
                Sign up
            </Link>
        </div>
    );
}
