import React from 'react'
import Divider from './divider'

const Footer = () => {
    return (
        <footer id="footer" className="bg-gray px-md-5 pt-lg-5 p-3 text-center footer">
            <div className="container">
                <Divider className="bg-gray-dark" />
                <h2 className="text-light">Contact Us</h2>
                <Divider className="bg-gray-dark" />
                <div className="p-lg-3 p-2">
                    <a href="mailto:support@shiprakway.com" className="text-light">
                        <img className="mx-lg-3 mx-2" src={process.env.PUBLIC_URL + '/img/mail.svg'} alt="mail icon" />
                        support@shiprakway.com
                    </a>
                </div>
                <p className="text-light p-lg-3 p-2">
                    <img className="mx-lg-3 mx-2" src={process.env.PUBLIC_URL + '/img/phone.svg'} alt="mail icon" />
                    +91 9850512972
                </p>
            </div>
        </footer>
    )
}

export default Footer
