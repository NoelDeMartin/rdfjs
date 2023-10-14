import Login from "../login";
import InruptDemo from "./demo";
import {useSolidAuth} from "@ldo/solid-react";

export default function Inrupt() {
    const {login, logout, session} = useSolidAuth();

    return (
        <>
            <h1 className="title">Inrupt’s JavaScript client libraries</h1>
            {session.isLoggedIn ? <>
                <InruptDemo/>
                <button className="button is-small" onClick={logout}>Log out</button>
            </> : <Login login={login}/>}
        </>
    )
}