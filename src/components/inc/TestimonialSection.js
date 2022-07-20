import React from 'react';
import Person1 from '../images/person-1.png';

function TestimonialSection() {
    return (
        <section>
            <div className='container mt-5 mb-5'>
                <div className='testimonial-section'>
                    <h2 className='text-warning text-center'>Client's Say</h2>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-md-3">
                                        <img className="w-25 d-block mx-auto" src={Person1} alt="First slide" />
                                        <p className='text-center text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p className='text-center text-white'>Name</p>
                                        <p className='text-center text-white'>   </p>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-md-3">
                                        <img className="w-25 d-block mx-auto" src={Person1} alt="First slide" />
                                        <p className='text-center text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p className='text-center text-white'>Name</p>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-md-3">
                                        <img className="w-25 d-block mx-auto" src={Person1} alt="First slide" />
                                        <p className='text-center text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p className='text-center text-white'>Name</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TestimonialSection