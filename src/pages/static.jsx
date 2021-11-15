import Layout from "../components/Layout";

export async function getStaticProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Static(props) {
    return (
        <Layout title="Conteúdo Estático">
            <div>{props.number}</div>
        </Layout>
    )
}