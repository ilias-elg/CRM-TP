function Header({ total }) {
    return (
        <header className="header">
            <div>
                <h1>Mon CRM</h1>
                <p>Gérez vos clients simplement</p>
            </div>
            <div className="compteur">
                <strong>{total}</strong>
                client(s) enregistré(s)
            </div>
        </header>
    );
}

export default Header;
