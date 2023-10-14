import RdflibSolidDemo from "./demo";
import Login from "../login";
import {useSolidAuth} from "@ldo/solid-react";
import Code from "../code";
import demoCode from "./demo/index.tsx?raw";
import IntroSection from "./intro.mdx";
import CodeSection from "./code.mdx";
import Content from "../content";
import usePrism from "../../hooks/usePrism";

export default function RdflibSolid() {
    usePrism();
    const {login, logout, session} = useSolidAuth();

    return <>
        <h1 className="title">rdflib.js with Solid</h1>
        <Content><IntroSection/></Content>
        {session.isLoggedIn ? <>
            <RdflibSolidDemo/>
            <button className="button is-small" onClick={logout}>Log out</button>
        </> : <Login login={login}/>}
        <Content><CodeSection/></Content>
        <Code language={"tsx"}>{demoCode}</Code>
    </>
}