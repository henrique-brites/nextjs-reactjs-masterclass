import { useState } from "react";
import Layout from "../components/Layout";

export default function State() {
    const state = useState(0); // React Hooks

    let number = state[0];
    let alterNumber = state[1]

    console.log(state);

    function incrementar() {
        alterNumber(number + 1)
    }

    return (
        <Layout title="Componente com Estado">
            <div>{number}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}