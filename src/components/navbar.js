import React, { useState } from 'react'

const Navbar = () => {
    const [isCollapsed, setCollapsed] = useState(true)

    return (
        <nav className="navbar navbar-light bg-white fixed-top shadow navbar-expand-md">
            <a className="navbar-brand" href="/">
                <img
                    src={process.env.PUBLIC_URL + '/img/logo.png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top ml-2 mr-2"
                    alt=""
                />
                ShiprakWay
            </a>
            <span className="navbar-toggler-icon navbar-toggler border-0" onClick={() => setCollapsed(!isCollapsed)} />
            <div className={'navbar-collapse ' + (isCollapsed ? 'collapse' : '')}>
                <ul className="navbar-nav ml-auto mt-2 mt-md-0">
                    <li className="nav-item p-2" onClick={() => setCollapsed(true)}>
                        <a href="#footer">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
