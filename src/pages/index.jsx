import Link from 'next/link'
import Browser from '../components/Browser';

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
        }}>
            <Browser text="Estiloso" destiny="/stylish" />
            <Browser text="Exemplo" destiny="/example" color="#9400d3" />
            <Browser text="JSX" destiny="/jsx" color="crimson" />
            <Browser text="Navegação #01" destiny="/browser" color="green" />
            <Browser text="Navegação #02" destiny="/client/mt-2/123" color="blue" />
            <Browser text="Componente com Estado" destiny="/state" color="#a45b71" />
            <Browser text="Integração com API #01" destiny="/integration_1" color="#42a9a9" />
            <Browser text="Conteúdo Estático" destiny="/static" color="#fa054a" />
            <Browser text="Conteúdo Dinâmico" destiny="/dynamic" color=" #b9770e " />
        </div>
    );
}