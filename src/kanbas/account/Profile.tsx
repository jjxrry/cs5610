import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export const Profile = () => {
    const [profile, setProfile] = useState<any>({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser } = useSelector((state: any) => state.accountReducer)
    const fetchProfile = () => {
        if (!currentUser) return navigate("/kanbas/account/signin")
        setProfile(currentUser)
    }
    const signout = () => {
        dispatch(setCurrentUser(null))
        navigate("/kanbas/account/signin")
    }
    useEffect(() => { fetchProfile() }, [])

    return (
        <div id="wd-profile-screen" style={{ width: "400px" }}>
            <h3>Profile</h3>
            {profile && (
                <div>
                    <input defaultValue={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                        id="wd-username" className="form-control mb-2" />
                    <input defaultValue={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                        id="wd-password" className="form-control mb-2" />
                    <input defaultValue={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        id="wd-firstname" className="form-control mb-2" />
                    <input defaultValue={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                        id="wd-lastname" className="form-control mb-2" />
                    <input defaultValue={profile.dob} onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                        id="wd-dob" className="form-control mb-2" />
                    <input defaultValue={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        id="wd-email" className="form-control mb-2" />
                    <select onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                        id="wd-role" className="form-control mb-2">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">Sign out</button>
                </div>
            )}
        </div>
    )
}
