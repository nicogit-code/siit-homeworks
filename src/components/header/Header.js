import React from 'react'

function Header(props) {
    return (
        <header>
            <h1>Titlul Paginii/Logo</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                </ul>
            </nav>
            <section>
                Bine ai revenit, { props.user }!
            </section>
        </header>
    );
}

export default Header;