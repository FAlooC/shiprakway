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
            <button class="navbar-toggler" type="button" onClick={() => setCollapsed(!isCollapsed)}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class={'navbar-collapse ' + (isCollapsed ? 'collapse' : '')}>
                <ul class="navbar-nav ml-auto mt-2 mt-md-0">
                    <li class="nav-item p-2" onClick={() => setCollapsed(true)}>
                        <a href="#footer">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
