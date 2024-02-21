import { Link } from 'gatsby'
import * as React from 'react'


const Header = () => {


    return (
        <div>
            <h1><Link to="/">Matou Réglé</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/chiens">Chiens</Link></li>
                    <li><Link to="/chats">Chats</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header