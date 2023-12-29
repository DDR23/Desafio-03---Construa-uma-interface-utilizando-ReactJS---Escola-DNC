import './index.scss'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const btns = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Tarefas',
            link: '/tarefas'

        },
        {
            name: 'Organização',
            link: '/organizacao'
        }
    ]

    return (
        <>
            <div className="navbar">
                {btns.map((btn, index) => (
                    <NavLink
                    key={index}
                    to={btn.link}
                    className= 'navbar__btn'
                    activeClassName= 'active'
                    >
                        <p>{btn.name}</p>
                    </NavLink>
                ))}
            </div>
        </>
    )
}