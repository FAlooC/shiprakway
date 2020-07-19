import React from 'react'

import Divider from './divider'

const Home = () => {
    return (
        <React.Fragment>
            <img className="header" src={process.env.PUBLIC_URL + '/img/header.jpg'} alt="header" />
            <img className="arrow" src={process.env.PUBLIC_URL + '/img/down-arrow.svg'} alt="down-arrow" />
            <section className="px-md-5 px-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 py-md-5 py-3">
                            <img src={process.env.PUBLIC_URL + '/img/logo-name.png'} alt="logo" />
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
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <section className="px-md-5 px-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-3">
                            <Divider className="bg-light" />
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
                        <div className="col-md-6 col-12 text-secondary text-justify">
                            <div class="rcorners">Do you track or measure your OEE regularly?</div>
                            <div class="rcorners">If yes. Is it on right track?</div>
                            <div class="rcorners">
                                If not, what is killing it? Is it speed or Performance or breakdown
                            </div>
                            <div class="rcorners">Do you track above, measure and do loss analysis</div>
                            <div class="rcorners">It’s evident that 1% improvement in OEE add 3%~4% to bottom line</div>
                        </div>
                        <div className="col-md-6 col-12 text-primary text-justify">
                            <p className="right-box p-md-4 p-1">
                                With three decade of rich experience in this business only. We can be your growth and
                                performance excellence partner to improve OEE using new concept of online regular
                                performance review with your plant team using MADAM4 Step Technology
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home
