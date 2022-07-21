import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import Ourcompany from '../images/our-company.jpg';
import Cards from '../inc/Cards';
import TestimonialSection from '../inc/TestimonialSection';
import Footer from '../inc/Footer'

function Home() {
    return (
        <>
            <Slider />
            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 text-center mb-5'>
                            <img src={Ourcompany} className="d-block w-100" alt="..." />
                        </div>
                        <div className='col-md-6 mb-5'>
                            <h2 className='text-success'>OUR COMPANY</h2>
                            <div className='underline mb-3'></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Link to="/about" className="btn btn-lg btn-success border-radius-0">Read More</Link>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='text-success'>KNOW US</h2>
                            <div className='underline mb-3'></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Link to="/about" className="btn btn-lg btn-success border-radius-0">Read More</Link>
                        </div>
                        <div className='col-md-6 text-center'>
                            <img src={Ourcompany} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </section>
            <Cards />

            <TestimonialSection />
            <Footer />

        </>
    )
}

export default Home;