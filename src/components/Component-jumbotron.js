import React from 'react';

const Jumbo = (props) => {
    return (
        <div className="jumbotron my-4 mx-auto w-75">
            <h1 className="display-3">{props.title}</h1>
            <p className="lead">{props.paragraph}</p>         
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="." role="button">{props.button}</a>
            </p>
        </div>
    )
}
// <Jumbo title="" paragraph="" button="" />
export default Jumbo;