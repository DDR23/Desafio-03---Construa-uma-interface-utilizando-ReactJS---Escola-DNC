import './index.scss'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <a href="/organizacao">
                    <div className="navbar__btn">
                        Organização
                    </div>
                </a>
                <a href="/">
                    <div className="navbar__btn show">
                        Tarefas
                    </div>
                </a>
            </div>
        </>
    )
}