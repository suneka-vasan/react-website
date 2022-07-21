import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="card mb-3">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-4">
                                <img src={props.src} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">{props.bodytext}</p>
                                    <Link to={props.path}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem;