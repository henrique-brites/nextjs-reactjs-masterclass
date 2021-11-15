import Layout from "../components/Layout";

export async function getServerSideProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Dynamic(props) {
    return (
        <Layout title="Conteúdo Dinâmico">
            <div>{props.number}</div>
        </Layout>
    )
}