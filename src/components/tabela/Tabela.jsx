import './index.scss'

export default function Tabela() {
    return (
        <>
            <main className="tabela">
                <table className='tabela__content'>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Status</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                ola
                            </td>
                            <td>
                                dasj
                            </td>
                            <td>
                                gjbv
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="tabela__newitem">
                    <p>novo iten</p>
                    <p>+</p>
                </div>
            </main>
        </>
    )
}