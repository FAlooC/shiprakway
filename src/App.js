import React, { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'

function App() {
    const [load, setLoad] = useState(true)
    return (
        <div className={load ? 'load' : 'loaded'} onLoad={() => setLoad(false)}>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App
