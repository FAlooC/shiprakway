import React, { useCallback, useState } from 'react'
import Divider from './divider'

const Footer = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const handleClick = useCallback((text, setShow) => {
        setShow(false)

        if (!navigator.clipboard) {
            var textArea = document.createElement('textarea')
            textArea.value = text

            textArea.style.top = '0'
            textArea.style.left = '0'
            textArea.style.position = 'fixed'

            document.body.appendChild(textArea)
            textArea.focus()
            textArea.select()
            try {
                if (document.execCommand('copy')) {
                    setShow(true)
                    setTimeout(() => setShow(false), 1000)
                }
            } catch (err) {
                console.log(err.message)
            }
            document.body.removeChild(textArea)
            return
        }

        navigator.clipboard
            .writeText(text)
            .then(() => {
                setShow(true)
                setTimeout(() => setShow(false), 1000)
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <footer id="footer" className="bg-gray px-md-5 pt-lg-5 p-3 text-center footer">
            <div className="container">
                <Divider className="bg-gray-dark" />
                <h2 className="text-light">Contact Us</h2>
                <Divider className="bg-gray-dark" />

                <div>
                    <p className="p-lg-3 p-2" onClick={e => handleClick('support@shiprakway.com', setShow1)}>
                        <img className="mx-lg-3 mx-2" src={process.env.PUBLIC_URL + '/img/mail.svg'} alt="mail icon" />
                        support@shiprakway.com
                    </p>
                    <span className={`p-lg-3 p-2 ${show1 ? 'show' : ''}`}>Copied!</span>
                </div>
                <div>
                    <p className="p-lg-3 p-2" onClick={() => handleClick('9850512972', setShow2)}>
                        <img
                            className="mx-lg-3 mx-2"
                            src={process.env.PUBLIC_URL + '/img/phone.svg'}
                            alt="phone icon"
                        />
                        +91 9850512972
                    </p>
                    <span className={`p-lg-3 p-2 ${show2 ? 'show' : ''}`}>Copied!</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
