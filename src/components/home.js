import React, { useCallback } from 'react'

import Divider from './divider'

const Home = () => {
    const handleClick = useCallback(() => {
        window.scrollTo({
            top: window.innerHeight - 56,
            behavior: 'smooth',
        })
    }, [])

    return (
        <React.Fragment>
            <img className="header" src={process.env.PUBLIC_URL + '/img/header.jpg'} alt="header" />
            <img
                className="arrow"
                src={process.env.PUBLIC_URL + '/img/down-arrow.svg'}
                alt="down-arrow"
                onClick={handleClick}
            />
            <section className="px-md-5 px-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 py-md-5 py-3">
                            <img className="w-100" src={process.env.PUBLIC_URL + '/img/logo-name.png'} alt="logo" />
                        </div>
                        <div className="col-md-8 col-12 py-3">
                            <Divider className="bg-light" />
                            <h2 className="text-primary display-4 text-md-left text-center">About Us</h2>
                            <Divider className="bg-light" />
                            <p className="content">
                                Independent adviser for PET bottle and preform making industry as a growth and
                                performance excellence partner at ShiprakWay. Having over three decade of professional
                                experience in various field and worked with top players of the industry. Now available
                                to the industry for doing loss analysis to improve OEE and helping in business
                                development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video">
                <iframe
                    title="Shiprakway Youtube video"
                    className="m-md-5 my-3"
                    src="https://www.youtube.com/embed/mV8_nuZ9DPg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <section className="px-md-5 px-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-3">
                            <Divider className="bg-light mt-5" />
                            <h2 className="text-primary heading text-center">
                                Your growth and performance excellence partner
                            </h2>
                            <Divider className="bg-light" />
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-12 text-center">Specialised in Injection stretch blow moulding</div>
                    </div>
                    <div className="row py-md-4 py-3">
                        <div className="col-lg-6 col-12 text-secondary text-justify">
                            <div className="rcorners">Do you track or measure your OEE regularly?</div>
                            <div className="rcorners">If yes. Is it on right track?</div>
                            <div className="rcorners">
                                If not, what is killing it? Is it speed or Performance or breakdown
                            </div>
                            <div className="rcorners">Do you track above, measure and do loss analysis</div>
                            <div className="rcorners">
                                It’s evident that 1% improvement in OEE add 3%~4% to bottom line
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 text-primary text-justify">
                            <p className="right-box p-md-4 p-1">
                                With three decade of rich experience in this business only. We can be your growth and
                                performance excellence partner to improve OEE using new concept of online regular
                                performance review with your plant team using MADAM4 Step Technology
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-md-5 px-3 mb-5">
                <div className="container">
                    <Divider className="bg-light mb-5" />
                    <p className="content">
                        Based in the city of Bengaluru, we provide superior services in the area of Operations.
                    </p>
                    <p className="content">
                        During the manufacturing cycle of a PET product, it goes through various stages before it is
                        ready to be sold in a commercial form. Among these multiple stages, a few are generally
                        overlooked. A detailed study reveals that because of this, the actual manufacturing cost is much
                        more than what was initially projected. This underestimation leads to higher budgeted
                        expenditure for the particular product.
                    </p>
                    <p className="content">ShiprakWay can help you overcome this major issue and improve your OEE.</p>
                    <h2 className="text-primary heading mt-5 w-mc">
                        Our Domain
                        <Divider className="bg-light" />
                    </h2>
                    <ol type="a" className="content text-left">
                        <li className="mt-3">
                            Consulting in the areas of Restructuring, Transaction Advisory, Process re-engineering,
                            Production Management, Product development
                        </li>
                        <li className="mt-3">Compliances in the areas of productivity and cost control</li>
                        <li className="mt-3">
                            Mentoring various projects at large, with the knowledge set to keep up with the constant
                            change in technology
                        </li>
                    </ol>
                    <h2 className="text-primary heading mt-5 w-mc">
                        Our Goal
                        <Divider className="bg-light" />
                    </h2>
                    <p className="content mt-3">
                        Our goal is to exceed the expectations of every client by offering outstanding customer service,
                        increasing flexibility and value, thus optimizing organizational functionality and raising
                        efficiency.
                    </p>
                    <h2 className="text-primary heading mt-5 w-mc">
                        Our Knowledge Bank
                        <Divider className="bg-light" />
                    </h2>
                    <p className="content mt-3">
                        Our functional and technical expertise, combined with hands-on experience, ensures that our
                        clients receive the most effective and professional service. We accomplish our goals by
                        utilizing the skills of a unique team of seasoned professionals in the fields of Organisational
                        and Leadership Development, Production Management, Strategic Planning, and Operational
                        Execution. Companies continuously want to grow and evolve, and we help them by sharing our
                        expertise and essential tools in making those successful transitions.
                    </p>
                    <p className="content mt-3">
                        To achieve our goals, we need to network with companies and people that have a passion for
                        success and are looking to take the next step. We would like to partner with your company to
                        help you create the most profitable, flexible, sustainable, and supportive organization
                        possible.
                    </p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home
