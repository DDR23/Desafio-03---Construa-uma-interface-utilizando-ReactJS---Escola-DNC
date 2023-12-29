import './index.scss'
import Tabela from '../../components/tabela/Tabela'

export default function Tarefas({ data }) {
    return (
        <>
            <main className="header">
                <h1 className="header__titutlo">Otimize seu tempo com o nosso Planejador Diário.</h1>
            </main>
            <Tabela data={ data }/>
        </>
    )
}