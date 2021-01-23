import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
          <h1>A great invention of Human!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="/images/img-9.jpg"
              text="All computers wait at the same speed"
              label="Software"
              path="/services" />
            <CardItem
              src='images/img-2.jpg'
              text=' The uniqueness of the human mind'
              label='Little World'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.webp'
              text='Measuring programming progres by lines of code is like measuring aircraft buildingf progress.'
              label='Measuring efforts'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.'
              label='Code for readability'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='I am very font of you because you are just my type.'
              label='Qwerty'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
/*import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>A great invention of Human!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                    <CardItem 
                    src="/images/img-9.jpg"
                    text="All computers wait at the same speed"
                    label="Software"
                    path="/services"
                    />                    
                    <CardItem 
                    src="/images/img-2.jpg"
                    text="All computers wait at the same speed"
                    label="Software"
                    path="/services"
                    />
                    </ul><ul className="cards_items">
                    <CardItem 
                    src="/images/img-9.jpg"
                    text="All computers wait at the same speed"
                    label="Software"
                    path="/services"
                    />                    
                    <CardItem 
                    src="/images/img-2.jpg"
                    text="All computers wait at the same speed"
                    label="Software"
                    path="/services"
                    />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards*/
