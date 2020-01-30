import React from 'react';

const FooterCard = (props) => {

  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">{props.footerName}</p>
      </div>
    </footer>
  )
}

export default FooterCard;