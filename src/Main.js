import React from 'react';
import Card from './components/Component-card';
import FooterCard from './components/Component-footer';
import Navbar from './components/Component-navbar'
import Jumbo from './components/Component-jumbotron'

const Main = () => {

  return (
    <>
    <div>
        <Navbar  mainElem="Start Bootstrap"elem1="Home" elem2="About" elem3="Services" elem4="Contact" />
    </div>
    <div>
    <Jumbo title="A Warm Welcome!" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat." button="Call to action!"/>
    </div>
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