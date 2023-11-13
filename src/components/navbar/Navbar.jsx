import './index.scss'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar__btn disabled">
                    Organização
                </div>
                <a href="/">
                    <div className="navbar__btn show">
                        Tarefas
                    </div>
                </a>
            </div>
        </>
    )
}