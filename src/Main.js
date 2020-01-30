import React from 'react';
import Card from './components/Component-card';
import FooterCard from './components/Component-footer';

const Main = () => {

  return (
    <>
      <div className="container">
        <div className="row text-center">

          <Card image="http://placehold.it/500x325" imageName="Mi imagen" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." link="" button="Find out More!" />

          <Card image="http://placehold.it/500x325" imageName="Mi imagen" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." link="" button="Find out More!" />

          <Card image="http://placehold.it/500x325" imageName="Mi imagen" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." link="" button="Find out More!" />

          <Card image="http://placehold.it/500x325" imageName="Mi imagen" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." link="" button="Find out More!" />

        </div>
      </div>
      <FooterCard footerName="Copyright © Our Website 2020" />
    </>
  )

}

export default Main;