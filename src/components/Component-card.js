import React from 'react';

const Card = (props) => {

  return (
    <div class="col-lg-3 col-md-6 mb-4">
      <div className="card" >
        <img src={props.image} className="card-img-top" alt={props.imageName}></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer"><a href={props.link} className="btn btn-primary">{props.button}</a>
        </div>
      </div>
    </div>
  )
}

export default Card;