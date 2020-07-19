import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-white fixed-top shadow">
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
        </nav>
    )
}

export default Navbar
