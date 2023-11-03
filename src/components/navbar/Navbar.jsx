import './index.scss'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar__btn">
                    <a href="/organizacao">Organização</a>
                </div>
                <div className="navbar__btn show">
                    <a href="/">Tarefas</a>
                </div>
            </div>
        </>
    )
}