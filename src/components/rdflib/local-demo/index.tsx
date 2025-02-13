import {graph, lit, parse, serialize, st} from "rdflib";
import {NAME_NODE, PROFILE_NODE, PROFILE_TURTLE, PROFILE_URI, STORAGE_KEYS} from "../../../constants.ts";
import {useEffect, useMemo, useState} from "react";
import useLocalStorage from "use-local-storage";
import Demo, {FormData} from "../../demo";

export default function RdflibLocalDemo() {
    const store = useMemo(() => graph(), []);
    const [name, setName] = useState("");
    const [turtle, setTurtle] = useLocalStorage(STORAGE_KEYS.PROFILE_RDFLIB, PROFILE_TURTLE);

    useEffect(() => {
        if (!store) return;
        parse(turtle, store, PROFILE_URI, "text/turtle", (_, updatedStore) => {
            const name = updatedStore?.any(PROFILE_NODE, NAME_NODE, null)?.value || "";
            setName(name);
        })
    }, [store, turtle]);


    const onSubmit = async (data: FormData): Promise<void> => {
        store.remove(store.match(PROFILE_NODE, NAME_NODE, null));
        store.add(st(PROFILE_NODE, NAME_NODE, lit(data.name)));
        return new Promise((resolve, reject) => serialize(null, store, null, 'text/turtle', (error, result) => {
            if (error) return reject(error);
            setTurtle(result);
            resolve();
        }));
    };

    return <Demo name={name} onSubmit={onSubmit}/>
}