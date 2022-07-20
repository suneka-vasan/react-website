import React from 'react'
import CardItem from './CardItem';
import cardimg1 from '../images/card-1.jpg';
import cardimg2 from '../images/card-2.jpg';
import cardimg3 from '../images/card-3.jpg';
import cardimg4 from '../images/card-4.jpg';

function Cards() {
    return (
        <div className='bg-c-light py-5'>
            <div className='container'>
                <h2 className='text-success text-center'>OUR SERVICES</h2>
                <div className='underline mx-auto mb-3'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <CardItem
                                src={cardimg1}
                                title="Card Item-1"
                                bodytext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                path="/about"
                            />
                        </div>
                        <div className='col-md-6'>
                            <CardItem
                                src={cardimg2}
                                title="Card Item-2"
                                bodytext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                                path="/contact"
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <CardItem
                                src={cardimg3}
                                title="Card Item-3"
                                bodytext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                                path="/home"
                            />
                        </div>
                        <div className='col-md-6'>
                            <CardItem
                                src={cardimg4}
                                title="Card Item-4"
                                bodytext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                path="/home"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
