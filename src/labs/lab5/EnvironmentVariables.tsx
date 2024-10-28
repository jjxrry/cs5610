// this is the env import call for vite
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const EnvironmentVariables = () => {
    return (
        <div id="wd-environment-variables">
            <h3>Environment Variables</h3>
            <p>Remote Server: {REMOTE_SERVER}</p><hr />
        </div>
    );
}
