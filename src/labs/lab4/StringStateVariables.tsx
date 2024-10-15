import { useState } from "react";

export const StringStateVariables = () => {
    const [firstName, setFirstName] = useState("John")
    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            <input
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            <hr />
        </div>
    )
}
