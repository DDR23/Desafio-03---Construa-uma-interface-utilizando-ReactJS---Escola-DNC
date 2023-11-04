import './index.scss'
import { FiEdit, FiTrash, FiPlusSquare } from "react-icons/fi";

export default function Tabela({ data, tarefa }) {

    console.log(data)
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
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <p>{item.title}</p>
                                </td>
                                <td>
                                    <input type='checkbox' name="estado" id="estado" />
                                </td>
                                <td>
                                    <FiEdit size={18}/>
                                    <FiTrash size={18}/>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <div className="tabela__newitem">
                    <input type="text" placeholder='Nova tarefa...' />
                    <FiPlusSquare size={18}/>
                </div>
            </main>
        </>
    )
}