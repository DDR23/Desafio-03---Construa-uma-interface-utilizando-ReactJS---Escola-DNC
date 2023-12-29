import './index.scss'
import { useState } from 'react';
import Modal from '../modal/Modal';
import { FiEdit, FiTrash, FiPlusSquare } from "react-icons/fi";

export default function Tabela({ data }) {

    const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', description: '' })
    const [novaTarefa, setNovaTarefa] = useState('')    

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
                                    <FiEdit onClick={() => setModalInfo({ isOpen: true, title: 'Deseja editar esse item?', description: item.description })} size={18} />
                                    <FiTrash onClick={() => setModalInfo({ isOpen: true, title: 'Deseja apagar esse item?', description: item.description })} size={18} />
                                </td>
                            </tr>
                        ))}
                        {
                            modalInfo.isOpen &&
                            <Modal isOpen={modalInfo.isOpen} isClose={() => setModalInfo({ ...modalInfo, isOpen: false })} titulo={modalInfo.title} descricao={modalInfo.description} />
                        }
                    </tbody>
                </table>
                <div className="tabela__newitem">
                    <input type="text" placeholder='Adicione uma nova tarefa' onChange={(e) => setNovaTarefa(e.target.value)}/>
                    <FiPlusSquare onClick={() => setModalInfo({ isOpen: true, title: 'Deseja adicionar  esse novo item?', description: novaTarefa })} size={18} />
                    {
                        modalInfo.isOpen &&
                        <Modal isOpen={modalInfo.isOpen} isClose={() => setModalInfo({ ...modalInfo, isOpen: false })} titulo={modalInfo.title} descricao={modalInfo.description} />
                    }
                </div>
            </main>
        </>
    )
}