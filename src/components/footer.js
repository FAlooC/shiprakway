import React from 'react'
import Divider from './divider'

const Footer = () => {
    return (
        <footer className="bg-gray p-md-4 p-3 text-center footer">
            <Divider className="bg-gray-dark" />
            <h2 className="text-light">Contact Us</h2>
            <Divider className="bg-gray-dark" />
            <a href="mailto:support@shiprakway.com" className="text-light p-md-3 p-2">
                support@shiprakway.com
            </a>
            <p className="text-light p-md-3 p-2">+91 9850512972</p>
        </footer>
    )
}

export default Footer
